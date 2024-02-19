<template>
  <div class="page-container">
    <div class="home-container">
      <div>

      </div>
    </div>
    <div class="content-container">
      <div class="container-side">
        <div class="top">
          <personalProfile />
        </div>
        <div class="buttom">
          <MyCanlendar />
        </div>
      </div>
      <!-- <div class="container-main">
        <PoModoroTimer />
        <TechNews />
      </div> -->
    </div>

  </div>
</template>

<script>
import personalProfile from './components/personalProfile.vue'
import MyCanlendar from '@/components/MyCanlendar.vue';
// import TechNews from '@/components/TechNews.vue';
// import PoModoroTimer from '@/components/PomodoroTimer.vue';

export default {
  name: 'HomePage',
  components: {
    personalProfile,
    MyCanlendar,
    // TechNews,
    // PoModoroTimer
    // BoardBlock
  }
}
</script>

<style scoped>
.page-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #536976, #666b83);
}

.home-container {
  width: 100%;
  min-height: 100vh;
}



.container-main {
  width: 60%;
  float: left;
  padding: 20px;
  margin: 20px;
}

.content-container {
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
}

.container-side {
  margin: 0 10px;
  width: 35%;
  max-width: 400px;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-side .top {
  width: 100%;
  padding: 0;
  margin: 20px;
}

.container-side .buttom {
  width: 100%;
  padding: 0;
  margin: 20px;
}

/* 响应式布局 */
@media (max-width: 768px) {

  .container-main,
  .container-side {
    max-width: none;
    margin: 20px 0;
    float: none;
  }

  .container-side {
    padding: 0;
  }



  .container-main {
    padding: 10px;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .container-side {
    padding: 10px;
    margin: 10px 0;
  }

}
</style>

