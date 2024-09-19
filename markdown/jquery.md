# jQuery 知识总结

## 1. jQuery 简介

jQuery 是一个快速、小巧、功能丰富的 JavaScript 库。它使 HTML
文档遍历和操作、事件处理、动画以及 Ajax 操作更加简单，能够在各种浏览器中正常工作。

## 2. jQuery 的安装与引用

### 2.1 安装 jQuery

#### 2.1.1 使用 npm 安装

```bash
npm install jquery
```

#### 2.1.2 使用 CDN 引入

在 Vue 3 项目中的 `index.html` 文件中添加以下代码：

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### 2.2 引入 jQuery

在 Vue 组件中使用 jQuery，需要先在 `setup` 函数中引入：

```javascript
<script setup>
import $ from 'jquery';
</script>
```

## 3. jQuery 选择器

### 3.1 基本选择器

#### 3.1.1 选择 ID

```javascript
$(document).ready(function() {
  $('#myId').css('color', 'blue');
});
```

#### 3.1.2 选择类名

```javascript
$(document).ready(function() {
  $('.myClass').css('background-color', 'yellow');
});
```

#### 3.1.3 选择元素

```javascript
$(document).ready(function() {
  $('p').text('这是一个段落');
});
```

### 3.2 层次选择器

#### 3.2.1 子元素选择器

```javascript
$(document).ready(function() {
  $('ul > li').css('font-weight', 'bold');
});
```

#### 3.2.2 后代选择器

```javascript
$(document).ready(function() {
  $('div p').css('border', '1px solid red');
});
```

### 3.3 属性选择器

```javascript
$(document).ready(function() {
  $('input[type="text"]').val('Hello jQuery!');
});
```

## 4. jQuery 事件处理

### 4.1 基本事件

#### 4.1.1 点击事件

```javascript
$(document).ready(function() {
  $('#myButton').click(function() {
    alert('按钮被点击了！');
  });
});
```

#### 4.1.2 鼠标移入移出事件

```javascript
$(document).ready(function() {
  $('#myDiv').hover(
    function() {
      $(this).css('background-color', 'lightblue');
    },
    function() {
      $(this).css('background-color', '');
    }
  );
});
```

### 4.2 事件委托

#### 4.2.1 使用 `on` 方法

```javascript
$(document).ready(function() {
  $('#parentDiv').on('click', '.childDiv', function() {
    $(this).css('color', 'red');
  });
});
```

## 5. jQuery 动画效果

### 5.1 显示与隐藏

#### 5.1.1 `show()` 和 `hide()`

```javascript
$(document).ready(function() {
  $('#myDiv').click(function() {
    $(this).hide();
  });

  $('#showDiv').click(function() {
    $('#myDiv').show();
  });
});
```

#### 5.1.2 `toggle()`

```javascript
$(document).ready(function() {
  $('#myDiv').click(function() {
    $(this).toggle();
  });
});
```

### 5.2 渐变效果

#### 5.2.1 `fadeIn()` 和 `fadeOut()`

```javascript
$(document).ready(function() {
  $('#fadeInBtn').click(function() {
    $('#myDiv').fadeIn();
  });

  $('#fadeOutBtn').click(function() {
    $('#myDiv').fadeOut();
  });
});
```

#### 5.2.2 `fadeToggle()`

```javascript
$(document).ready(function() {
  $('#myDiv').click(function() {
    $(this).fadeToggle();
  });
});
```

### 5.3 滑动效果

#### 5.3.1 `slideUp()` 和 `slideDown()`

```javascript
$(document).ready(function() {
  $('#slideUpBtn').click(function() {
    $('#myDiv').slideUp();
  });

  $('#slideDownBtn').click(function() {
    $('#myDiv').slideDown();
  });
});
```

#### 5.3.2 `slideToggle()`

```javascript
$(document).ready(function() {
  $('#myDiv').click(function() {
    $(this).slideToggle();
  });
});
```

## 6. jQuery 操作 DOM

### 6.1 添加与删除元素

#### 6.1.1 `append()` 和 `prepend()`

```javascript
$(document).ready(function() {
  $('#appendBtn').click(function() {
    $('#myList').append('<li>追加的列表项</li>');
  });

  $('#prependBtn').click(function() {
    $('#myList').prepend('<li>前置的列表项</li>');
  });
});
```

#### 6.1.2 `before()` 和 `after()`

```javascript
$(document).ready(function() {
  $('#beforeBtn').click(function() {
    $('#myDiv').before('<p>这是在 div 之前插入的段落</p>');
  });

  $('#afterBtn').click(function() {
    $('#myDiv').after('<p>这是在 div 之后插入的段落</p>');
  });
});
```

#### 6.1.3 `remove()` 和 `empty()`

```javascript
$(document).ready(function() {
  $('#removeBtn').click(function() {
    $('#myDiv').remove();
  });

  $('#emptyBtn').click(function() {
    $('#myDiv').empty();
  });
});
```

### 6.2 修改元素属性

#### 6.2.1 修改 HTML 内容

```javascript
$(document).ready(function() {
  $('#htmlBtn').click(function() {
    $('#myDiv').html('<p>新的 HTML 内容</p>');
  });
});
```

#### 6.2.2 修改文本内容

```javascript
$(document).ready(function() {
  $('#textBtn').click(function() {
    $('#myDiv').text('新的文本内容');
  });
});
```

#### 6.2.3 修改属性

```javascript
$(document).ready(function() {
  $('#attrBtn').click(function() {
    $('#myLink').attr('href', 'https://www.example.com');
  });
});
```

### 6.3 CSS 操作

#### 6.3.1 添加、移除和切换类

```javascript
$(document).ready(function() {
  $('#addClassBtn').click(function() {
    $('#myDiv').addClass('newClass');
  });

  $('#removeClassBtn').click(function() {
    $('#myDiv').removeClass('newClass');
  });

  $('#toggleClassBtn').click(function() {
    $('#myDiv').toggleClass('newClass');
  });
});
```

#### 6.3.2 修改样式

```javascript
$(document).ready(function() {
  $('#cssBtn').click(function() {
    $('#myDiv').css({
      'color': 'white',
      'background-color': 'black'
    });
  });
});
```

## 7. jQuery Ajax 操作

### 7.1 基本的 Ajax 请求

#### 7.1.1 `$.ajax()`

```javascript
$(document).ready(function() {
  $('#loadDataBtn').click(function() {
    $.ajax({
      url: 'https://api.example.com/data',
      method: 'GET',
      success: function(data) {
        $('#dataDiv').html(data);
      },
      error: function() {
        alert('加载数据失败');
      }
    });
  });
});
```

#### 7.1.2 `$.get()` 和 `$.post()`

```javascript
$(document).ready(function() {
  $('#getDataBtn').click(function() {
    $.get('https://api.example.com/data', function(data) {
      $('#dataDiv').html(data);
    });
  });

  $('#postDataBtn').click(function() {
    $.post('https://api.example.com/data', { key: 'value' }, function(data) {
      $('#dataDiv').html(data);
    });
  });
});
```

## 8. jQuery 插件开发

### 8.1 基本的插件结构

```javascript
(function($) {
  $.fn.myPlugin = function(options) {
    var settings = $.extend({
      color: 'red',
      backgroundColor: 'yellow'
    }, options);

    return this.css({
      'color': settings.color,
      'background-color': settings.backgroundColor
    });
  };
})(jQuery);
```

### 8.2 使用插件

```javascript
$(document).ready(function() {
  $('#myDiv').myPlugin({
    color: 'blue',
    backgroundColor: 'lightgray'
  });
});
```


