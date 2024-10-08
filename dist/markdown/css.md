# CSS知识总结

## CSS基本语法

CSS由选择器和声明块组成。声明块包含一个或多个声明，每个声明由属性和值组成，属性和值之间用冒号分隔，声明之间用分号分隔。

```css
selector {
  property: value;
  property: value;
}
```

例如：

```css
p {
  color: red;
  font-size: 16px;
}
```

## CSS选择器

### 2.1 基本选择器

- **元素选择器**: 选择特定类型的HTML元素。

```css
p {
  color: blue;
}
```

- **类选择器**: 选择具有特定类属性的元素，前面加“.”。

```css
.intro {
  font-weight: bold;
}
```

- **ID选择器**: 选择具有特定ID属性的元素，前面加“#”。

```css
#header {
  background-color: grey;
}
```

### 2.2 组合选择器

- **后代选择器**: 选择某元素内部的所有指定元素。

```css
div p {
  color: green;
}
```

- **子选择器**: 选择某元素的直接子元素。

```css
div > p {
  color: yellow;
}
```

- **兄弟选择器**: 选择紧接在指定元素之后的兄弟元素。

```css
h1 + p {
  margin-top: 0;
}
```

### 2.3 属性选择器

- **存在属性选择器**: 选择具有特定属性的元素。

```css
a[href] {
  color: red;
}
```

- **属性值选择器**: 选择特定属性值的元素。

```css
input[type="text"] {
  border: 1px solid black;
}
```
### 2.4 特殊选择器

:deep()或/deep/(>>>)。一个是在vue3项目里使用，一个是在vue2项目里使用。如果使用了scoped限制了作用域，使用它可以穿透限制。
```css
:deep(.example) {
  background-color: yellow;
}
```

## CSS盒模型

CSS盒模型用于描述元素在页面中的布局。一个盒子由四个部分组成：内容、内边距(padding)、边框(border)和外边距(margin)。

```css
div {
  width: 300px;
  padding: 20px;
  border: 10px solid black;
  margin: 30px;
}
```

在上述例子中，元素的总宽度为：300px（内容宽度）+ 20px*2（内边距）+ 10px*2（边框）+
30px*2（外边距）。

## CSS布局

### 4.1 常见布局模型

- **块级布局**: 元素占据整个容器的宽度，每个元素从新行开始。

```css
div {
  display: block;
}
```

- **内联布局**: 元素只占据其内容所需的宽度，并与其他元素在同一行显示。

```css
span {
  display: inline;
}
```

### 4.2 浮动布局

使用`float`属性可以使元素浮动到容器的左侧或右侧，其他内容环绕在其周围。

```css
img {
  float: left;
  margin: 10px;
}
```

### 4.3 Flex布局

Flexbox是一种用于排列元素的一维布局模型，可以方便地创建复杂的布局。

```css
.container {
  display: flex;
  justify-content: space-between;
}
.item {
  flex: 1;
}
```

### 4.4 网格布局

CSS Grid Layout是一种二维布局模型，可以在垂直和水平方向上创建复杂的布局。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.item {
  background-color: lightblue;
}
```

## CSS动画

使用CSS动画可以创建平滑的过渡效果。

### 5.1 过渡

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: background-color 0.5s;
}
div:hover {
  background-color: blue;
}
```

### 5.2 动画

```css
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: example 5s infinite;
}
```

## 媒体查询

媒体查询用于根据设备的特性（如宽度、高度、分辨率等）应用不同的CSS规则。

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

## CSS变量

CSS变量（自定义属性）允许你定义可重用的值。

```css
:root {
  --main-color: #06c;
  --padding: 10px;
}
div {
  color: var(--main-color);
  padding: var(--padding);
}
```

## 响应式设计

响应式设计是一种网页设计方法，旨在使网页在不同设备上都能良好显示。

### 8.1 弹性布局

使用百分比和`max-width`等单位使布局更加灵活。

```css
img {
  max-width: 100%;
  height: auto;
}
```

### 8.2 视口单位

视口单位（vw、vh）根据视口的宽度和高度来设置尺寸。

