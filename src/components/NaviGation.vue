<template>
  <nav>
    <ul>
      <li class="licenter">
        <router-link to="/app" active-class="active">
          小程序
        </router-link>
      </li>
      <li class="licenter">
        <router-link to="/vue" active-class="active">Vue</router-link>
      </li>
      <li class="licenter">
        <router-link to="/react" active-class="active">React</router-link>
      </li>
      <li class="licenter">
        <router-link to="/echarts" active-class="active">ECharts</router-link>
      </li>
      <li class="licenter">
        <router-link to="/html" active-class="active">HTML</router-link>
      </li>
      <li>
        <router-link to="/" active-class="active" style="margin-left: 110px">
          <el-icon>
            <HomeFilled />
          </el-icon>
          Home
        </router-link>
        <dv-decoration5 :color="['#409eff', '#409eff']" :dur="2" style="width: 300px; height: 40px; margin: 0 auto;" />
      </li>
      <li class="licenter">
        <router-link to="/css" active-class="active">CSS</router-link>
      </li>
      <li class="licenter">
        <router-link to="/bootstrap" active-class="active">Bootstrap</router-link>
      </li>
      <li class="licenter">
        <router-link to="/javascript" active-class="active">JavaScript</router-link>
      </li>
      <li class="licenter">
        <router-link to="/jquery" active-class="active">JQuery</router-link>
      </li>
      <li class="licenter">
        <router-link to="/blog" active-class="active">个人博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Decoration5 as DvDecoration5 } from '@kjgl77/datav-vue3';
import { HomeFilled } from '@element-plus/icons-vue';

export default {
  name: 'NaviGation',
  components: {
    DvDecoration5,
    HomeFilled,
  },
};
</script>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 10px;

      &.licenter {
        display: flex;
        width: 90px;
        justify-content: center;
        align-items: center;
      }

      a {
        text-decoration: none;
        color: #000;
        position: relative;
        display: inline-block;
        padding: 5px 0;
        transition: transform 0.3s, color 0.3s;

        &::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #409eff;
          left: 0;
          bottom: 0;
          transition: width 0.3s;
        }

        &.active::after {
          width: 100%;
        }

        &:hover {
          transform: scale(1.1);
          color: #409eff; // Change color on hover
        }

        &:active {
          transform: rotate(-2deg);
        }

        &.active {
          font-weight: bold;
          color: #409eff;
        }
      }
    }
  }
}
</style>

