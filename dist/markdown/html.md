# HTML5知识总结

## 元素

### 文档结构元素

#### 1. `<html>`

定义 HTML 文档的根元素。

**示例:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>示例文档</title>
</head>
<body>
  <h1>标题</h1>
  <p>内容...</p>
</body>
</html>
```

#### 2. `<head>`

定义包含文档头部信息的部分。

**示例:**

```html
<head>
  <title>文档标题</title>
  <meta charset="UTF-8">
</head>
```

#### 3. `<title>`

定义文档的标题，显示在浏览器的标题栏或标签上。

**示例:**

```html
<head>
  <title>示例文档</title>
</head>
```

#### 4. `<body>`

定义文档的主体内容。

**示例:**

```html
<body>
  <h1>我的网站</h1>
  <p>欢迎访问我的网站。</p>
</body>
```

### 元数据元素

#### 5. `<base>`

设置页面中所有链接的基 URL。

**属性:**

- `href`：基 URL。

**示例:**

```html
<base href="https://www.example.com/">
<a href="page.html">访问页面</a> <!-- 实际链接为 https://www.example.com/page.html -->
```

#### 6. `<link>`

定义文档与外部资源的关系，通常用于链接样式表。

**属性:**

- `href`：指定链接资源的 URL。
- `rel`：指定资源与当前文档的关系。
- `type`：指定资源的 MIME 类型。

**示例:**

```html
<link rel="stylesheet" href="styles.css">
```

#### 7. `<meta>`

定义文档的元数据。

**属性:**

- `charset`：指定字符编码。
- `name`：指定元数据的名称。
- `content`：指定元数据的内容。
- `http-equiv`：提供 HTTP 头部信息。

**示例:**

```html
<meta charset="UTF-8">
<meta name="description" content="示例文档">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="作者名">
<meta http-equiv="refresh" content="30">
```

### 内容分区元素

#### 8. `<header>`

定义文档或节的头部。

**示例:**

```html
<header>
  <h1>网站名称</h1>
  <nav>
    <a href="#home">首页</a>
    <a href="#about">关于我们</a>
  </nav>
</header>
```

#### 9. `<footer>`

定义文档或节的页脚。

**示例:**

```html
<footer>
  <p>版权所有 &copy; 2024</p>
</footer>
```

#### 10. `<nav>`

定义导航链接。

**示例:**

```html
<nav>
  <a href="#home">首页</a>
  <a href="#about">关于我们</a>
  <a href="#services">服务</a>
  <a href="#contact">联系</a>
</nav>
```

#### 11. `<main>`

定义文档的主要内容。

**示例:**

```html
<main>
  <h1>主要内容</h1>
  <p>这是文档的主要内容。</p>
</main>
```

#### 12. `<section>`

定义文档中的节。

**示例:**

```html
<section>
  <h1>章节标题</h1>
  <p>章节内容...</p>
</section>
```

#### 13. `<article>`

表示独立的内容块，通常用于文章、博客文章等。

**示例:**

```html
<article>
  <h2>标题</h2>
  <p>文章内容...</p>
</article>
```

#### 14. `<aside>`

定义侧边栏内容，通常用于补充主要内容的附加信息。

**示例:**

```html
<aside>
  <h2>相关内容</h2>
  <p>一些相关的内容或广告...</p>
</aside>
```

#### 15. `<address>`

定义联系信息。

**示例:**

```html
<address>
  1234 Main St,<br>
  Springfield, USA
</address>
```

#### 16. `<div>`

定义文档中的一个块级元素，用于分组内容。

**示例:**

```html
<div>
  <h2>标题</h2>
  <p>一些内容...</p>