```css
div {
  width: 50vw;
  height: 50vh;
}
```

## 常用CSS属性

- **颜色**: `color`, `background-color`
- **字体**: `font-family`, `font-size`, `font-weight`
- **文本**: `text-align`, `text-decoration`, `line-height`
- **边框**: `border`, `border-radius`
- **间距**: `margin`, `padding`
- **尺寸**: `width`, `height`, `max-width`, `min-height`
- **显示**: `display`, `visibility`
- **定位**: `position`, `top`, `right`, `bottom`, `left`, `z-index`

## CSS优先级和层叠

CSS中的样式规则可能会互相冲突，当多条规则作用于同一元素时，CSS需要决定哪条规则更优先。这时就要用到CSS的优先级（specificity）和层叠（cascading）原则。

### 10.1 CSS优先级

优先级由四个部分组成，从左到右依次为：内联样式、ID选择器、类/伪类/属性选择器、元素选择器。数值越高优先级越高。

- **内联样式**: 直接在HTML元素上定义的样式，优先级最高。比如：`<div style="color:
  red;"></div>`
- **ID选择器**: 比如 `#header`
- **类选择器、伪类选择器、属性选择器**: 比如 `.intro`, `:hover`,
  `[type="text"]`
- **元素选择器**: 比如 `p`, `div`

例如：

```css
#header {
  color: blue; /* 优先级：100 */
}
.intro {
  color: green; /* 优先级：10 */
}
div {
  color: red; /* 优先级：1 */
}
```

### 10.2 层叠顺序

当多个规则的优先级相同时，后定义的规则会覆盖先定义的规则。

```css
p {
  color: red;
}
p {
  color: blue;
}
```

在这个例子中，段落的颜色将是蓝色，因为后者覆盖了前者。

### 10.3 `!important`声明

使用`!important`可以强制某条规则覆盖其他任何规则（即使优先级更高的规则）。但通常不建议频繁使用。

```css
p {
  color: red !important;
}
```

## 伪类和伪元素

伪类和伪元素允许你选择并设计特定状态或特定部分的元素。

### 11.1 伪类

伪类用于选择元素的某个特定状态，如鼠标悬停、选中状态等。

- **`:hover`**: 选择鼠标悬停时的元素。
- **`:focus`**: 选择获得焦点的元素。
- **`:nth-child(n)`**: 选择父元素的第n个子元素。

例如：

```css
a:hover {
  color: orange;
}
input:focus {
  border-color: blue;
}
li:nth-child(2) {
  background-color: yellow;
}
```

### 11.2 伪元素

伪元素用于选择元素的某个特定部分，如首字母、内容前后等。

- **`::before`**: 在元素内容前插入内容。
- **`::after`**: 在元素内容后插入内容。
- **`::first-letter`**: 选择元素的首字母。
- **`::first-line`**: 选择元素的首行。

例如：

```css
p::first-letter {
  font-size: 2em;
  color: red;
}
p::before {
  content: "Note: ";
  font-weight: bold;
  color: blue;
}
```

## CSS框架

CSS框架提供了预定义的样式和布局组件，帮助开发者快速构建网页。常见的CSS框架包括：

- **Bootstrap**: 提供响应式设计、网格系统、常用组件和插件。
- **Tailwind CSS**: 实用工具优先的CSS框架，可以快速构建自定义设计。
- **Foundation**: 类似于Bootstrap，提供灵活的响应式设计工具。

### 12.1 使用Bootstrap的示例

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
```

## 现代CSS功能

### 13.1 CSS Grid高级特性

- **网格模板区域**: 可以通过命名网格区域，定义复杂的布局。

```css
.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

### 13.2 CSS变量与动态样式

CSS变量可以与JavaScript结合使用，动态地改变页面样式。

```css
:root {
  --main-bg-color: lightblue;
}
body {
  background-color: var(--main-bg-color);
}
```

在JavaScript中：

```javascript
document.documentElement.style.setProperty('--main-bg-color', 'lightgreen');
```

### 13.3 新增的CSS函数

- **`clamp()`**: 允许设置一个值的最小值、中间值、最大值。

