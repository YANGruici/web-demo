# Vue.js 知识总结

Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。与其他大型框架不同，Vue
设计之初是为了渐进采用。Vue
的核心库只关注视图层，它不仅易于上手，还便于与第三方库或现有项目整合。另一方面，当与现代工具链和各种支持库结合使用时，Vue.js
也完全能够为复杂的单页面应用程序提供驱动。

## Vue实例

### 介绍

Vue实例是Vue的核心，所有的Vue应用都是通过创建一个Vue实例开始的。每一个Vue应用都是通过
`new Vue` 创建一个根实例启动的，并且会将该实例挂载到一个DOM元素上。

### 代码示例

```vue
<template>
  <div id="app">
    {{ message }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
};
</script>
```

### 解释

- `el`: Vue实例挂载的目标DOM元素。
- `data`: Vue实例的状态对象，可以定义数据。

## 模板语法

### 介绍

Vue使用基于HTML的模板语法，允许开发者声明式地将DOM绑定至Vue实例的数据。所有Vue.js的模板都是合法的HTML，因此可以被浏览器和HTML解析器解析。

### 代码示例

```vue
<template>
  <div id="app">
    <p>{{ message }}</p>
    <p :title="message">
      鼠标悬停几秒钟查看此消息。
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    };
  }
};
</script>
```

### 解释

- `{{ message }}`: 插值，显示`message`的数据。
- `v-bind:title`: 动态绑定元素属性。

## 计算属性和侦听器

### 介绍

计算属性是基于依赖进行缓存的，只有依赖发生改变，才会重新计算。而侦听器用于响应数据的变化。

### 代码示例

```vue
<template>
  <div id="app">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello'
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
};
</script>
```

### 解释

- `computed`: 用于声明计算属性，`reversedMessage`是基于`message`的计算结果。
- 计算属性与方法的区别在于，计算属性是基于它们的依赖进行缓存的。

## Class与Style绑定

### 介绍

Vue允许你以简洁的语法动态绑定HTML class和style。

### 代码示例

```vue
<template>
  <div id="app">
    <div :class="{ active: isActive }">Class Binding</div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style Binding</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      activeColor: 'red',
      fontSize: 30
    };
  }
};
</script>
```

### 解释

- `v-bind:class`: 动态地绑定一个或多个class。
- `v-bind:style`: 动态地绑定内联样式。

## 条件渲染

### 介绍

Vue.js 通过 `v-if`, `v-else`, `v-else-if` 来实现条件渲染。

### 代码示例

```vue
<div id="app">
    <p v-if="isShow">显示这段话</p>
    <p v-else>否则显示这段话</p>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            isShow: true
        }
    });
</script>
```

### 解释

- `v-if`: 根据条件渲染元素。
- `v-else`: `v-if`的备用选项。

## 列表渲染

### 介绍

使用 `v-for` 指令可以基于一个数组来渲染一个列表。

### 代码示例

```vue
<template>
  <div id="app">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: '蔬菜' },
        { id: 2, text: '水果' },
        { id: 3, text: '牛奶' }
      ]
    };
  }
};
</script>
```

### 解释

- `v-for`: 用于遍历数组或对象，并生成相应的DOM元素。

## 事件处理

### 介绍

使用 `v-on` 指令可以监听DOM事件，并在事件触发时执行一些JavaScript代码。

### 代码示例

```vue
<template>
  <div id="app">
    <button @click="greet">点击我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    };
  },
  methods: {
    greet() {
      alert(this.message);
    }
  }
};
</script>
```

### 解释

- `v-on`: 绑定事件监听器，`greet` 方法在按钮点击时被调用。

## 表单输入绑定

### 介绍

`v-model` 指令用于在表单控件元素上创建双向数据绑定。

### 代码示例

```vue
<template>
  <div id="app">
    <input v-model="message" placeholder="编辑我">
    <p>Message is: {{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    };
  }
};
</script>
```

### 解释

- `v-model`: 双向绑定表单输入和数据。

