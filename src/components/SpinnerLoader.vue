<template>
  <div v-if="loading" class="boxLoading"></div>
</template>

<script>
export default {
  name: 'SpinnerLoader',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$loader-size: 50px;
$loader-color: #2196f3;
$shadow-color: rgba(255, 255, 255, 0.7);
$shadow-height: 5px;

.boxLoading {
  width: $loader-size;
  height: $loader-size;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &:before {
    content: '';
    width: $loader-size;
    height: $shadow-height;
    background: $shadow-color;
    position: absolute;
    top: $loader-size + 9px; // 59px
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }

  &:after {
    content: '';
    width: $loader-size;
    height: $loader-size;
    background: $loader-color;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>