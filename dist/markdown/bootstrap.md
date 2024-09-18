# Bootstrap 知识总结

Bootstrap 是目前最流行的前端框架之一，它简化了响应式 Web
开发，并提供了丰富的组件和布局工具，使开发者能够快速构建美观、功能完善的网站。本总结将详细介绍
Bootstrap 的基础知识、组件使用方法，以及如何在 Vue 项目中安装和使用 Bootstrap。

## 1. Bootstrap 简介

Bootstrap 是由 Twitter 开发的一个开源前端框架，主要用于简化 Web 开发流程。它采用了
HTML、CSS 和 JavaScript，并遵循响应式设计原则，使开发者能够快速搭建兼容多种设备的
Web 应用程序。

### 1.1 核心理念

- **响应式设计**：通过栅格系统和媒体查询，实现不同屏幕尺寸下的自动适配，确保网站在手机、平板和桌面设备上都能良好显示。
- **可复用组件**：提供丰富的 UI
  组件，如按钮、表单、导航栏、模态框等，减少开发时重复编写代码的工作。
- **可定制性**：通过 Sass 变量和定制工具，轻松自定义主题样式，满足不同设计需求。

### 1.2 优势

- **快速开发**：提供一整套的前端设计规范，减少手动编写样式和组件的时间，让开发者可以更专注于业务逻辑。
- **跨浏览器兼容**：经过优化，可以兼容主流浏览器，减少兼容性问题，避免在不同浏览器中出现样式错乱。
- **活跃的社区支持**：拥有丰富的资源和广泛的用户群体，遇到问题可以轻松找到解决方案，并且有大量的第三方插件和主题可供选择。

## 2. Bootstrap 的安装与使用

### 2.1 通过 CDN 安装

最简单的方式是通过 CDN 引入 Bootstrap。只需在 HTML 文件的 `<head>`
中添加以下链接，即可开始使用：

```html
<!-- 引入 Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- 引入 Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

这种方式适用于快速开发和简单的静态页面，优点是无需在本地安装任何文件，加载速度快，方便快捷。使用这种方法，Bootstrap
的所有功能都可以立即使用，但如果需要进行深入定制，这种方式可能不够灵活。

### 2.2 使用 npm 安装

在现代前端开发中，通常会使用 npm 管理依赖。在 Vue 项目中，你可以通过以下命令安装
Bootstrap：

```bash
npm install bootstrap
```

安装后，在 Vue 项目的入口文件（通常是 `main.js` 或 `main.ts`）中引入 Bootstrap：

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

这种方式适合在大型项目中使用，方便管理依赖和进行版本控制，同时你也可以选择引入自己定制的
Bootstrap 样式文件。

### 2.3 在 Vue 项目中使用 Bootstrap

在 Vue 项目中，除了直接引入 Bootstrap，还可以使用 `bootstrap-vue`
这样的插件，它是 Bootstrap 和 Vue 的结合包，提供了更好的集成支持。

#### 安装 `bootstrap-vue`

```bash
npm install bootstrap-vue bootstrap@5.3.0-alpha1
```

#### 在项目中使用

在 Vue 项目中，你可以这样引入并使用 Bootstrap-Vue：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);
app.use(BootstrapVue);
app.mount('#app');
```

`bootstrap-vue` 提供了许多优点，例如更易于与 Vue
的开发模式集成，提供了更多的自定义选项和扩展功能，并且简化了 Bootstrap 组件在 Vue
中的使用。

## 3. Bootstrap 核心概念

### 3.1 栅格系统

栅格系统是 Bootstrap
的核心功能之一，通过容器（container）、行（row）和列（col）创建响应式布局。栅格系统可以帮助开发者轻松创建兼容不同屏幕尺寸的页面布局。

#### 基本使用

```html
<div class="container">
  <div class="row">
    <div class="col">列1</div>
    <div class="col">列2</div>
    <div class="col">列3</div>
  </div>
</div>
```

