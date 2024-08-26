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
        <router-link to="/echarts" active-class="active">Echarts</router-link>
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
      <li class="dropdown licenter" ref="dropdownTrigger">
        <a href="https://github.com/YANGruici/web-demo" class="dropdown-toggle">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-github"></use>
          </svg>
          GitHub
        </a>
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

<style scoped>
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 10px;
}

.licenter {
  display: flex;
  width: 90px;
  justify-content: center;
  align-items: center;
}

nav ul li a {
  text-decoration: none;
  color: #000;
  position: relative;
  display: inline-block;
  padding: 5px 0;
  transition: transform 0.3s, color 0.3s;
}

nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: #409eff;
  left: 0;
  bottom: 0;
  transition: width 0.3s;
}

nav ul li a.active::after {
  width: 100%;
}

nav ul li a:hover {
  transform: scale(1.1);
  color: #409eff; /* Change color on hover */
}

nav ul li a:active {
  transform: rotate(-2deg);
}

nav ul li a.active {
  font-weight: bold;
  color: #409eff;
}

/* Dropdown styles */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}

.dropdown-toggle::after {
  border: none;
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