</div>
```

### 文本内容元素

#### 17. `<h1>` 到 `<h6>`

定义标题，`<h1>` 为最高级别，`<h6>` 为最低级别。

**示例:**

```html
<h1>这是一级标题</h1>
<h2>这是二级标题</h2>
<h3>这是三级标题</h3>
<h4>这是四级标题</h4>
<h5>这是五级标题</h5>
<h6>这是六级标题</h6>
```

#### 18. `<p>`

定义段落。

**示例:**

```html
<p>这是一个段落。</p>
```

#### 19. `<pre>`

定义预格式化文本，保留空格和换行。

**示例:**

```html
<pre>
  这是预格式化文本。
  保留了空格和换行。
</pre>
```

#### 20. `<blockquote>`

定义块引用。

**属性:**

- `cite`：引用的来源 URL。

**示例:**

```html
<blockquote cite="https://www.example.com/article">
  这是一个引用的段落。
</blockquote>
```

#### 21. `<ol>`

定义有序列表。

**示例:**

```html
<ol>
  <li>列表项 1</li>
  <li>列表项 2</li>
  <li>列表项 3</li>
</ol>
```

#### 22. `<ul>`

定义无序列表。

**示例:**

```html
<ul>
  <li>列表项 1</li>
  <li>列表项 2</li>
  <li>列表项 3</li>
</ul>
```

#### 23. `<li>`

定义列表项。

**示例:**

```html
<ul>
  <li>列表项 1</li>
  <li>列表项 2</li>
  <li>列表项 3</li>
</ul>
```

#### 24. `<dl>`

定义描述列表。

**示例:**

```html
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>
```

#### 25. `<dt>`

定义描述列表中的术语。

**示例:**

```html
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>
```

#### 26. `<dd>`

定义描述列表中描述条目。

**示例:**

```html
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言</dd>
  <dt>CSS</dt>
  <dd>层叠样式表</dd>
</dl>
```

#### 27. `<figure>`

指定独立的流内容，通常用于包含图像及其标题。

**示例:**

```html
<figure>
  <img src="./img/img.png" alt="示例图片">
  <figcaption>这是图片的标题。</figcaption>
</figure>
```

#### 28. `<figcaption>`

定义 `<figure>` 元素的标题。

**示例:**

```html
<figure>
  <img src="./img/img.png" alt="示例图片">
  <figcaption>这是图片的标题。</figcaption>
