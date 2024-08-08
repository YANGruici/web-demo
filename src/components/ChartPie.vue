<template>
  <div id="chart-pie" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartPie',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-pie');
      const myChart = echarts.init(chartDom);
      const { seriesData, color } = this.chartData;

      const option = {
        color: color,
        grid: {
          top: '10%',
          left: 0,
          right: '1%',
          bottom: 5,
          containLabel: true,
        },
        legend: [
          {
            orient: 'vertical',
            left: '55%',
            align: 'auto',
            top: '25%',
            itemWidth: 12,
            itemHeight: 12,
            itemGap: 20,
            textStyle: {
              align: 'left',
              verticalAlign: 'middle',
              rich: {
                name: {
                  color: 'rgba(59, 61, 69, 1)',
                  fontSize: 16,
                  width: 80,
                  padding: [0,0,0,10]
                },
                value: {
                  color: 'rgba(29, 145, 245, 1)',
                  fontSize: 18,
                  fontFamily: 'DIN',
                  fontWeight: 500
                },
              },
            },
            formatter: (name) => {
              if (seriesData.length) {
                const item = seriesData.find((item) => item.name === name);
                return `{name|${name} }{value| ${item.value}}`;
              }
              return '';
            }
          },
        ],
        tooltip: {
          show: true
        },
        series: [
          {
            type: "pie",
            radius: ["30%", "45%"],
            center: ["30%", "50%"],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth: 5,
                borderColor: '#fff'
              }
            },
            label: {
              show: false
            },
            data: seriesData,
            labelLine: {
              show: false
            }
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
};
</script>