- `container`
  用于包裹内容，控制内容的最大宽度，通常分为固定宽度（`container`）和流体宽度（`container-fluid`）两种类型。
- `row` 用于创建一行，确保列在水平方向上正确排列。
- `col` 表示列，Bootstrap 默认采用 12 栏布局系统，所有列加起来的宽度应该为 12。

#### 自定义列宽

可以指定列的宽度，例如让某一列占据特定的比例：

```html
<div class="container">
  <div class="row">
    <div class="col-4">占据 4 栏</div>
    <div class="col-8">占据 8 栏</div>
  </div>
</div>
```

在这个示例中，第一列占据了总宽度的 `4/12`，而第二列占据了 `8/12`，总宽度为 12 栏。

#### 栅格系统的嵌套

你可以在一列中再创建一个栅格系统：

```html
<div class="container">
  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6">嵌套列1</div>
        <div class="col-6">嵌套列2</div>
      </div>
    </div>
    <div class="col-6">主列</div>
  </div>
</div>
```

这个示例中，栅格系统被嵌套在了第一列内部，使得内部的列也可以按照栅格布局排列。

#### 响应式布局

Bootstrap 提供了针对不同屏幕尺寸的类名，使得布局能够根据设备屏幕尺寸进行调整：

- **`col-sm-*`**: 针对小屏幕（>=576px）。
- **`col-md-*`**: 针对中等屏幕（>=768px）。
- **`col-lg-*`**: 针对大屏幕（>=992px）。
- **`col-xl-*`**: 针对超大屏幕（>=1200px）。

示例：

```html
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-4">响应式列1</div>
    <div class="col-sm-12 col-md-6 col-lg-4">响应式列2</div>
    <div class="col-sm-12 col-md-6 col-lg-4">响应式列3</div>
  </div>
</div>
```

在这个示例中，列的宽度会根据屏幕尺寸自动调整，以确保页面在各种设备上都能有良好的表现。

### 3.2 间距（Spacing）

Bootstrap 提供了内置的间距工具，用于快速设置元素的内外边距。类名规则如下：

- **`m`** - margin（外边距）。
- **`p`** - padding（内边距）。
- **方向修饰符**:
  - `t` - top（上）。
  - `b` - bottom（下）。
  - `l` - left（左）。
  - `r` - right（右）。
  - `x` - left + right（左右）。
  - `y` - top + bottom（上下）。
  - 无修饰符 - 应用于所有方向。
- **大小**:
  - `0` - 0 间距。
  - `1` - 0.25rem。
  - `2` - 0.5rem。
  - `3` - 1rem。
  - `4` - 1.5rem。
  - `5` - 3rem。
  - `auto` - 自动间距，通常用于动态调整元素与其相邻元素之间的距离。

示例：

```html
<div class="p-3 mb-2 bg-primary text-white">Padding 3, Margin Bottom 2</div>
<div class="pt-5 pl-2">Padding Top 5, Padding Left 2</div>
```

通过这些类名，你可以轻松地控制元素之间的间距，避免手动编写 CSS 代码。

### 3.3 颜色与背景（Colors and Backgrounds）

Bootstrap 提供了预定义的文本颜色类和背景颜色类，用于设置元素的颜色和

背景。

#### 文本颜色类

- `text-primary`：主要文本颜色（通常为蓝色）。
- `text-secondary`：次要文本颜色（通常为灰色）。
- `text-success`：表示成功的文本颜色（通常为绿色）。
- `text-danger`：表示错误的文本颜色（通常为红色）。
- `text-warning`：表示警告的文本颜色（通常为黄色）。
- `text-info`：表示信息的文本颜色（通常为浅蓝色）。
- `text-light`：浅色文本颜色（通常为白色）。
- `text-dark`：深色文本颜色（通常为黑色）。
- `text-muted`：柔和的文本颜色（通常为灰色）。
- `text-white`：白色文本颜色。
- `text-black-50`：半透明的黑色文本颜色。
- `text-white-50`：半透明的白色文本颜色。