</figure>
```

#### 29. `<hr>`

定义主题变化的水平线。

**示例:**

```html
<p>这是段落。</p>
<hr>
<p>这是另一个段落。</p>
```

#### 30. `<a>`

定义超链接。

**属性:**

- `href`：指定链接目标的 URL。
- `target`：指定在哪里打开链接的文档。

**示例:**

```html
<a href="https://www.example.com" target="_blank">访问示例网站</a>
```

### 内联文本语义

#### 31. `<strong>`

表示重要文本，通常显示为粗体。

**示例:**

```html
<p>这是一个 <strong>重要的</strong> 文本。</p>
```

#### 32. `<em>`

表示强调文本，通常显示为斜体。

**示例:**

```html
<p>请<em>注意</em>这个重要信息。</p>
```

#### 33. `<b>`

表示粗体文本，用于不那么重要的粗体强调。

**示例:**

```html
<p>这是一个 <b>重要</b> 的通知。</p>
```

#### 34. `<i>`

表示斜体文本，用于不那么重要的斜体强调。

**示例:**

```html
<p>这是 <i>斜体</i> 文本。</p>
```

#### 35. `<u>`

表示带有下划线的文本。

**示例:**

```html
<p>这是一个 <u>带下划线的</u> 文本。</p>
```

#### 36. `<mark>`

表示带有记号的文本，通常显示为高亮。

**示例:**

```html
<p>这是一个 <mark>重要的</mark> 文本。</p>
```

#### 37. `<small>`

表示小号文本。

**示例:**

```html
<p>这是一个 <small>小号</small> 文本。</p>
```

#### 38. `<del>`

表示被删除的文本。

**属性:**

- `cite`：提供删除文本的 URL。
- `datetime`：提供删除的时间和日期。

**示例:**

```html
<p><del>这是一个被删除的文本。</del></p>
```

#### 39. `<ins>`

表示插入的文本。

**属性:**

- `cite`：提供插入文本的 URL。
- `datetime`：提供插入的时间和日期。

**示例:**

```html
<p>这是一个 <ins>插入的</ins> 文本。</p>
```

#### 40. `<sub>`

表示下标文本。

**示例:**

```html
<p>这是一个 <sub>下标</sub> 文本。</p>
```

#### 41. `<sup>`

表示上标文本。

**示例:**

```html
<p>这是一个 <sup>上标</sup> 文本。</p>
```

#### 42. `<abbr>`

表示缩写或首字母缩略词。

**属性:**

- `title`：提供完整的缩写形式。

**示例:**

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

#### 43. `<cite>`

定义作品的引用。

**示例:**

```html
<p>《<cite>战争与和平</cite>》是列夫·托尔斯泰的作品。</p>
```

#### 44. `<dfn>`

定义术语。

**示例:**

```html
<p><dfn>HTML</dfn> 是超文本标记语言的缩写。</p>
```

#### 45. `<time>`

表示时间或日期。

**属性:**

- `datetime`：指定时间的机器可读格式。

**示例:**

```html
<p>会议时间: <time datetime="2024-08-08T14:00">2024年8月8日 下午2点</time></p>
```

#### 46. `<code>`

定义计算机代码片段。

**示例:**

```html
<p>使用 <code>alert()</code> 方法显示警告框。</p>
```

#### 47. `<kbd>`

表示用户输入。

**示例:**

```html
<p>请按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制文本。</p>
```

#### 48. `<samp>`

定义样本输出。

**示例:**

```html
<p>计算结果为 <samp>42</samp>。</p>
```

#### 49. `<var>`

表示变量。

**示例:**

```html
<p>计算公式为: <var>x</var> = <var>y</var> + <var>z</var></p>
```

#### 50. `<bdi>`

让文本脱离其父元素的双向文本设置。

**示例:**

```html
<p>用户 <bdi>علي</bdi> 的分数是 90。</p>
```

#### 51. `<bdo>`

覆盖文本的默认方向。

**属性:**

- `dir`：设置文本方向（ltr, rtl）。

**示例:**

```html
<p><bdo dir="rtl">这个文本从右到左显示。</bdo></p>
```

### 嵌入内容

#### 52. `<img>`

定义图像。

**属性:**

- `src`：指定图像的 URL。
- `alt`：指定图像的替代文本。
- `width`：指定图像的宽度。
- `height`：指定图像的高度。

**示例:**

```html
<img src="./img/img.png" alt="示例图片" width="500" height="600">
```

#### 53. `<iframe>`

定义内联框架。

**属性:**

- `src`：指定嵌入页面的 URL。
- `width`：指定框架的宽度。
- `height`：指定框架的高度。

**示例:**

```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

#### 54. `<embed>`

定义嵌入的外部内容。

**属性:**

- `src`：嵌入内容的 URL。
- `type`：嵌入内容的 MIME 类型。
- `width`：嵌入内容的宽度。
- `height`：嵌入内容的高度。

**示例:**

```html
<embed src="example.pdf" type="application/pdf" width="600" height="400">
```

#### 55. `<object>`

嵌入外部资源。

**属性:**

- `data`：嵌入数据的 URL。
- `type`：嵌入数据的 MIME 类型。
- `width`：对象的宽度。
- `height`：对象的高度。

**示例:**

```html
<object data="example.pdf" type="application/pdf" width="600" height="400">
  <p>您的浏览器不支持嵌入 PDF，请下载 PDF 文件查看。</p>
</object>
```

#### 56. `<video>`

定义视频。

**属性:**

- `src`：视频文件的 URL。
- `controls`：显示视频控件。
- `width`：视频的宽度。
- `height`：视频的高度。
- `autoplay`：自动播放视频。
- `loop`：循环播放视频。
- `muted`：静音播放视频。

**示例:**

```html
<video src="movie.mp4" controls width="600" height="400">
  您的浏览器不支持 video 元素。
</video>
```