## 组件基础

### 介绍

组件是Vue.js最强大的功能之一。组件扩展了HTML元素，封装了可重用的代码片段。

### 代码示例

```vue
<template>
  <div id="app">
    <my-component></my-component>
  </div>
</template>
<script>
export default {
  components: {
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
};
</script>
```

### 解释

- `Vue.component`: 定义一个全局组件，`template`指定了组件的HTML模板。

## 组件间通信

### 介绍

组件间的通信可以通过 `props` 和 `events` 实现。

### 代码示例

```vue
<template>
  <div id="app">
    <child-component :message="parentMessage"></child-component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parentMessage: '来自父组件的消息'
    };
  },
  components: {
    'child-component': {
      props: ['message'],
      template: '<p>{{ message }}</p>'
    }
  }
};
</script>
```

### 解释

- `props`: 用于在父组件和子组件之间传递数据。

## 插槽

### 介绍

插槽允许你像实现HTML元素那样使用组件，可以在使用组件时动态地插入内容。

### 代码示例

```vue
<template>
  <div id="app">
    <custom-component>
      <p>这是一些被插入的内容。</p>
    </custom-component>
  </div>
</template>
<script>
export default {
  components: {
    'custom-component': {
      template: '<div><slot></slot></div>'
    }
  }
};
</script>
```

### 解释

- `<slot>`: 插槽用于标记内容插入点。

## 动态组件与异步组件

### 介绍

动态组件允许在同一个挂载点动态切换多个组件。异步组件是当组件实际需要时才进行加载。

### 代码示例

```vue
<template>
  <div id="app">
    <component :is="currentComponent"></component>
    <button @click="currentComponent = 'component-a'">Component A</button>
    <button @click="currentComponent = 'component-b'">Component B</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentComponent: 'component-a'
    };
  },
  components: {
    'component-a': {
      template: '<div>Component A</div>'
    },
    'component-b': {
      template: '<div>Component B</div>'
    }
  }
};
</script>
```

### 解释

- `<component v-bind:is="currentComponent">`:
  动态组件，根据`currentComponent`的值动态切换组件。

## 过渡与动画

### 介绍

Vue.js 提供了在插入、更新或移除DOM元素时应用过渡效果的方式。

### 代码示例

```vue
<template>
  <div id="app">
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Hello Vue.js</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

### 解释

- `<transition>`: 用于包裹需要过渡效果的元素或组件。
- 通过在CSS中定义 `.fade-enter-active` 和 `.fade-leave-active`
  等类来实现动画效果。

## Vue Router 路由

### 介绍

Vue Router 是 Vue.js 官方的路由管理器，用于创建单页面应用 (SPA)。

### 代码示例

```vue
<template>
  <div id="app">
    <p>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
import VueRouter from 'vue-router';
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
];
const router = new VueRouter({
  routes
});
export default {
  router
};
</script>

```

### 解释

- `VueRouter`: Vue的路由实例。
- `routes`: 定义路由和组件之间的映射。

## Vuex 状态管理

### 介绍

Vuex 是一个专为 Vue.js
应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

### 代码示例

```vue
<template>
  <div id="app">
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
<script>
import Vuex from 'vuex';
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
export default {
  store,
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};
</script>
```

### 解释

- `Vuex.Store`: 创建一个Vuex实例，用于管理应用的状态。
- `state`: 存储单一状态树。
- `mutations`: 改变状态的方法。

## Vue3 新特性

### 介绍

Vue 3 相比 Vue 2 引入了多个新特性，如组合式API、性能提升、Fragment、Teleport等。

### 代码示例

```vue
<template>
  <div id="app">{{ count }}</div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const count = ref(0);
    onMounted(() => {
      setInterval(() => {
        count.value++;
      }, 1000);
    });
    return {
      count
    };
  }
};
</script>

```

### 解释

- `setup()`: 是组合式API的入口，可以在其中使用Vue3的新特性如 `ref`。
- `ref`: 用于创建响应式的数据对象。

