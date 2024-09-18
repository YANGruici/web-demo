# 个人博客

## nvm管理node

- 1.如果已经安装了要先卸载干净nodejs  
  进入控制面板找到nodejs卸载，删除  
  [![pAFwSEQ.png](https://s21.ax1x.com/2024/08/24/pAFwSEQ.png)](https://imgse.com/i/pAFwSEQ)   
  进入系统信息的高级系统设置的环境变量，找到nodejs相关设置，删除  
  [![pAFwPCn.png](https://s21.ax1x.com/2024/08/24/pAFwPCn.png)](https://imgse.com/i/pAFwPCn)  
  [![pAFwkvV.png](https://s21.ax1x.com/2024/08/24/pAFwkvV.png)](https://imgse.com/i/pAFwkvV)
- 2.安装nvm  
  [nvm官网](https://nvm.uihtm.com/) 官网有教程，记住安装node要***管理员身份运行cmd***

```
查看 nvm 版本： nvm -v
查看可下载的 nodejs 版本： nvm list available 
下载指定版本的 nodejs ： nvm install [nodejs版本号]
卸载指定版本的 nodejs ： nvm uninstall [nodejs版本号]
查看系统上下载过的 nodejs 版本：nvm ls
切换目前使用的 nodejs 版本： nvm use [nodejs版本号]
想了解更多指令可通过 nvm help 指令查看
```

## 部署前端项目到Github Pages

先要拥有github的账号，创建一个仓库。
- 1.前端项目代码上传前端代码到仓库。
- 2.要部署的前端仓库创建一个新分支，最好取名gh-pages.
- 3..gitignore文件中的dist文件注释掉。
- 4.运行npm run build
- 5.上传里的文件到main分支
- 6.`git subtree push --prefix dist origin gh-pages`，创建新分支用于部署
- 7.进入仓库的Setting,选择pages，[![pAn5LCD.png](https://s21.ax1x.com/2024/09/13/pAn5LCD.png)](https://imgse.com/i/pAn5LCD)
- 8.[![pAnIuV0.png](https://s21.ax1x.com/2024/09/13/pAnIuV0.png)](https://imgse.com/i/pAnIuV0)
  Branch选择gh-pages分支，等待出现链接就可以了。
## moment.js

[Moment.js中文官网](https://momentjs.cn/)

### 1. 安装 Moment.js

```bash
npm install moment
```

### 2. 全局引用

```js
import {createApp} from 'vue';
import App from './App.vue';
import moment from 'moment';

const app = createApp(App);

// 将 moment 挂载到 Vue 实例上
app.config.globalProperties.$moment = moment;
moment.locale("zh-cn");//中文化
app.mount('#app');
```

### 3.格式化日期、解析日期

```vue

<template>
  <div>
    <p>当前时间: {{ formattedDate }}</p>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  computed: {
    formattedDate() {
      return moment().format('YYYY-MM-DD HH:mm:ss');//
    },
  },
};
</script>
```
格式：
- moment().format(); // 2013-02-04T10:35:24-08:00
- moment.utc().format(); // 2013-02-04T18:35:24+00:00
- moment().format('MMMM Do YYYY, h:mm:ss a'); // 九月 12日 2024, 10:10:30 上午 -
- moment().format('dddd'); // 星期四
- moment().format("MMM Do YY"); // 9月 12日 24
- moment().format('YYYY-MM-DD dddd HH:mm:ss')//2024-09-12 星期四 10:10:0
```vue

<template>
  <div>
    <p>解析后的日期: {{ parsedDate }}</p>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      dateString: '2023-10-01',
    };
  },
  computed: {
    parsedDate() {
      return moment(this.dateString).format('YYYY年MM月DD日');
    },
  },
};
</script>
```
#### 相对时间
```js
moment("20111031", "YYYYMMDD").fromNow(); // 20111031距离今天有多久
moment().startOf('day').fromNow(); //  距今天开始有多久
moment().endOf('day').fromNow(); // 距今天结束有多久
```
#### 日历时间

```js
moment().subtract(1, 'days').calendar(); // 昨天10:10 
moment().calendar(); // 今天10:10 
moment().add(1, 'days').calendar(); // 明天10:10
```

#### 多语言环境支持

```js
moment.locale(); // zh-cn 
moment().format('LT'); // 10:10 
moment().format('LTS'); // 10:10:30 
moment().format('L'); // 2024/09/12 
moment().format('l'); // 2024/9/12 
moment().format('LL'); // 2024年9月12日 
moment().format('ll'); // 2024年9月12日 
moment().format('LLL'); // 2024年9月12日上午10点10分 
moment().format('lll'); // 2024年9月12日 10:10 
moment().format('LLLL'); // 2024年9月12日星期四上午10点10分 
moment().format('llll'); // 2024年9月12日星期四 10:10
```

### 日期加减

操作之前必须使用 this.moment(日期变量) ；将要操作的日期转为 moment.js 可以处理的日期时间格式

```javascript
加法:this.moment().add(1, 'months').format('YYYY-MM-DD');
当前日期加一个月
加法:this.moment(startDate).add(2, 'days').format('YYYY-MM-DD');
指定日期`startDate`加2天
减法:this.moment().subtract(7, 'days');
当前时间减去7天
减法:this.moment(startDate).subtract(2, 'days').format('YYYY-MM-DD');
指定日期减去2天
```
- 年份+1 `moment().add(1, 'years') / moment().add({years: 1})`
- 月份+1 `moment().add(1, 'months')`
- 月份+1 `moment().add(1, 'months')`
- 日期+1 `moment().add(1, 'days')`
- 星期+1 `moment().add(1, 'weeks')`
- 小时+1 `moment().add(1, 'hours')`
- 分钟+1 `moment().add(1, 'minutes')`
- 秒数+1 `moment().add(1, 'seconds')`

#### 5.其他使用

```js
moment().format("YYYY-MM-DD") // 格式化显示当前时间
    `${moment().subtract("month", +1).format("YYYY-MM")}-01` // 上一个月的1号
    `${moment().add("month", -1).format("YYYY-MM")}-01`  // 还是上一个月1号 
let M = `${moment().format("YYYY-MM")}-01` // 本月一号
moment(M).add("days", -1).format("YYYY-MM-DD") // 上一个月月底 
moment().startOf("year").format("YYYY-MM-DD")  // 本年的的开始日期，（"2019-01-01"）
moment().endOf("year").format("YYYY-MM-DD")  // 本年的的结束日期，（"2019-12-31"）
// moment 转成时间戳
moment().valueOf()
// 时间戳 转 moment
moment(string).format()
```