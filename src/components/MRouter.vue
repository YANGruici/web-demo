<template>
  <div class="navigation">
    <div class="nav-item">
      <router-link to="/app">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-icon-15"></use>
        </svg>
        <span>小程序</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/react">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-React"></use>
        </svg>
        <span>React</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/vue">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <span>Vue</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/echarts">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-ECharts"></use>
        </svg>
        <span>ECharts</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/echartscss">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-ECharts"></use>
        </svg>
        <span>图表美化</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/html">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-html"></use>
        </svg>
        <span>HTML</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/css">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-css"></use>
        </svg>
        <span>CSS</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/bootstrap">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-Bootstrap"></use>
        </svg>
        <span>Bootstrap</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/javascript">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-JavaScript"></use>
        </svg>
        <span>JavaScript</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/jquery">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-jQuery"></use>
        </svg>
        <span>JQuery</span>
      </router-link>
    </div>
    <div class="nav-item">
      <router-link to="/blog">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-bokexinwen"></use>
        </svg>
        <span>Blog</span>
      </router-link>
    </div>
    <div class="nav-item dropdown" ref="dropdownTrigger">
      <a href="https://github.com/YANGruici/web-demo">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-github"></use>
        </svg>
        <span>GitHub</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MRouter',
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:95px;

    svg.icon {
      margin-bottom: 8px;
      width: 2em;
      height: 2em;
      fill: currentColor;
    }

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s, color 0.3s;
      color: white;
      &:hover {
        transform: scale(1.1);
        color: #409eff;
      }

      span {
        margin-top: 4px;
      }
    }
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;

      svg.icon {
        margin-bottom: 8px;
      }
    }
  }
}

.icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
  overflow: hidden;
  margin: 0;
}
</style>
