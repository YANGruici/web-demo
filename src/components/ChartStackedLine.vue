<template>
  <div id="chart-stacked-line" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartStackedLine',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-stacked-line');
      const myChart = echarts.init(chartDom);
      const {yUnit, axisData, series,seriesData1, seriesData2 } = this.chartData;
      const maxCity1 = axisData[seriesData1.indexOf(Math.max(...seriesData1))];
      const maxCity2 = axisData[seriesData2.indexOf(Math.max(...seriesData2))];

      const option = {
     //   backgroundColor: '#0F224C',
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "black"
            }
          },
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: [5, 10],
          textStyle: {
            color: "black"
          }
        },
        legend: {
          x: "right",
          y: "25",
          icon: "roundRect",
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 60,
          textStyle: {
            color: "black",
            fontSize: 13,
            fontWeight: 'bold',
          },
        },
        xAxis: {
          type: "category",
          data: axisData,
          boundaryGap: true,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#283b62",
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: "black"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            position: "left",
            name: yUnit,
            nameTextStyle: {
              color: 'black',
              fontSize: 13,
              fontWeight: 'bold',
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#283b62",
              }
            },
            axisLabel: {
              show: true,
              margin: 5,
              textStyle: {
                fontSize: 12,
                color: "black"
              }
            }
          },
        ],
        series: [
          {
            name: series[0],
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            data: seriesData1,
            itemStyle: {
              normal: {
                color: '#287CE8'
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            },
            areaStyle: {
              normal:{
                color:new echarts.graphic.LinearGradient(0,0,0,1,
                    [{
                      offset: 0, color: '#1969d0'
                    },
                      {
                        offset: 1, color: 'rgba(0,255,246,0)'
                      }
                    ],
                    false
                ),
              },
            },
            markLine: {
              symbol: 'none',
              lineStyle: {
                type: 'soild',
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#287CE8' },
                  { offset: 1, color: '#1A3D6F' }
                ])
              },
              data: [
                [{
                  coord: [maxCity1, 0]
                }, {
                  coord: [maxCity1, Math.max(...seriesData1)],
                }],
              ]
            },
            markPoint: {
              symbol: 'circle',
              symbolSize: [8, 8],
              itemStyle: {
                color: '#FFFFFF'
              },
              data: [
                {
                  name: '最大值',
                  type: 'max',
                  valueIndex: 1,
                },
              ],
              label: {
                show: true,
                position: 'top',
                fontSize: 14,
                color: '#FFFFFF',
              }
            }
          },
          {
            name:series[1],
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6,
            data: seriesData2,
            itemStyle: {
              normal: {
                color: "#38FFBA"
              }
            },
            lineStyle: {
              normal: {
                width: 3
              }
            },
            areaStyle: {
              normal:{
                color:new echarts.graphic.LinearGradient(0,0,0,1,
                    [{
                      offset: 0, color: '#3dffcc'
                    },
                      {
                        offset: 1, color: 'rgba(0,255,246,0)'
                      }
                    ],
                    false
                ),
              },
            },
            markLine: {
              symbol: 'none',
              lineStyle: {
                type: 'soild',
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: '#38FFBA' },
                  { offset: 1, color: '#1B7B6B' }
                ])
              },
              data: [
                [{
                  coord: [maxCity2, 0]
                }, {
                  coord: [maxCity2, Math.max(...seriesData2)],
                }],
              ]
            },
            markPoint: {
              symbol: 'circle',
              symbolSize: [8, 8],
              itemStyle: {
                color: '#FFFFFF'
              },
              data: [
                {
                  name: '最大值',
                  type: 'max',
                  valueIndex: 1,
                },
              ],
              label: {
                show: true,
                position: 'top',
                fontSize: 14,
                color: 'black',
              }
            }
          },
        ]
      };

      option && myChart.setOption(option);
    }
  }
};
</script>
