<template>
  <div id="chart-stacked-bar" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartStackedBar',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-stacked-bar');
      const myChart = echarts.init(chartDom);

      const { title, categories, data1, data2, data3, series } = this.chartData;

      const totalData = data1.map((value, index) => value + data2[index] + data3[index]);
      const data1Percentage = data1.map((value, index) => (value / totalData[index]) * 100);
      const data2Percentage = data2.map((value, index) => (value / totalData[index]) * 100);
      const data3Percentage = data3.map((value, index) => (value / totalData[index]) * 100);

      const option = {
        title: {
          text: title,
          left: 'left',
          textStyle: {
            color: 'black',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: (params) => {
            return params.map(item => `${item.seriesName}: (${item.value.toFixed(2)}%)`).join('<br>');
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          top: '2%',
          textStyle: {
            color: "black"
          }
        },
        xAxis: {
          type: 'category',
          data: categories,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'black'
            }
          }
        },
        yAxis: {
          type: 'value',
          max: 100,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: '#484749'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#6f6f70'
            },
            formatter: '{value} %'
          }
        },
        series: [
          {
            name: series[0],
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#4da2bf'
              }
            },
            data: data1Percentage
          },
          {
            name: series[1],
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#37549e'
              }
            },
            data: data2Percentage
          },
          {
            name: series[2],
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#66b578'
              }
            },
            data: data3Percentage
          },
        ],
        markLine: {
          symbol: 'none',
          label: {
            show: false
          },
          lineStyle: {
            type: 'solid',
            color: '#333'
          },
          data: totalData.map((total, index) => ({
            xAxis: index,
            yAxis: total,
            value: total
          }))
        }
      };

      option && myChart.setOption(option);
    }
  }
};
</script>
