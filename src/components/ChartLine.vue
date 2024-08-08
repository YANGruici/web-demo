<template>
  <div id="chart-line" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartLine',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-line');
      const myChart = echarts.init(chartDom);
      const { xsl, xse, xszzl,  xseries, yseries,yUnits,tUnits } = this.chartData;

      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            fontSize: 12,
          },
          confine: true,
          formatter: (params) => {
            let tooltipContent = `${params[0].name}<br>`;
            params.forEach((param, index) => {
              tooltipContent += `${param.seriesName}：${param.value}${tUnits[index]}<br>`;
            });
            return tooltipContent;
          }
        },
        legend: {
          top: "4%",
          y: "center",
          itemWidth: 14,
          itemHeight: 4,
          itemGap: 15,
          textStyle: {
            fontSize: 12,
            padding: [0, 0, 0, 6],
          },
        },
        grid: {
          top: "18%",
          left: "4%",
          right: "4%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data:  xseries,
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#2a3a67",
              },
            },
            axisLabel: {
              interval: 0,
              margin: 10,
              color: "#05D5FF",
              textStyle: {
                fontSize: 14,
                color: "black",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: yUnits[0],
            splitNumber: 5,
            nameTextStyle: {
              color: "black",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              formatter: "{value}",
              color: "rgba(95, 187, 235, 1)",
              textStyle: {
                fontSize: 14,
                color: "black",
                lineHeight: 16,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#2a3a67",
              }
            },
            splitLine: {
              show: false,
            },
          },
          {
            name: yUnits[1],
            splitNumber: 5,
            type: "value",
            nameTextStyle: {
              color: "black",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              show: true,
              fontSize: 12,
              color: "black",
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          {
            splitNumber: 5,
            type: "value",
            nameTextStyle: {
              color: "black",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              show: false,
              fontSize: 12,
              color: "black",
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: yseries[0],
            type: "bar",
            yAxisIndex: 0,
            barWidth: "16",
            barGap: "50%",
            data: xsl,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(16, 160, 242, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 82, 184, 0)",
                  },
                ],
              },
            },
          },
          {
            name: yseries[1],
            type: "bar",
            yAxisIndex: 1,
            barWidth: "16",
            barGap: "50%",
            data: xse,
            itemStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 255, 1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 216, 255, 0)",
                  },
                ],
              },
            },
          },
          {
            name: yseries[2],
            yAxisIndex: 2,
            type: "line",
            showSymbol: true,
            smooth: true,
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: "#02D3EA",
              },
            },
            itemStyle: {
              color: "#02D3EA",
              borderColor: "#02D3EA",
              borderWidth: 2,
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}%",
              textStyle: {
                fontSize: 14,
                color: "black",
              },
            },
            data: xszzl,
          },

        ],
      };

      option && myChart.setOption(option);
    }
  }
};
</script>
