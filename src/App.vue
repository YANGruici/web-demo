<template>
  <div class="app-container">
    <div v-if="showHeader" class="header">
      <div class="animated-text animate__animated animate__rubberBand">
        <Particles id="tsparticles" :options="particles" />
        <div class="text-container">
          <span>A journey of a thousand miles begins with a single step.</span>
        </div>
        <button @click="show" class="show-content-button">
          <svg aria-hidden="true" class="icon"><use xlink:href="#icon--startup"></use></svg>Start
        </button>
        <div class="illustration">
          <img :src="img" />
          <div class="credit">
            Illustration by <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">Marina Mogulska</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showContent" class="main-content">
      <!-- 导航栏 -->
      <!--      <Navigation />-->
      <!-- 路由展示页面 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/NaviGation'
import 'animate.css';
import { particles } from '@/assets/js/particles.js'

export default {
  name: 'App',
  data() {
    return {
      img: require('@/assets/image/memphis-web-design-with-the-word-create.gif'),
      particles: particles,
      showHeader: true,
      showContent: false
    };
  },
  components: {
    // Navigation
  },
  methods: {
    show() {
      this.showHeader = false;
      this.showContent = true;
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden; /* 去掉滑动框 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.animated-text {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 水平分布 */
  text-align: center;
  font-family: Qwigley-Regular;
  color: black;
  font-size: 60px;
  height: 100vh;
  width: 100%;
  box-sizing: border-box; /* 确保内边距包含在总宽度中 */
}

.text-container {
  padding: 20px;
  flex: 2; /* 适当分配空间 */
}

.illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2; /* 适当分配空间 */
}

.credit {
  font-size: 10px;
  text-align: center;
}

.show-content-button {
  z-index: 1;
  font-size: 20px;
  cursor: pointer;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  justify-content: space-between;
}

.show-content-button:hover {
  transform: scale(1.1);
  background-color: #2980b9;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;

}

router-view {
  display: flex;
  justify-items: center;
  align-items: center;
  flex: 1;
}

.icon {
  width: 2em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 0px;
}
</style>