#### 57. `<audio>`

定义声音内容。

**属性:**

- `src`：音频文件的 URL。
- `controls`：显示音频控件。

**示例:**

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>
```

#### 58. `<source>`

为 `<audio>` 和 `<video>` 元素指定媒体源。

**属性:**

- `src`：指定媒体文件的 URL。
- `type`：指定媒体文件的 MIME 类型。

**示例:**

```html
<audio controls>
  <source src="audiofile.ogg" type="audio/ogg">
  <source src="audiofile.mp3" type="audio/mpeg">
  您的浏览器不支持 audio 元素。
</audio>
```

#### 59. `<track>`

为 `<video>` 和 `<audio>` 元素指定文本轨道。

**属性:**

- `kind`：指定文本轨道的类型（subtitles, captions, descriptions, chapters, metadata）。
- `src`：指定文本轨道文件的 URL。
- `srclang`：指定文本轨道的语言。
- `label`：指定文本轨道的标签。
- `default`：指定文本轨道是否为默认。

**示例:**

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English" default>
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish">
  您的浏览器不支持 video 元素。
</video>
```

#### 60. `<picture>`

定义多个源的图像，允许根据不同的条件加载不同的图像资源。

**示例:**

```html
<picture>
  <source srcset="./img/img.webp" type="image/webp">
  <source srcset="./img/img.jpg" type="image/jpeg">
  <img src="./img/img.png" alt="示例图像">
</picture>
```

#### 61. `<canvas>`

定义图形的绘制区域。

**属性:**

- `width`：画布宽度。
- `height`：画布高度。

**

示例:**

```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>
<script>
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>
```

### 表单元素

#### 62. `<form>`

定义一个表单。

**属性:**

- `action`：提交表单的 URL。
- `method`：提交表单的 HTTP 方法（GET 或 POST）。

**示例:**

```html
<form action="/submit-form" method="post">
  <label for="name">姓名:</label>
  <input type="text" id="name" name="name"><br><br>
  <input type="submit" value="提交">
</form>
```

#### 63. `<input>`

定义输入控件。

**属性:**

- `type`：指定输入的类型（text, password, submit, radio, checkbox, button, color, date, datetime-local, email, file, hidden, image, month, number, range, reset, search, tel, time, url, week）。
- `name`：指定输入控件的名称。
- `value`：指定输入控件的初始值。

**示例:**

```html
<form>
  <label for="name">姓名:</label>
  <input type="text" id="name" name="name"><br><br>
  <input type="submit" value="提交">
</form>
```

#### 64. `<textarea>`

定义多行文本输入控件。

**示例:**

```html
<form>
  <label for="message">留言:</label><br>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>
</form>
```

#### 65. `<button>`

定义一个按钮。

**属性:**

- `type`：按钮类型（button, submit, reset）。

**示例:**

```html
<button type="button">点击我</button>
```

#### 66. `<select>`

定义下拉列表。

**示例:**

```html
<select>
  <option value="apple">苹果</option>
  <option value="orange">橙子</option>
  <option value="banana">香蕉</option>
</select>
```

#### 67. `<optgroup>`

为下拉列表定义选项组。

**属性:**

- `label`：指定选项组的标签。

**示例:**

```html
<select>
  <optgroup label="水果">
    <option value="apple">苹果</option>
    <option value="orange">橙子</option>
  </optgroup>
  <optgroup label="蔬菜">
    <option value="carrot">胡萝卜</option>
    <option value="broccoli">西兰花</option>
  </optgroup>
</select>
```

#### 68. `<option>`

定义下拉列表中的选项。

**属性:**

- `value`：指定选项的值。
- `selected`：指定选项是否被预选中。

**示例:**

```html
<select>
  <option value="apple">苹果</option>
  <option value="orange" selected>橙子</option>
  <option value="banana">香蕉</option>
</select>
```

#### 69. `<label>`

为 `<input>` 元素定义标签。

**属性:**

