<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <Navigation/>
    <!-- 路由展示页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/NaviGation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style scoped>
.app-container {
  display: block;
  flex-direction: column;
  height: 100%; /* 设置容器高度为100% */
  width: 100%;
}

router-view {
  flex: 10; /* 让路由展示页面占据剩余空间 */
}
</style>
