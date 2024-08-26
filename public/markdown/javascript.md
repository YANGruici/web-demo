# JavaScript 入门与进阶指南

JavaScript是一种强大的、解释型的编程语言，广泛应用于网页开发中，为网页添加交互性和动态效果。本指南将从零开始，逐步带领你了解JavaScript的基础知识到进阶应用，并将涵盖如何在
Vue.js 中使用这些知识点。

## 1. JavaScript 基础

### 1.1 变量与数据类型

#### 1.1.1 声明变量

在 JavaScript 中，可以使用 `let`, `const`, `var` 关键字声明变量。`let` 和
`const` 是 ES6 引入的，通常推荐使用这两者而非 `var`。

```javascript
let message = "Hello, JavaScript!"; // 可更改的变量
const pi = 3.14; // 常量，不可更改
```

- `let`：声明的变量可以被重新赋值。
- `const`：声明的变量不能被重新赋值，适用于常量。
- `var`：用于声明变量，具有函数作用域，现今较少使用。

#### 1.1.2 数据类型

JavaScript 中常见的数据类型包括：

- **原始类型**：
  - `string`：表示文本数据。
  - `number`：表示数字（整数或浮点数）。
  - `boolean`：表示布尔值 (`true` 或 `false`)。
  - `null`：表示空值。
  - `undefined`：表示未定义的值。

- **对象类型**：
  - `object`：表示键值对集合。
  - `array`：表示有序的集合。
  - `function`：表示函数，也是一种对象。

```javascript
let num = 5; // number
let str = "Hello"; // string
let bool = true; // boolean
let arr = [1, 2, 3]; // array
let obj = { name: "John" }; // object
```

### 1.2 控制结构

#### 1.2.1 条件语句

使用 `if`, `else`, `else if` 进行条件判断，帮助控制程序的流向。

```javascript
let age = 18;
if (age >= 18) {
  console.log("成年");
} else {
  console.log("未成年");
}
```

#### 1.2.2 循环语句

使用 `for` 和 `while` 实现循环，以执行重复的操作。

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### 1.3 函数

函数是可复用的代码块，可以用来执行特定的任务或计算。

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("World"); // 输出: Hello, World
```

- **函数定义**：使用 `function` 关键字。
- **函数调用**：通过函数名后跟括号来调用函数。
- **参数与返回值**：函数可以接受参数，并通过 `return` 语句返回值。

## 2. JavaScript 进阶

### 2.1 对象与数组

#### 2.1.1 对象操作

对象是键值对的集合，通常用于表示结构化数据。

```javascript
let person = {
  name: "John Doe",
  age: 30
};

// 访问属性
console.log(person.name); // 输出: John Doe

// 添加属性
person.job = "Developer";

// 修改属性
person.age = 31;

// 删除属性
delete person.job;
```

#### 2.1.2 数组操作

数组是一组有序的数据集合，提供了多种操作方法。

```javascript
let arr = [1, 2, 3];

// 添加元素
arr.push(4);

// 删除元素
arr.pop();

// 查找元素
console.log(arr.indexOf(3)); // 输出: 2

