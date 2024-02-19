<template>
    <div class="profile">
        <div class="avatar">
            <img :src="imagePath || '/api/images/default.png'" alt="Profile avatar" />
        </div>
        <h1>{{ name }}</h1>
        <p class="description">{{ description }}</p>
        <div class="contacts">
            <a :href="`mailto:${email}`" class="button">Email Me</a>
            <a :href="github" target="_blank" class="button">Github</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalProfile',
    data() {
        return {
            name: "",
            description: "",
            email: "",
            github: "",
            imagePath: "",
        };
    },
    methods: {
        async fetchProfile() {
            try {
                const response = await fetch(`http://${process.env.VUE_APP_BACKEND_HOST}:3000/api/get/getProfile`);
                if (!response.ok) throw new Error('Failed to fetch profile data');
                const profiles = await response.json();
                if (profiles.length > 0) {
                    const profile = profiles[0]; // Assuming the first profile is the one to display
                    this.name = profile.name;
                    this.description = profile.description;
                    this.email = profile.email;
                    this.github = profile.github;
                    // Assuming imagePath is relative to the '/api/images' endpoint
                    this.imagePath = profile.imagePath ? `http://${process.env.VUE_APP_BACKEND_HOST}:3000/api/images/${profile.imagePath}` : '/api/images/default.png';
                }
            } catch (err) {
                console.error('Error fetching profile:', err.message);
                // Handle error or set default values
            }
        }
    },
    mounted() {
        this.fetchProfile();
    }
}
</script>


<style scoped>
.profile {
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /* 背景改为渐变色:浅蓝渐变 */
    background: linear-gradient(to bottom, #79bae0, #8489a4);
}

.avatar img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
}


.description {
    text-align: center;
    margin: 10px 0;
    color: #666;
}

.contacts {
    margin-top: 20px;
}

.button {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    margin: 10px 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3;
    /* 取消文字下划线 */
    text-decoration: none;
}

a {
    color: #007bff;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* 媒体查询：针对屏幕宽度小于或等于600px的设备 */
@media (max-width: 600px) {
    .profile {
        max-width: 350px;
        padding: 15px;
        /* 在小屏幕上减少内边距 */
        border-radius: 8px;
        /* 在小屏幕上减少边框半径 */
    }

    .avatar img {
        width: 80px;
        /* 在小屏幕上减小头像尺寸 */
        height: 80px;
    }

    .description {
        margin: 8px 0;
        /* 在小屏幕上调整间距 */
    }

    .button {
        padding: 8px 16px;
        /* 在小屏幕上调整按钮大小 */
        margin: 0 5px;
        /* 在小屏幕上调整按钮间距 */
    }
}
</style>
