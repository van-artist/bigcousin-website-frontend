<template>
    <div class="tech-news">
        <h2>最新科技资讯</h2>
        <div class="news-list">
            <div v-for="(news, index) in newsItems" :key="index" class="news-item">
                <h3>{{ news.title }}</h3>
                <p>{{ news.summary }}</p>
                <span>发布时间：{{ news.publishedAt }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TechNews',
    data() {
        return {
            // 示例数据，实际应用中可能会从外部API获取
            newsItems: [
                {
                    title: "科技新闻标题1",
                    summary: "这里是科技新闻1的简短描述...",
                    publishedAt: "2024-02-18"
                },
                // 更多新闻项...
            ]
        };
    }
}
</script>

<style scoped>
.tech-news {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
}

.news-list {
    display: flex;
    flex-direction: column;
}

.news-item {
    margin-bottom: 20px;
}

.news-item h3 {
    margin: 0;
    color: #333;
}

.news-item p {
    margin: 5px 0;
    color: #666;
}

.news-item span {
    font-size: 0.8em;
    color: #999;
}
</style>
