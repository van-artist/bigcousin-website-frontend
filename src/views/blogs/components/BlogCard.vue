<template>
  <div class="blog-card" @click="showBlog">
    <h3>{{ title }}</h3>
    <p class="author">{{ author }}</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    title: String,
    date: String,
    id: Number,
    author: String
  },
  methods: {
    showBlog() {
      console.log(this.id); // 调试输出，查看id
      this.$router.push(`/blogs/${this.id}`);
    }
  }
}
</script>
  
<style scoped>
.blog-card {
  /* 渐变色背景效果 */
  background: linear-gradient(135deg, #ffffff 0%, #c7c7cd 100%);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  /* 增强阴影效果 */
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  /* 添加对阴影的动画过渡 */
}

.blog-card:hover {
  transform: translateY(-3px);
  /* 减少鼠标悬停时的移动距离 */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  /* 提升阴影效果 */
  cursor: pointer;
}

h3 {
  margin-top: 0;
}

.date {
  color: #666;
  font-size: 0.9em;
}

/* 媒体查询：适用于小屏幕设备 */
@media (max-width: 768px) {
  .blog-card {
    padding: 15px;
    /* 在小屏幕上减少内边距 */
  }

  h3 {
    font-size: 1.1em;
    /* 在小屏幕上适当调整标题字体大小 */
  }

  .date {
    font-size: 0.8em;
    /* 在小屏幕上适当调整日期字体大小 */
  }
}
</style>
  