```css
font-size:clamp(16px,4vw,24px);
```

- **`min()`和`max()`**: 返回给定值中的最小值或最大值。

```css
width: min(50%, 300px);
```
## SCSS（CSS 预处理器）基础

允许开发者使用变量、条件语句、循环、嵌套规则、继承等高级功能编写更加结构化和强大的样式表,具有一致性、维护性、可读性。[sass官网](https://www.sass.hk/)
```scss
// 使用变量
$primary-color: #333;
body {
  font: 100% Helvetica, sans-serif;
  color: $primary-color;
}
```
### 14.1 安装sass
node低版本没有sass，高版本sass代替了node-sass

```bash
//全局
npm install -g sass node-sass sass-loader
//本地
npm install sass node-sass sass-loader --save-dev
sass --version //验证安装成功与否
```

如果使用Vite构建项目，需要安装相应的插件并进行配置。

```bash
npm install @vitejs/plugin-sass --save-dev
```

```javascript
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { vitePlugin as VitePluginSass } from 'vite-plugin-sass';
export default defineConfig({
plugins: [
createVuePlugin(),
VitePluginSass()
]
});
```

直接使用或引入scss`<style lang="scss">`,main.js里 `import "@/styles/main.scss";`

### 变量使用
在 Sass 中，变量用于存储可以在样式表中重复使用的信息。添加`!global`可由局部变量变为全局变量
```scss
$primary-color: #3498db; /** 或局部变量添加!global 为全局变量**/
$font-stack: Helvetica, sans-serif;
body {
  color: $primary-color;
  font-family: $font-stack;
}
```

### 嵌套规则
Sass 允许将 CSS 规则嵌套在另一个规则内。有些css属性遵循相同的命名空间 (相同的开头)也可以嵌套
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  };
  li { display: inline-block; };
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  };
}
```

### 导入
Sass 的导入（@import）功能允许将一个 Sass 文件导入到另一个文件中。不可以在混合指令 (mixin) 或控制指令 (control directives) 中嵌套 @import。不希望将其编译为 css，只需要在文件名前添加下划线.也可以使用`@use`
```scss
// variables.scss
$primary-color: #333;
// styles.scss
@import 'variables';
body {
  color: $primary-color;
}
```

### 混合宏

定义可重用的样式块。

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
          border-radius: $radius;
}
.box { @include border-radius(10px); }
```

### 继承与扩展（Extend）
Sass 的继承功能允许一个选择器继承另一个选择器的样式
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.success-message {
  @extend .message;
  border-color: green;
}
```

### 父选择器&

```scss
article a {
  color: blue;
  &:hover { color: red }
}
```
编译为
```css
article a { color: blue }
article a:hover { color: red }
```

### 运算符

运算符：`== !=`关系运算符：`< > >= <=`布尔运算符：`and or not`、数字操作符：`+ - * / %`都支持运算。

不过`/`到达.值或值的一部分，是变量或者函数的返回值； 2.如果值被圆括号包裹； 3.值是算数表达式的一部分。其中一个才会计算。如果使用变量，同时又要确保 / 不做除法运算而是完整地编译到 css文件中，用 #{} 插值语句将变量包裹

```scss
$theme:"blue";

.container {
@if $theme=="blue" {
    background-color: red;
  }
@else {
    background-color: blue;
  }
}
```

### 插值语句

通过 #{} 插值语句可以在选择器、属性名、注释中使用变量

```scss
$class-name: danger;
a.#{$class-name} {
  border-color: #f00;
}
```

### 流程控制

`@if`、`@for`、`@each`、`@while`
- 使用`@if`:`@if...@else if...@else`
- 使用`@for`由两种方法.`@for $var from <start> through <end>`，条件范围包含 <start> 与 <end>的值和`@for $var from <start> to <end>`条件范围只包含<start>的值不包含<end>的值。`<start>` 和 `<end>`必须是整数值
- 使用`@each`:`@each $var in $list `,`$list`是一连串的值。

```scss
$theme:3;
.container {
    @if $theme >= 5 {
        background-color: red;
    }
    @else {
        background-color: blue;
    }
}
```