#### 背景颜色类

- `bg-primary`：主要背景颜色（通常为蓝色）。
- `bg-secondary`：次要背景颜色（通常为灰色）。
- `bg-success`：表示成功的背景颜色（通常为绿色）。
- `bg-danger`：表示错误的背景颜色（通常为红色）。
- `bg-warning`：表示警告的背景颜色（通常为黄色）。
- `bg-info`：表示信息的背景颜色（通常为浅蓝色）。
- `bg-light`：浅色背景（通常为白色）。
- `bg-dark`：深色背景（通常为黑色）。

示例：

```html
<div class="bg-primary text-white p-3">Primary Background with White Text</div>
<div class="bg-warning text-dark p-3">Warning Background with Dark Text</div>
```

这些颜色类可以帮助你快速设置文本和背景颜色，确保设计风格的一致性。

### 3.4 按钮（Buttons）

Bootstrap 提供了丰富的按钮样式，可以快速创建具有不同外观的按钮。

#### 基本按钮样式

- `btn`：基础按钮类，必须应用于每个按钮。
- `btn-primary`：主要按钮，通常为蓝色，用于主要操作。
- `btn-secondary`：次要按钮，通常为灰色，用于次要操作。
- `btn-success`：表示成功的按钮，通常为绿色。
- `btn-danger`：表示错误或删除的按钮，通常为红色。
- `btn-warning`：警告按钮，通常为黄色。
- `btn-info`：信息按钮，通常为浅蓝色。
- `btn-light`：浅色按钮，通常为白色。
- `btn-dark`：深色按钮，通常为黑色。

#### 按钮大小与其他样式

- `btn-outline-*`：创建带边框的按钮，例如 `btn-outline-primary`
  会生成一个蓝色边框的按钮，背景透明。
- `btn-lg`：大按钮，适用于需要突出显示的操作。
- `btn-sm`：小按钮，适用于空间有限的地方。
- `btn-block`：占据整行宽度的按钮，通常用于表单提交按钮。

示例：

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-danger">Danger Button</button>
<button class="btn btn-outline-primary">Outline Button</button>
<button class="btn btn-lg btn-success">Large Success Button</button>
<button class="btn btn-sm btn-warning">Small Warning Button</button>
<button class="btn btn-block btn-info">Block Button</button>
```

通过这些类名，你可以快速创建具有不同样式和功能的按钮，满足不同的 UI 需求。

### 3.5 导航栏（Navbar）

Bootstrap 提供了灵活的导航栏系统，可以轻松创建响应式的导航菜单。

#### 基本导航栏

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
```

- `navbar-expand-lg` 类表示导航栏在大屏幕上展开，在小屏幕上折叠。
- `navbar-light` 和 `bg-light` 类设置导航栏的颜色和背景。

这个导航栏在大屏幕上会展开显示所有菜单项，而在小屏幕上则会折叠成一个按钮，通过点击按钮来显示菜单。

### 3.6 表单（Forms）

Bootstrap 提供了多种表单样式和布局工具，用于创建美观、易用的表单。

#### 基本表单

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

- `form-group` 类用于将表单元素分组，确保每个表单元素都有足够的空间和适当的布局。
- `form-control` 类用于设置表单控件的样式，使输入框、文本区域等元素统一风格。

这个表单包括一个 email 地址输入框和一个密码输入框，并附有提交按钮，所有元素都遵循统一的
Bootstrap 样式。

## 4. Bootstrap 组件概述

Bootstrap 提供了丰富的组件库，这些组件可用于创建复杂的 UI
和交互效果。以下是一些常见的组件及其用法。

### 4.1 模态框（Modals）

模态框是一种覆盖页面的弹出框，常用于提示用户或显示重要信息。

