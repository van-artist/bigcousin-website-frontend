<template>
  <div class="blogs-page">
    <h1>博客文章</h1>
    <div class="blog-list">
      <BlogCard v-for="post in blogDetails" :key="post.id" :id="post.id" :title="post.title"
        :date=formatDate(post.createdAt) :author="post.author" />
    </div>
  </div>
</template>

<script>
import BlogCard from '@/views/blogs/components/BlogCard.vue'; // 确保路径正确
import axios from 'axios';

export default {
  name: 'BlogsPage',
  components: {
    BlogCard
  },
  data() {
    return {
      blogDetails: []
    }
  },
  mounted() {
    this.fetchBlogPosts();
  },
  methods: {
    fetchBlogPosts() {
      axios.get(`http://${process.env.VUE_APP_BACKEND_HOST}:3000/api/get/getAllBlogs`)
        .then(response => {
          this.blogDetails = response.data;
          if (this.blogDetails.length === 0) {
            console.warn('No blog details found');
          } else {
            console.log('Fetched blog details:', this.blogDetails);
          }
        })
        .catch(error => {
          console.error('Error fetching blog details:', error);
        });
    },
    formatDate(isoDateString) {
      if (!isoDateString) return '';
      const date = new Date(isoDateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>


<!-- 样式可以根据需要进行调整 -->
<style scoped>
.blogs-page {
  padding: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  min-height: 100vh;
}

h1 {
  text-align: center;
  color: #007bff;
  margin-bottom: 40px;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}




.blog-card-content {
  padding: 20px;
}

.blog-title {
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
}

.blog-date {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.blog-author {
  font-weight: bold;
}

a {
  transition: color 0.3s;
}

a:hover {
  color: #0056b3;
}

/* 媒体查询：适用于小屏幕设备 */
@media (max-width: 768px) {
  .blogs-page {
    padding: 20px;
    /* 在小屏幕上减少内边距 */
  }

  h1 {
    margin-bottom: 20px;
    /* 在小屏幕上减少标题下方的间距 */
  }

  .blog-list {
    gap: 15px;
    /* 在小屏幕上减少网格间距 */
  }
}

/* 媒体查询：适用于非常小的屏幕设备 */
@media (max-width: 480px) {
  .blog-list {
    grid-template-columns: 1fr;
    /* 在非常小的屏幕上使博客卡片占满整行 */
  }

}
</style>

