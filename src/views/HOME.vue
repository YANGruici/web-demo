<template>
  <div class="small-bg">
    <MRouter/>
    <!-- 显示时间 -->
    <div class="time-display">{{ currentTime }}</div>
  </div>
</template>

<script>
import {ref, onMounted, onBeforeUnmount,nextTick} from 'vue';
import MRouter from "@/components/MRouter";
import moment from "moment";

export default {
  name: 'HOME',
  components: { MRouter },
  setup() {
    // 使用 ref 来存储当前时间
    const currentTime = ref(moment().format('YYYY-MM-DD dddd HH:mm:ss'));
    let timer = null;

    // 在组件挂载时设置定时器
    onMounted(() => {
      // Use nextTick to ensure the DOM is fully rendered before performing any operations
      nextTick(() => {
        timer = setInterval(() => {
          currentTime.value = moment().format('YYYY-MM-DD dddd HH:mm:ss');
        }, 1000);
      });
    });

    // 在组件卸载前清除定时器
    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {
      currentTime,
    };
  },
};
</script>

<style>
.small-bg {
  display: flex;
  flex-direction: column; /* 垂直方向布局 */
  justify-content: center; /* 垂直方向居中内容 */
  align-items: center; /* 水平方向居中内容 */
  height: 100vh;
  width: 100%;
  background-image: url('https://krseoul.imgtbl.com/i/2024/09/14/66e5303dafa82.gif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.time-display {
  font-size: 24px;
  color: white;
  margin-top: 20px;
}
</style>