- `for`：指定关联的输入元素的 ID。

**示例:**

```html
<form>
  <label for="name">姓名:</label>
  <input type="text" id="name" name="name">
</form>
```

#### 70. `<fieldset>`

对表单中的元素进行分组。

**示例:**

```html
<form>
  <fieldset>
    <legend>个人信息</legend>
    <label for="fname">名:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">姓:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>
</form>
```

#### 71. `<legend>`

为 `<fieldset>` 元素定义标题。

**示例:**

```html
<form>
  <fieldset>
    <legend>个人信息</legend>
    <label for="fname">名:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">姓:</label>
    <input type="text" id="lname" name="lname">
  </fieldset>
</form>
```

#### 72. `<datalist>`

预定义选项列表，用于与 `<input>` 元素配合使用。

**示例:**

```html
<input list="browsers" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
  <option value="Opera">
</datalist>
```

#### 73. `<output>`

定义计算结果。

**示例:**

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50"> +
  <input type="number" id="b" value="50">
  <output name="result" for="a b">100</output>
</form>
```

#### 74. `<progress>`

表示任务的进度。

**属性:**

- `value`：当前进度。
- `max`：最大值。

**示例:**

```html
<progress value="70" max="100">70%</progress>
```

#### 75. `<meter>`

表示已知范围内的标量测量。

**属性:**

- `value`：当前值。
- `min`：最小值。
- `max`：最大值。
- `low`：低阈值。
- `high`：高阈值。
- `optimum`：最优值。

**示例:**

```html
<meter value="0.6" min="0" max="1">60%</meter>
```

### 表格元素

#### 76. `<table>`

定义表格。

**示例:**

```html
<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>25</td>
  </tr>
</table>
```

#### 77. `<caption>`

为 `<table>` 元素定义标题。

**示例:**

```html
<table>
  <caption>月度销售数据</caption>
  <tr>
    <th>月</th>
    <th>销售额</th>
  </tr>
  <tr>
    <td>一月</td>
    <td>$1000</td>
  </tr>
</table>
```

#### 78. `<thead>`

定义表格的头部。

**示例:**

```html
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </thead>
</table>
```

#### 79. `<tbody>`

定义表格主体。

**示例:**

```html
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

#### 80. `<tfoot>`

定义表格的页脚。

**示例:**

```html
<table>
  <tfoot>
    <tr>
      <td>合计</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```

#### 81. `<tr>`

定义表格行。

**示例:**

```html
<table>
  <tr>
    <td>张三</td>
    <td>25</td>
  </tr>
</table>
```

#### 82. `<th>`

定义表格头单元格。

**示例:**

```html
<table>
  <tr>
    <th>姓名</th>
    <th>年龄</th>
  </tr>
</table>
```

#### 83. `<td>`

定义表格单元格。

**示例:**

```html
<table>
  <tr>
    <td>张三</td>
    <td>25</td>
  </tr>
</table>
```

#### 84. `<col>`

为 `<table>` 中的一列定义属性。

**属性:**

- `span`：定义列的跨越数。

**示例:**

```html
<table>
  <colgroup>
    <col span="2" style="background-color:yellow">
    <col style="background-color:cyan">
  </colgroup>
  <tr>
    <td>数据1</td>
   

 <td>数据2</td>
    <td>数据3</td>
  </tr>
</table>
```

#### 85. `<colgroup>`

定义表格列的组。

**示例:**

```html
<table>
  <colgroup>
    <col span="2" style="background-color:yellow">
    <col style="background-color:cyan">
  </colgroup>
  <tr>
    <td>数据1</td>
    <td>数据2</td>
    <td>数据3</td>
  </tr>
</table>
```

### 交互元素

#### 86. `<details>`

创建可展开的内容区域。

**属性:**

- `open`：指定 details 元素是否展开。

**示例:**

```html
<details>
  <summary>更多信息</summary>
  <p>这里是隐藏的内容。</p>
</details>
```

#### 87. `<summary>`

为 `<details>` 元素定义标题。