// 迭代
arr.forEach(function(item) {
  console.log(item);
});
```

- `push()`：向数组末尾添加一个或多个元素。
- `pop()`：删除数组末尾的元素。
- `indexOf()`：查找元素在数组中的位置。
- `forEach()`：对数组中的每个元素执行给定的函数。

### 2.2 DOM 操作

DOM（文档对象模型）允许 JavaScript 操作网页中的元素。

```javascript
let elem = document.getElementById("myElement");
elem.innerHTML = "New Content";
```

- `getElementById()`：通过 ID 获取 DOM 元素。
- `innerHTML`：修改元素的 HTML 内容。

### 2.3 事件处理

事件处理允许 JavaScript 响应用户的交互，例如点击按钮。

```javascript
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked");
});
```

- `addEventListener()`：为元素添加事件监听器。
- `click`：事件类型，此处用于响应按钮点击。

### 2.4 异步编程

使用 `async/await` 和 `Promise` 处理异步操作，例如从服务器获取数据。

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

- `async`：标记函数为异步函数。
- `await`：等待 Promise 的解决。
- `fetch()`：用于发起网络请求。
- `try...catch`：处理异步操作中的错误。

## 3. 混合应用与实践

### 3.1 综合案例：倒计时器

实现一个简单的倒计时器，每秒钟更新一次。

```javascript
let countdown = 10;
let interval = setInterval(function() {
  console.log(countdown);
  if (countdown <= 0) {
    clearInterval(interval);
    console.log("倒计时结束");
  }
  countdown--;
}, 1000);
```

- `setInterval()`：定时调用指定函数。
- `clearInterval()`：停止定时调用。

### 3.2 实践项目：网页计算器

创建一个简单的网页计算器，使用 HTML 和 CSS 设计界面，JavaScript 处理逻辑。

```html
<!-- HTML -->
<button onclick="add(1)">1</button>
<button onclick="add(2)">2</button>
<button onclick="calculate()">=</button>
<input type="text" id="display" readonly>
```

```javascript
// JavaScript
let display = document.getElementById("display");

function add(num) {
  display.value += num;
}

function calculate() {
  try {
    display.value = eval(display.value); // 注意: eval() 存在安全隐患
  } catch (e) {
    display.value = "错误";
  }
}
```

- `eval()`：将字符串解析为 JavaScript
  代码，通常不推荐使用因存在安全隐患。实际开发中应使用更安全的计算方式。

## 4. 在 Vue.js 中使用 JavaScript

Vue.js 是一个流行的前端框架，它允许你用组件化的方式开发网页应用。下面介绍如何在
Vue.js 中使用 JavaScript 知识点。

### 4.1 Vue.js 基础

#### 4.1.1 创建 Vue 实例

```javascript
// 在 Vue 2.x 中
new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!'
  }
});
```

```html
<!-- HTML -->
<div id="app">
  {{ message }}
</div>
```

- `el`：指定 Vue 实例控制的 DOM 元素。
- `data`：存储应用的数据，Vue 实例中的 `data` 选项定义了 Vue 实例的响应式数据。

#### 4.1.2 计算属性

计算属性是基于其依赖的响应式属性进行缓存的属性，适用于复杂的计算逻辑。

```javascript
new Vue({
  el: '#app',
  data: {
    number: 1
  },
  computed: {
    doubledNumber() {
      return this.number * 2;
    }
  }
});
```

```html
<!-- HTML -->
<div id="app">
  <p>{{ doubledNumber }}</p>
</div>
```

### 4.2 Vue.js 中的事件处理

#### 4.2.1 绑定事件

在 Vue.js 中，你可以使用 `v-on` 指令绑定事件处理函数。

```javascript
new Vue({
  el: '#app',
  methods: {
    handleClick() {
      console.log('Button clicked');
    }
  }
});
```

```html
<!-- HTML -->
<div id="app">
  <button v-on:click="handleClick">Click me</button>
</div>
```

- `v-on:click`：监听点击事件，并绑定到 `handleClick` 方法。

### 4.3 Vue.js 中的异步操作

在 Vue.js 中处理异步操作时，可以使用 `async/await` 语法进行数据请求。

```javascript


new Vue({
  el: '#app',
  data: {
    info: null,
    error: null
  },
  async created() {
    try {
      let response = await fetch('https://api.example.com/data');
      this.info = await response.json();
    } catch (error) {
      this.error = 'Error fetching data';
    }
  }
});
```

```html
<!-- HTML -->
<div id="app">
  <p v-if="info">{{ info }}</p>
  <p v-if="error">{{ error }}</p>
</div>
```

- `created` 生命周期钩子：在 Vue 实例创建时调用，用于进行数据请求。

### 4.4 Vue.js 中的组件化

Vue.js 的组件化特性允许你将应用分解为多个独立的、可复用的组件。

```javascript
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
});
```

```html
<!-- HTML -->
<div id="app">
  <my-component></my-component>
</div>
```

- `Vue.component`：全局注册一个组件。
- `template`：定义组件的 HTML 模板。

