<template>
  <div id="chart-gauge" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartGauge',
  props: {
    chartData: Object,
   },

  mounted() {
    this.setBaseColor();
    this.initChart();
  },
  methods: {
    setBaseColor() {
      const {score } = this.chartData;
      if (score >= 85) {
        this.baseColor = {
          bg: "#DCFFD1",
          bar: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
            { offset: 0, color: '#D8FDCC' },
            { offset: 0.4, color: '#ADE897' },
            { offset: 0.8, color: '#51BE26' }
          ]),
          pin: "#56CE28",
          circle1: "#89DD69",
          circle2: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
            { offset: 0, color: '#75C65A' },
            { offset: 0.5, color: '#2A7521' },
            { offset: 0.8, color: '#58BC15' }
          ])
        };
      } else if (score >= 50) {
        this.baseColor = {
          bg: "#FFF4D1",
          bar: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            { offset: 0, color: '#FFE9A5' },
            { offset: 0.4, color: '#FFD75B' },
            { offset: 0.8, color: '#FFC615' }
          ]),
          pin: "#FFBF37",
          circle1: "#FFE48E",
          circle2: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            { offset: 0, color: '#CBAC5C' },
            { offset: 0.2, color: '#E5BF70' },
            { offset: 0.4, color: '#A4752D' }
          ])
        };
      } else {
        this.baseColor = {
          bg: "#FFDFDF",
          bar: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
            { offset: 0, color: '#F6AFAF' },
            { offset: 0.4, color: '#F46969' },
            { offset: 0.8, color: '#F34E4E' }
          ]),
          pin: "#F45454",
          circle1: "#F67474",
          circle2: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            { offset: 0, color: '#CB5C5C' },
            { offset: 0.5, color: '#882A2A' },
            { offset: 0.8, color: '#D32222' }
          ])
        };
      }
    },
    initChart() {
      const chartDom = document.getElementById('chart-gauge');
      const myChart = echarts.init(chartDom);
      const {score,text } = this.chartData;
      const option = {
        graphic: {
          type: 'text',
          left: 'center',
          top: "60%",
          z: 100,
          style: {
            fill: '#fff',
            text: text,
            font: 'bolder 20px Microsoft YaHei'
          }
        },
        tooltip: {
          show: false
        },
        title: {
          text:score ,
          left: 'center',
          top: "40%",
          triggerEvent: true,
          textStyle: {
            fontSize: 60,
            fontFamily: "Microsoft YaHei",
            color: '#fff',
          }
        },
        angleAxis: {
          show: false,
          max: (100 * 360) / 265,
          type: "value",
          startAngle: 223,
          splitLine: {
            show: false,
          },
        },
        barMaxWidth: 20,
        radiusAxis: {
          show: false,
          type: "category",
          z: 10,
        },
        polar: {
          radius: "130%",
        },
        series: [
          {  // 刻度
            name: '外部刻度',
            type: 'gauge',
            radius: '85%',
            min: 0,
            max: 100,
            splitNumber: 10,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: this.baseColor.pin
              }
            },
            axisTick: {
              show: true,
              splitNumber: 5,
              lineStyle: {
                color: this.baseColor.pin,
                width: 2,
              },
              length: -10
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: true,
              length: -20,
              lineStyle: {
                width: 3,
                color: this.baseColor.pin,
              }
            },
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          },
          {  // 外环
            name: "外部进度条",
            type: "gauge",
            center: ['50%', '50%'],
            radius: '75%',
            startAngle: 226,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [1, this.baseColor.bg]
                ],
                width: 50
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            pointer: {
              show: false
            }
          },
          { // 进度条
            type: "bar",
            data: [
              {
                value: score,
                itemStyle: {
                  color: this.baseColor.bar
                },
              },
            ],
            barGap: "-100%",
            coordinateSystem: "polar",
            roundCap: true,
            z: 2,
            animationDuration: 1500,
          },
          {  // 圆环
            name: "数量",
            type: "pie",
            animation: false,
            hoverAnimation: false,
            clockwise: false,
            radius: ["70%", "70%"],
            center: ["50%", "50%"],
            data: [10],
            itemStyle: {
              normal: {
                borderWidth: 0,
                borderType: "solid",
                borderColor: this.baseColor.circle1,
                opacity: 0.5,
              },
            },
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "14",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
          },
          {  // 内圆
            name: "数量",
            type: "pie",
            animation: false,
            hoverAnimation: false,
            clockwise: false,
            radius: "45%",
            center: ["50%", "50%"],
            data: [10],
            itemStyle: {
              normal: {
                color: this.baseColor.circle2,
              },
            },
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "14",
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
