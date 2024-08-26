<template>
  <div class="content">
  <div class="small-bg">
    <p class="intro">这是一个段落。</p>
    <button id="btn">点击我</button>
    </div>
    <div class="small" >
      <p class="intro">这是一个段落。</p>
      <button id="btn">点击我</button>
    </div>
  </div>

</template>

<script>


export default {
  name: 'HOME',
  mounted() {

  }
}
</script>

<style>
.content{
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column; /* 垂直方向布局 */
  justify-content: center; /* 垂直方向居中内容 */
  align-items: center; /* 水平方向居中内容 */
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.small-bg {

  display: flex;
  flex-direction: column; /* 垂直方向布局 */
  justify-content: center; /* 垂直方向居中内容 */
  align-items: center; /* 水平方向居中内容 */
  height: 100vh;
  width: 100%;
  background-image: url('@/assets/image/nature.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.small{
  display: flex;
  flex-direction: column; /* 垂直方向布局 */
  justify-content: center; /* 垂直方向居中内容 */
  align-items: center; /* 水平方向居中内容 */
  height: 100vh;
  width: 100%;
  background-color:antiquewhite;
}

</style>