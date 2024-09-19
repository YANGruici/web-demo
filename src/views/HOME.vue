<template>
  <div class="small-bg">
    <MRouter/>
    <!-- 显示时间 -->
    <div class="time-display">{{ currentTime }}</div>
  </div>
</template>

<script>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import MRouter from '@/components/MRouter';
import moment from 'moment';

export default {
  name: 'HOME',
  components: {MRouter},
  setup() {
    const currentTime = ref(moment().format('YYYY-MM-DD dddd HH:mm:ss'));
    let timer = null;

    // 设置定时器，定时更新当前时间
    const updateCurrentTime = () => {
      currentTime.value = moment().format('YYYY-MM-DD dddd HH:mm:ss');
    };

    // 在组件挂载时设置定时器
    onMounted(() => {
      timer = setInterval(updateCurrentTime, 1000);
    });

    // 在组件卸载前清除定时器
    onBeforeUnmount(() => {
      if (timer) {
        clearInterval(timer);
      }
    });

    return {
      currentTime,
    };
  },
};
</script>

<style scoped lang="scss">
.small-bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image:url('https://krseoul.imgtbl.com/i/2024/09/14/66e5303dafa82.gif');
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
