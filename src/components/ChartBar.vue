<template>
  <div id="chart-bar" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartBar',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-bar');
      const myChart = echarts.init(chartDom);
      const { data, names } = this.chartData;
      const option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: (params) => `${params[0].name}: ${params[0].value} `
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            margin: 50,
            align: 'left'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: names
        },
          {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            textStyle: {
              color: 'black',
              fontSize: '12'
            },
            formatter: (value) => value
          },
          data: data
        }],
        series: [{
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 5, 5],
              color: (params) => {
                if (params.value <= 50) {
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#f6d648" },
                    { offset: 1, color: "#f0a05e" }
                  ]);
                } else {
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#346cf6" },
                    { offset: 1, color: "#5bb2f9" }
                  ]);
                }
              }
            }
          },
          barWidth: 10,
          data: data,
          markPoint: {
            symbolSize: 0,
            symbolOffset: [0, -10],
            label: {
              show: true,
              formatter: '{a|▼}',
              rich: {
                a: {
                  fontSize: 16,
                  lineHeight: 10,
                  textShadowBlur: 15,
                  textShadowColor: '#FFFB8F',
                }
              }
            },
            data: data.map((value, index) => ({
              name: '',
              value: value,
              xAxis: value,
              yAxis: index,
              itemStyle: {
                color: value <= 50 ? '#f6d648' : '#346cf6'
              },
              label: {
                color: value <= 50 ? '#f6d648' : '#346cf6'
              }
            }))
          }
        }, {
          name: '背景',
          type: 'bar',
          barWidth: 10,
          barGap: '-100%',
          data: new Array(data.length).fill(100),
          itemStyle: {
            normal: {
              color: 'white',
              barBorderRadius: [5, 5, 5, 5],
            }
          },
        }]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>