**示例:**

```html
<details>
  <summary>更多信息</summary>
  <p>这里是隐藏的内容。</p>
</details>
```

#### 88. `<dialog>`

定义对话框或窗口。

**属性:**

- `open`：指定对话框是否显示。

**示例:**

```html
<dialog open>
  <p>这是一个对话框。</p>
</dialog>
```

#### 89. `<menu>`

定义命令列表或菜单。

**示例:**

```html
<menu>
  <li>菜单项 1</li>
  <li>菜单项 2</li>
  <li>菜单项 3</li>
</menu>
```

### 脚本和样式元素

#### 90. `<style>`

定义文档的样式信息。

**属性:**

- `type`：指定样式表的 MIME 类型。

**示例:**

```html
<style>
  body {
    background-color: lightblue;
  }
</style>
```

#### 91. `<script>`

定义客户端脚本。

**属性:**

- `src`：指定外部脚本文件的 URL。
- `type`：指定脚本的 MIME 类型。

**示例:**

```html
<script src="script.js"></script>
<script>
  alert("Hello, world!");
</script>
```

#### 92. `<noscript>`

定义在浏览器不支持脚本时显示的内容。

**示例:**

```html
<noscript>
  <p>您的浏览器不支持 JavaScript，某些功能可能无法正常工作。</p>
</noscript>
```

#### 93. `<template>`

定义客户端内容模板。

**示例:**

```html
<template id="my-template">
  <p>这是模板内容。</p>
</template>
```

### 编辑元素

#### 94. `<content>`

影子DOM中的内容插槽。

**示例:**

```html
<content select="p"></content>
```

#### 95. `<shadow>`

为影子DOM创建影子根。

**示例:**

```html
<shadow>
  <p>影子DOM内容</p>
</shadow>
```

#### 96. `<slot>`

定义影子DOM中的插槽。

**示例:**

```html
<slot name="my-slot">默认内容</slot>
```

#### 97. `<element>`

用于自定义元素定义。

**示例:**

```html
<element name="my-element">
  <template>
    <p>自定义元素内容</p>
  </template>
</element>
```

### 其他元素

#### 98. `<br>`

换行符。

**示例:**

```html
<p>这是一个换行符<br>这里是下一行。</p>
```

#### 99. `<wbr>`

表示可能的换行机会。

**示例:**

```html
<p>这是一个超长单词，不妨在这里添加<wbr>换行符。</p>
```

## 常见的事件

### 1. `onclick`

用户点击元素时触发。

**示例:**

```html
<button onclick="alert('按钮被点击了')">点击我</button>
```

### 2. `onmouseover`

鼠标指针移动到元素上时触发。

**示例:**

```html
<p onmouseover="this.style.color='red'">把鼠标移动到这里</p>
```

### 3. `onmouseout`

鼠标指针移出元素时触发。

**示例:**

```html
<p onmouseout="this.style.color='black'">把鼠标移出这里</p>
```

### 4. `onchange`

表单控件的值改变时触发。

**示例:**

```html
<input type="text" onchange="alert('内容改变了')">
```

### 5. `onkeydown`

用户按下键盘按键时触发。

**示例:**

```html
<input type="text" onkeydown="alert('按键被按下了')">
```

### 6. `onkeyup`

用户释放键盘按键时触发。

**示例:**

```html
<input type="text" onkeyup="alert('按键被释放了')">
```

### 7. `onload`

页面或图像加载完成时触发。

**示例:**

```html
<body onload="alert('页面加载完成')">
```

### 8. `onunload`

页面卸载时触发。

**示例:**

```html
<body onunload="alert('页面将被卸载')">
```

### 9. `onresize`

窗口或框架被调整大小时触发。

**示例:**

```html
<body onresize="alert('窗口大小改变了')">
```

### 10. `onsubmit`

表单提交时触发。

**示例:**

```html
<form onsubmit="alert('表单提交了'); return false;">
  <input type="submit" value="提交">
</form>
```