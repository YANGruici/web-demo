<template>
  <div id="chart-map" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartMap',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-map');
      const myChart = echarts.init(chartDom);
      const { URL, geoCoordMap, customerBatteryCityData } = this.chartData;

      const uploadedDataURL = URL;

      fetch(uploadedDataURL)
          .then(response => response.json())
          .then(geoJson => {
            echarts.registerMap('henan', geoJson);
            const option = {
             // backgroundColor: '#131C38',
              tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                showDelay: 0,
                transitionDuration: 0.2,
                enterable: true,
                formatter: (item) => {
                  if (item.data && item.data.name) {
                    const values = item.data.values;
                    if (!values) return '';

                    let tooltipContent = `<div style="font-size: 16px; line-height: 30px; color: #131d3c; align-items: center">${item.data.name}<br />`;
                    for (const [key, value] of Object.entries(values)) {
                      tooltipContent += `${key}: ${value}<br />`;
                    }
                    tooltipContent += `</div>`;
                    return tooltipContent;
                  } else {
                    return '';
                  }
                },
                backgroundColor: "#fff"
              },
              geo: [
                {
                  map: 'henan',
                  aspectScale: 0.9,
                  roam: false,
                  zoom: 1.2,
                  layoutSize: '95%',
                  layoutCenter: ['55%', '50%'],
                  itemStyle: {
                    normal: {
                      areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 400,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(37,108,190,0.3)'
                        }, {
                          offset: 1,
                          color: 'rgba(15,169,195,0.3)'
                        }],
                        global: true
                      },
                      borderColor: '#4ecee6',
                      borderWidth: 1
                    },
                    emphasis: {
                      areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 300,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(37,108,190,1)'
                        }, {
                          offset: 1,
                          color: 'rgba(15,169,195,1)'
                        }],
                        global: false
                      },
                    }
                  },
                  emphasis: {
                    itemStyle: {
                      areaColor: '#0160AD'
                    },
                    label: {
                      show: 0,
                      color: 'transparent'
                    }
                  },
                  zlevel: 3
                },
                {
                  map: 'henan',
                  aspectScale: 0.9,
                  roam: false,
                  zoom: 1.2,
                  layoutSize: '95%',
                  layoutCenter: ['55%', '50%'],
                  itemStyle: {
                    normal: {
                      borderColor: 'rgba(192,245,249,.6)',
                      borderWidth: 2,
                      shadowColor: '#2C99F6',
                      shadowOffsetY: 0,
                      shadowBlur: 120,
                      areaColor: 'rgba(29,85,139,.2)'
                    }
                  },
                  zlevel: 2,
                  silent: true
                },
                {
                  map: 'henan',
                  aspectScale: 0.9,
                  roam: false,
                  zoom: 1.2,
                  layoutSize: '95%',
                  layoutCenter: ['55%', '51.5%'],
                  itemStyle: {
                    areaColor: 'rgba(0,27,95,0.4)',
                    borderColor: '#004db5',
                    borderWidth: 1
                  },
                  zlevel: 1,
                  silent: true
                }
              ],
              series: [
                {
                  geoIndex: 0,
                  showLegendSymbol: true,
                  type: 'map',
                  roam: true,
                  label: {
                    normal: {
                      show: false,
                      textStyle: {
                        color: '#fff'
                      }
                    },
                    emphasis: {
                      show: false,
                      textStyle: {
                        color: '#fff'
                      }
                    }
                  },
                  itemStyle: {
                    normal: {
                      borderColor: '#2ab8ff',
                      borderWidth: 1.5,
                      areaColor: '#12235c'
                    },
                    emphasis: {
                      areaColor: '#2AB8FF',
                      borderWidth: 0,
                      color: 'red'
                    }
                  },
                  map: 'henan',
                  data: customerBatteryCityData
                },
                {
                  type: 'lines',
                  zlevel: 5,
                  effect: {
                    show: false,
                    symbolSize: 5
                  },
                  lineStyle: {
                    width: 6,
                    color: 'rgb(22,255,255, .6)',
                    opacity: 1,
                    curveness: 0
                  },
                  label: {
                    show: 0,
                    position: 'end',
                    formatter: '245'
                  },
                  silent: true,
                  data: customerBatteryCityData.map(item => ({
                    coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + 0.2]]
                  }))
                },
                {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  geoIndex: 0,
                  zlevel: 5,
                  itemStyle: {
                    color: '#00FFF6',
                    opacity: 1
                  },
                  symbolSize: [1, 0],
                  symbolOffset: [0, -20],
                  z: 999,
                  data: customerBatteryCityData.map(item => ([geoCoordMap[item.name][0], geoCoordMap[item.name][1] + 0.2, item]))
                },
                {
                  geoIndex: 0,
                  zlevel: 4,
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                  rippleEffect: {
                    scale: 10,
                    brushType: 'stroke',
                  },
                  showEffectOn: 'render',
                  label: {
                    normal: {
                      formatter: '{b}',
                      position: 'bottom',
                      color: '#fff',
                      fontSize: 12,
                      distance: 10,
                      show: true,
                    },
                  },
                  symbol: 'circle',
                  symbolSize: [10, 5],
                  itemStyle: {
                    color: 'rgb(22,255,255, 1)',
                    opacity: 1
                  },
                  data: customerBatteryCityData.map(item => ({
                    name: item.name,
                    value: geoCoordMap[item.name]
                  }))
                },
                {
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  geoIndex: 0,
                  zlevel: 4,
                  label: {
                    show: false
                  },
                  symbol: 'circle',
                  symbolSize: [1, 1],
                  itemStyle: {
                    color: {
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.5,
                      colorStops: [
                        {
                          offset: 0, color: 'rgb(22,255,255, 0)'
                        },
                        {
                          offset: .75, color: 'rgb(22,255,255, 0)'
                        },
                        {
                          offset: .751, color: 'rgb(22,255,255, 1)'
                        },
                        {
                          offset: 1, color: 'rgb(22,255,255, 1)'
                        }
                      ],
                      global: false
                    },
                    opacity: 1
                  },
                  silent: true,
                  data: customerBatteryCityData.map(item => ({
                    name: item.name,
                    value: geoCoordMap[item.name]
                  }))
                }
              ]
            };

            myChart.setOption(option);
          });
    }
  }
};
</script>
