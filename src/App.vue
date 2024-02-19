<template>
  <div id="app">
    <div class="general-container">
      <NavigationBar />
      <div class="router-view-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
/* 取消外边距 */
html,
body {
  margin: 0;
}

.router-view-container {
  height: 100vh;
}

.general-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #536976, #666b83);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: 'Nunito', sans-serif;
  color: white;
  font-size: 20px;
}
</style>
