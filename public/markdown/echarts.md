# ECharts 知识总结

ECharts
是一个强大的开源可视化库，广泛用于各种图表的绘制，包括柱状图、折线图、饼图、地图、仪表盘等。在这份总结中，我们将介绍
ECharts 的各种图表类型，并提供相应的 Vue.js
代码示例，以便开发者在项目中快速上手使用。

## 柱状图总结

### 基础柱状图

柱状图是最常见的图表类型之一，通常用于比较不同类别的值。以下是一个基础柱状图的 Vue
代码示例：

```Echarts
<template>
  <div id="bar-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted(){
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('bar-chart'));
      var option = {
        title: {
          text: '基础柱状图'
        },
        tooltip: {},
        xAxis: {
          data: ['类别A', '类别B', '类别C', '类别D', '类别E']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

### 堆叠柱状图

堆叠柱状图用于显示各个部分的总和与组成部分的对比。以下是堆叠柱状图的 Vue 代码示例：

```Echarts
<template>
  <div id="stacked-bar-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted(){
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('stacked-bar-chart'));
      var option = {
        title: {
          text: '堆叠柱状图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

## 折线图总结

折线图用于显示数据的趋势，尤其是时间序列数据。以下是一个基础折线图的 Vue 代码示例：

```Echarts
<template>
  <div id="line-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('line-chart'));
      var option = {
        title: {
          text: '基础折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销量',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147, 260]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```


## 柱状图折线图结合总结

在某些情况下，使用柱状图和折线图结合显示数据，可以更直观地展示不同维度的数据对比。以下是柱状图和折线图结合的
Vue 代码示例：

```Echarts
<template>
  <div id="bar-line-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('bar-line-chart'));
      var option = {
        title: {
          text: '柱状图与折线图结合'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销量', '温度']
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: [
          {
            type: 'value',
            name: '销量'
          },
          {
            type: 'value',
            name: '温度',
            position: 'right'
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [12, 21, 10, 4, 12, 5, 13]
          },
          {
            name: '温度',
            type: 'line',
            yAxisIndex: 1,
            data: [15, 23, 20, 10, 15, 10, 20]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

## 饼图总结

饼图用于显示各部分占总数的比例，通常用于简单的组成部分分析。以下是一个基础饼图的 Vue
代码示例：

```Echarts
<template>
  <div id="pie-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('pie-chart'));
      var option = {
        title: {
          text: '基础饼图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' }
            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

## 地图总结

ECharts 提供了对地理数据的强大支持，能够轻松绘制各种地图。以下是一个基础地图的 Vue
代码示例：

```Echarts
<template>
  <div id="map-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china'; // 引入中国地图数据
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('map-chart'));
      var option = {
        title: {
          text: '中国地图',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },
        series: [
          {
            name: '数据',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
              show: true
            },
            data: [
              { name: '北京', value: 800 },
              { name: '上海', value: 700 },
              { name: '广东', value: 900 }
            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

## 仪表盘总结

仪表盘用于显示关键指标的进度或当前状态，通常用于监控系统。以下是一个基础仪表盘的 Vue
代码示例：

```Echarts
<template>
  <div id="gauge-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('gauge-chart'));
      var option = {
        title: {
          text: '基础仪表盘'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

## 时间轴总结

时间轴图表用于展示时间序列数据的演变情况，适合用于展示数据变化趋势。以下是一个简单时间轴的
Vue 代码示例：

```Echarts
<template>
  <div id="timeline-chart" style="width: 600px; height: 400px;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chart = echarts.init(document.getElementById('timeline-chart'));
      var option = {
        timeline: {
          axisType: 'category',
          data: ['2018', '2019', '2020', '2021'],
          autoPlay: true,
          playInterval: 2000
        },
        options: [
          {
            title: {
              text: '2018 年数据'
            },
            series: [
              {
                type: 'bar',
                data: [120, 200, 150, 80, 70]
              }
            ]
          },
          {
            title: {
              text: '2019 年数据'
            },
            series: [
              {
                type: 'bar',
                data: [180, 240, 190, 120, 110]
              }
            ]
          },
          {
            title: {
              text: '2020 年数据'
            },
            series: [
              {
                type: 'bar',
                data: [200, 280, 220, 140, 130]
              }
            ]
          },
          {
            title: {
              text: '2021 年数据'
            },
            series: [
              {
                type: 'bar',
                data: [240, 300, 250, 160, 150]
              }
            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }
};
</script>
```