```html
<!-- 触发模态框的按钮 -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- 模态框结构 -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal content goes here...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

- 通过 `data-bs-toggle="modal"` 和 `data-bs-target="#exampleModal"`
  属性来触发模态框。
- `modal` 类用于定义模态框的基本结构，包括模态框的头部、主体和底部区域。

### 4.2 卡片（Cards）

卡片是一种灵活且多功能的组件，可用于展示各种内容，如图片、文本、链接等。

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

- `card` 类用于创建卡片，`card-img-top` 类用于在卡片顶部显示图片，`card-body`
  类用于包裹卡片的主要内容。
- 卡片组件非常灵活，可以包含图片、文本、按钮等内容，适合用来展示商品信息、用户资料等内容。

### 4.3 列表组（List Groups）

列表组用于展示一组有序或无序的列表项。

```html
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class

              ="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
</ul>
```

- `list-group` 类用于创建一个列表容器，`list-group-item` 类用于定义列表项。
- 列表组可以用于展示评论列表、任务清单等内容，能够快速创建统一风格的列表项。

### 4.4 进度条（Progress Bars）

进度条用于显示任务的进度或状态。

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
```

- `progress` 类用于创建一个进度条容器，`progress-bar` 类用于显示进度。
- `width` 样式用于控制进度条的进度，`aria-valuenow`、`aria-valuemin` 和
  `aria-valuemax` 属性用于无障碍功能支持。

### 4.5 分页（Pagination）

分页组件用于在大量数据或页面之间进行导航。

```html
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

- `pagination` 类用于创建分页容器，`page-item` 类用于定义分页项，`page-link`
  类用于定义分页链接。
- 分页组件可以用于分页显示文章列表、产品列表等，帮助用户在大量内容之间快速导航。

### 4.6 标签（Labels）和徽章（Badges）

标签和徽章用于为元素添加简短的描述或标记。

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>
```

- `badge` 类用于创建徽章，`bg-*` 类用于设置徽章的背景颜色。
- 徽章通常用于显示通知数量、标签标记等内容，能够吸引用户的注意力。

### 4.7 工具提示（Tooltips）

工具提示在鼠标悬停在元素上时显示额外的信息。

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
```

通过 JavaScript 初始化工具提示：

```javascript
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
```

- `tooltip` 类用于创建工具提示，`data-bs-toggle` 和 `title`
  属性用于定义工具提示的内容和位置。
- 工具提示可以为按钮、链接等元素提供额外的信息，有助于提高用户体验。

### 4.8 弹出框（Popovers）

弹出框在点击或鼠标悬停在元素上时显示更大的内容块。

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">
  Click to toggle popover
</button>
```

通过 JavaScript 初始化弹出框：

```javascript
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
```

- `popover` 类用于创建弹出框，`data-bs-content` 属性用于定义弹出框的内容。
- 弹出框通常用于显示更多的提示信息或表单，用户可以在点击或悬停时看到这些内容。

### 4.9 轮播（Carousel）

轮播组件用于展示图片或内容的循环播放。

```html
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
```

- `carousel` 类用于创建轮播组件，`carousel-inner`
  类用于包裹轮播项目，`carousel-item` 类用于定义每个轮播项目。
- 轮播组件适合展示图片集、推荐内容等，能够自动轮播并支持手动切换。

### 4.10 折叠（Collapse）

折叠组件用于隐藏和显示内容。

```html
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
```

- `collapse` 类用于创建折叠区域，`data-bs-toggle` 和 `data-bs-target`
  属性用于控制折叠行为。
- 折叠组件适用于创建可展开的内容区域，如 FAQ 问题解答、详细信息面板等。

### 4.11 下拉菜单（Dropdowns）

