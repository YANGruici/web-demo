<template>
  <div class="app-container">
    <SpinnerLoader :loading="loading" />

    <div v-if="!loading">
      <div v-if="showHeader" class="header">
        <div class="animated-text animate__animated animate__rubberBand">
          <Particles id="tsparticles" :options="particles" />
          <div class="text-container">
            <span>A journey of a thousand miles begins with a single step.</span>
          </div>
          <button @click="show" class="show-content-button">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon--startup"></use>
            </svg>
            Start
          </button>
          <div class="illustration">
            <img :src="img" loading="lazy" alt="Illustration" />
            <div class="credit">
              Illustration by <a href="https://icons8.com/illustrations/author/N3YOxdn12Kox">Marina Mogulska</a>
              from <a href="https://icons8.com/illustrations">Ouch!</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showContent" class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerLoader from '@/components/SpinnerLoader';
import 'animate.css';
import { particles } from '@/assets/js/particles.js';

export default {
  name: 'App',
  data() {
    return {
      img: require('@/assets/image/memphis-web-design-with-the-word-create.gif'),
      particles: particles,
      showHeader: true,
      showContent: false,
      loading: true
    };
  },
  components: {
    SpinnerLoader
  },
  methods: {
    show() {
      this.showHeader = false;
      this.showContent = true;
    },
    hideLoader() {
      this.loading = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.hideLoader();
    });
  }
}
</script>
<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
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
  justify-content: space-between;
  text-align: center;
  font-family: Qwigley-Regular;
  color: black;
  font-size: 4vw; /* Use responsive units */
  height: 100vh;
  width: 100%;
  padding: 20px;
}

.text-container {
  flex: 2;
}

.illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
}

.credit {
  font-size: 0.75rem;
  text-align: center;
}

.show-content-button {
  z-index: 1;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  justify-content: space-between;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
}

.show-content-button:hover,
.show-content-button:focus {
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
  justify-content: center;
  align-items: center;
  flex: 1;
}

.icon {
  width: 2em;
  height: 1.5em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 0.5em;
}
</style>