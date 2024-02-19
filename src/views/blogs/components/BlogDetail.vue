<template>
    <div class="page-body">
        <div class="blog-cover">
            <img :src="coverImage" alt="Blog Cover" class="image">
        </div>
        <div class="blog-container">
            <div class="blog-body-side blog-info">
                <h1 class="blog-info-title">{{ blogDetails.title }}</h1>
                <!-- 显示作者与格式化的日期 -->
                <p class="blog-info-author">作者: {{ blogDetails.author }}</p>
                <p class="blog-info-data">日期: {{ formatDate(blogDetails.createdAt) }}</p>
            </div>
            <div class="blog-body-mid">
                <div class="blog-content" v-html="renderMarkdown"></div>
            </div>
            <div class="blog-body-side blog-body-right"></div>
        </div>
    </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import axios from 'axios';
export default {
    data() {
        return {
            contentPath: "",
            content: "",
            coverImage: require('@/assets/covers/gradients3.png'),
            id: this.$route.params.id,
            blogDetails: {}, // 初始化为一个对象
            createdAt: ""
        }
    },
    computed: {
        renderMarkdown() {
            const md = new MarkdownIt();
            return md.render(this.content);
        }
    },
    mounted() {
        // 获取博客内容和详情
        this.getBlogDetail();
    },
    methods: {
        getBlogDetail() {
            axios.get(`http://${process.env.VUE_APP_BACKEND_HOST}:3000/api/get/getBlogById/` + this.id)
                .then(response => {
                    this.blogDetails = response.data;
                    console.log('Fetched blog details:', this.blogDetails);
                    // 在获取到博客详情后，再获取Markdown内容
                    return axios.get(`http://${process.env.VUE_APP_BACKEND_HOST}:3000/api/markdown/` + this.blogDetails.markdownPath);
                })
                .then(response => {
                    // 这个.then()对应加载Markdown内容
                    this.content = response.data;
                })
                .catch(error => {
                    console.error('Error fetching blog details or content:', error);
                });
        },
        formatDate(isoDateString) {
            if (!isoDateString) return ''; // 添加检查以防isoDateString未定义
            const date = new Date(isoDateString);
            return new Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
        }
    }
}
</script>

<style>
.page-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to bottom right, #536976, #292E49);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.blog-cover {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    padding: 0;
}

.blog-cover .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
}

.blog-body-side,
.blog-body-mid {
    padding: 20px;
}

.blog-body-mid {
    flex: 4;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: auto;
    /* 自动调整宽度 */
    max-width: 800px;
}

.blog-content {
    color: white;
}

.blog-content pre {
    background: #201e1e;
    padding: 10px;
    border-radius: 5px;
}

.blog-content ul {
    display: block;
}

.blog-body-side {
    flex: 1;
}

.blog-info {
    margin-top: 10px;
    color: rgb(222, 212, 195);
}

.blog-info-title,
.blog-info-author,
.blog-info-data {
    text-align: center;
}

@media (max-width: 1000px) {
    .blog-container {
        flex-direction: column;
        align-items: center;
    }

    .blog-body-mid {
        max-width: 90%;
    }

    .blog-body-side {
        padding: 5px;
    }

    .blog-body-right {
        display: none;
    }

    .blog-info-author {
        /* 字体和边距减小 */
        font-size: 0.9em;
        margin: 5px;
    }

    .blog-info-data {
        /* 字体和边距减小 */
        font-size: 0.7em;
        margin: 5px;
    }

    .blog-info-title {
        /* 字体和边距减小 */
        font-size: 1.7em;
        margin: 5px;
    }
}

@media (max-width: 480px) {
    .blog-body-mid {
        width: 100%;
        /* 适应小屏幕宽度 */
        margin: 0 10px;
        /* 添加一些外边距 */
    }

    .blog-cover {
        height: 15vh;
    }

    .blog-content pre {
        padding: 0;
    }

    .blog-body-mid {
        padding: 10px;
        margin: 0;
    }

    .blog-body-side {
        padding: 0;
        margin: 0;

    }
}
</style>



