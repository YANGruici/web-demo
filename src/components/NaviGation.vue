<template>
  <nav>
      <ul>
        <li><router-link to="/vue">Vue</router-link></li>
        <li><router-link to="/react">React</router-link></li>
        <li><router-link to="/echarts">Echarts</router-link></li>
        <li><router-link to="/html">HTML</router-link></li>
        <li><router-link to="/" style="margin-left: 120px">Home</router-link>
          <dv-decoration5 :dur="2" style="width:300px;height:40px; margin: 0 auto;" /></li>
        <li><router-link to="/css">CSS</router-link></li>
        <li><router-link to="/bootstrap">Bootstrap</router-link></li>
        <li><router-link to="/javascript">JavaScript</router-link></li>
        <li><router-link to="/jquery">JQuery</router-link></li>
      </ul>
  </nav>
</template>

<script>
import { Decoration5 as DvDecoration5 } from '@kjgl77/datav-vue3'

export default {
  name: 'NaviGation',
  components: {
    DvDecoration5
  }
}
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
  margin: 0 20px;
}

nav ul li a {
  text-decoration: none;
  color: #000;
}
</style>