下拉菜单用于显示一组选项。

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```

- `dropdown` 类用于创建下拉菜单容器，`dropdown-toggle`
  类用于创建下拉按钮，`dropdown-menu` 类用于定义下拉选项。
- 下拉菜单通常用于导航菜单、操作选项等，能够节省页面空间。

### 4.12 滚动监听（Scrollspy）

滚动监听用于根据滚动位置自动更新导航链接的状态。

```html
<body data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
<nav id="navbar-example" class="navbar navbar-light bg-light px-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#fat">@fat</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#mdo">@mdo</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button

" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#one">one</a></li>
        <li><a class="dropdown-item" href="#two">two</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#three">three</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-offset="0" tabindex="0">
  <h4 id="fat">@fat</h4>
  <p>...</p>
  <h4 id="mdo">@mdo</h4>
  <p>...</p>
  <h4 id="one">one</h4>
  <p>...</p>
  <h4 id="two">two</h4>
  <p>...</p>
  <h4 id="three">three</h4>
  <p>...</p>
</div>
</body>
```

- `scrollspy` 类用于为页面添加滚动监听，`data-bs-target`
  属性用于定义监听的目标导航栏。
- 滚动监听适用于长页面的分段导航，能够在用户滚动时自动更新当前导航状态。

### 4.13 警告框（Alerts）

警告框用于向用户显示重要的提示信息。

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
```

- `alert` 类用于创建警告框，`alert-*` 类用于设置警告框的颜色和样式。
- 警告框通常用于显示系统消息、表单验证错误等，能够吸引用户注意。

### 4.14 面包屑导航（Breadcrumbs）

面包屑导航用于显示当前页面的路径。

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

- `breadcrumb` 类用于创建面包屑导航，`breadcrumb-item` 类用于定义面包屑项。
- 面包屑导航适用于多层级页面结构，帮助用户了解当前所在位置并方便返回上一级页面。

### 4.15 输入组（Input Groups）

输入组用于在输入框前后添加文本或按钮。

```html
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>
<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>
```

- `input-group` 类用于创建输入组容器，`input-group-text`
  类用于添加文本，`form-control` 类用于输入框。
- 输入组适用于表单元素的前后添加单位、图标或按钮，能够提高用户输入体验。

### 4.16 媒体对象（Media Object）

媒体对象用于展示带有图片或其他媒体的内容。

```html
<div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla.
  </div>
</div>
```

- `media` 类用于创建媒体对象，`media-body` 类用于定义媒体内容的主体部分。
- 媒体对象适合展示图片、视频、音频等内容，并在旁边显示相关描述。

### 4.17 导航（Navs）与选项卡（Tabs）

导航组件用于创建简单的导航菜单，而选项卡则用于在不同内容之间切换。

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
```

- `nav-tabs` 类用于创建选项卡导航，`tab-content` 类用于定义选项卡的内容区域。
- 选项卡适用于在同一页面内切换显示不同内容，提高页面的组织性和用户体验。

### 4.18 折叠面板（Accordion）

折叠面板用于创建可折叠的内容区域。

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong>
      </div>
    </div>
  </div>
</div>
```

- `accordion` 类用于创建折叠面板容器，`accordion-item`
  类用于定义每个折叠项目，`accordion-button` 类用于创建触发折叠的按钮。
- 折叠面板适用于展示多段内容，用户可以根据需要展开或收起特定部分。

### 4.19 图片缩略图（Thumbnails）

图片缩略图用于展示小尺寸的图片。

```html
<div class="row">
  <div class="col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>
```

- `thumbnail` 类用于创建图片缩略图容器，`caption` 类用于定义图片的标题和说明文字。
- 图片缩略图适用于展示多张图片的预览，用户可以点击查看大图或进行其他操作。

### 4.20 媒体对象（Media Object）

媒体对象用于展示带有图片或其他媒体的内容。

```html
<div class="media">
  <img src="..." class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla.
  </div>
```

- `media` 类用于创建媒体对象，`media-body` 类用于定义媒体内容的主体部分。
- 媒体对象适合展示图片、视频、音频等内容，并在旁边显示相关描述。

