<!-- NavigationBar.vue -->
<template>
  <nav class="top-nav">
    <ul>

      <li>
        <router-link to="/" exact active-class="active" class="router-link-box">
          <div>
            首页
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/blogs" active-class="active" class="router-link-box">
          <div>
            博客
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/chat" active-class="active" class="router-link-box">
          <div>
            聊天
          </div>
        </router-link>
      </li>
      <!-- <li><router-link to="/about">关于我们</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li> -->
      <!-- Add more navigation links here -->
    </ul>
  </nav>
</template>
  
<script>
export default {
  name: 'NavigationBar'
  // You can add JavaScript logic here if needed
}
</script>
  
<style >
.top-nav {
  /* background: linear-gradient(to right, #536976, #292E49); */
  /* 设置透明背景 */
  overflow: hidden;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Nunito', sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

li {
  padding: 5px 15px;
  margin: 0 30px;
  border-radius: 40px;
}

li a,
router-link {
  width: 100%;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.router-link-box>div {
  width: 100%;
  height: 100%;
  padding: 2px 15px;
  border-radius: 40px;
}

.router-link-box>div:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* 当router-link处于激活状态时改变内部div的样式 */
.router-link-box.active>div {
  background-color: #254c63;
  /* 激活状态的背景颜色 */
  color: #FFFFFF;
  /* 激活状态的字体颜色 */
  /* 可以添加更多样式变化，如边框、字体大小等 */
}

@media (max-width: 768px) {
  .top-nav {
    justify-content: center;
    /* 屏幕较小时居中对齐 */
    max-height: 50px;
  }

  ul {
    justify-content: center;
    /* 确保在响应式布局中选项也居中 */
  }

  /* 更新小屏幕下 a 和 router-link 的样式 */
  li a,
  router-link {
    padding: 10px 12px;
  }
}
</style>
