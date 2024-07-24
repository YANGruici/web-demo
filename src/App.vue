
<template>
  <div>
    <div id="main1"></div>
    <div id="main2" style="margin-top: 20px;"></div>
    <div id="main3" style="margin-top: 20px;"></div>
    <div id="main4" style="margin-top: 20px;"></div>
    <div id="main5" style="margin-top: 20px;"></div>

  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'App',
  mounted() {
    this.initBarChart();
    this.initStackedBarChart();
    this.initStackedChart();
    this.initStackedlineChart();
    this.initStackedMapChart();

  },
  methods: {
    initBarChart() {
      var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom);
      var option;
      var data = [50, 60, 70, 20, 30, 10, 50, 60, 70, 20, 30, 10];
      var Name = ['1年级', '2年级', '3年级', '4年级', '5年级', '6年级', '1年级', '2年级', '3年级', '4年级', '5年级', '6年级'];

      option = {
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
          formatter: function (params) {
            return `${params[0].name}: ${params[0].value} `;
          }
        },
        backgroundColor: 'rgb(20, 28, 52)',
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
            },
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
          data: Name
        }, {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: true,
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '12'
            },
            formatter: function (value) {
              return value;
            },
          },
          data: data
        }],
        series: [{
          type: 'bar',
          zlevel: 1,
          itemStyle: {
            normal: {
              barBorderRadius: [5, 5, 5, 5],
              color: function (params) {
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
            symbolOffset: [0, -15],
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
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          itemStyle: {
            normal: {
              color: '#1B375E',
              barBorderRadius: [5, 5, 5, 5],
            }
          },
        }]
      };
      option && myChart.setOption(option);
    },
    initStackedBarChart() {
      var chartDom = document.getElementById('main2');
      var myChart = echarts.init(chartDom);
      var option;
      var categories = ['日', '月', '季度', '年'];
      var data1 = [10, 15, 10, 80];
      var data2 = [20, 40, 10, 100];
      var data3 = [30, 15, 40, 10];

      var totalData = data1.map((value, index) => value + data2[index] + data3[index]);
      var data1Percentage = data1.map((value, index) => (value / totalData[index]) * 100);
      var data2Percentage = data2.map((value, index) => (value / totalData[index]) * 100);
      var data3Percentage = data3.map((value, index) => (value / totalData[index]) * 100);

      option = {
        title: {
          text: '集团成员过半场',
          left: 'left',
          textStyle: {
            color: '#ffffff',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tooltipText = params.map(item => `${item.seriesName}: ${(totalData[params[0].dataIndex] * item.value / 100).toFixed(2)} (${item.value.toFixed(2)}%)`).join('<br>');
            return tooltipText;
          }
        },
        backgroundColor: 'rgb(20, 28, 52)',
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['易网主卡', '携入', '纯新增'],
          top: '2%',
          textStyle: {
            color: "#ffffff"
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
              color: '#fff'
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
            name: '易网主卡',
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
            name: '携入',
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
            name: '纯新增',
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
          {
            name: '总数',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: function(params) {
                return totalData[params.dataIndex];
              },
              color: '#ffffff'
            },
            data: totalData
          }
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
    },
    initStackedChart() {
      var chartDom = document.getElementById('main3');
      var myChart = echarts.init(chartDom);
      var option;

      let axisData = ["北京", "上海", "广州", "深圳", "四川", "河南", "南京", "贵州", "新疆",];
      let seriesData = [
        [12, 25, 22, 10, 36, 56, 45, 12, 25],
        [42, 15, 36, 9, 6, 10, 12, 25, 32],
      ];
      let maxCity1 = axisData[seriesData[0].indexOf(Math.max(...seriesData[0]))];
      let maxCity2 = axisData[seriesData[1].indexOf(Math.max(...seriesData[1]))];

      option = {
        backgroundColor: '#0F224C', // 背景色
        grid: {
          left: '5%',
          right: '5%',
          top: '20%',
          bottom: '1%',
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "rgba(255,255,255,0.7)"
            }
          },
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: [5, 10],
          textStyle: {
            color: "rgb(255,255,255)"
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
            color: "#C0C4CC",
            fontSize: 13,
            fontWeight: 'bold',
          },
          data: ["流出", "流入"]
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
              color: "#C0C4CC"
            }
          }
        },
        yAxis: [
          {
            type: "value",
            position: "left",
            name: '单位：Mbps',
            nameTextStyle: {
              color: '#C0C4CC',
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
                color: "#DEEBFF"
              }
            }
          },
        ],
        series: [
          {
            name: "流出",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            data: seriesData[0],
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
                  coord: [maxCity1, Math.max(...seriesData[0])],
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
            name: "流入",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 6,
            data: seriesData[1],
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
                  coord: [maxCity2, Math.max(...seriesData[1])],
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
        ]
      };

      option && myChart.setOption(option);
    }
    ,
    initStackedlineChart(){
      var chartDom = document.getElementById('main4');
      var myChart = echarts.init(chartDom);
      var option;
      let xsl = [30, 45, 26, 40];
      let xse = [35, 56, 20, 43];
      let xszzl = [50, 70, 37, 45];


      let myData2 = ["水泥", "多孔砖", "医用氧气", "工业氧气"];
      option = {
        //你的代码
        backgroundColor: "#041C44",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          confine: true, // 超出范围
          backgroundColor: "rgba(17,95,182,0.5)", //设置背景颜色
          //   borderColor: "rgba(255, 255, 255, .8)",
          formatter: "{b}<br>{a}：{c}万吨<br>{a1}：{c1}万元<br>{a2}：{c2}%",
        },
        legend: {
          top: "4%",
          y: " center",
          itemWidth: 14,
          itemHeight: 4,
          itemGap: 15,
          textStyle: {
            fontSize: 12,
            color: "#fff",
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
            data: myData2,
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
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "销售量（万吨）",
            splitNumber: 5,
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              formatter: "{value}",
              color: "rgba(95, 187, 235, 1)",
              textStyle: {
                fontSize: 14,
                color: "#fff",
                lineHeight: 16,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show:true,
              lineStyle: {
                color: "#2a3a67",
              }
            },
            splitLine: {
              show: false,
            },
          },
          {
            name: "增长额（万元）",
            splitNumber: 5,
            type: "value",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              show: true,
              fontSize: 12,
              color: "#fff",
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
            // name: "销售增长率（%）",
            splitNumber: 5,
            // offset: 50,
            type: "value",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              align: "center",
              padding: [0, 0, 0, 0],
            },
            axisLabel: {
              show: false,
              fontSize: 12,
              color: "#fff",
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
            name: "销售量",
            type: "bar",
            yAxisIndex: 0,
            barWidth: "16",
            barGap: "50%",
            data: xsl,
            itemStyle: {
              // borderRadius: [2, 2, 0, 0],
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
            name: "销售额",
            type: "bar",
            yAxisIndex: 1,
            barWidth: "16",
            barGap: "50%",
            data: xse,
            itemStyle: {
              // borderRadius: [2, 2, 0, 0],
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
            name: "销售增长率",
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
                color: "#fff",
              },
            },
            data: xszzl, // 折线图的数据
          },

        ],
      };
      option && myChart.setOption(option);
},
    initStackedMapChart() {
  var chartDom = document.getElementById('main5');
  var myChart = echarts.init(chartDom);
  var option;

  var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v3/bound/410000_full.json";
  var geoCoordMap = {
    '三门峡市': [111.181262093, 34.7833199411],
    '信阳市': [114.085490993, 32.1285823075],
    '南阳市': [112.542841901, 33.0114195691],
    '周口市': [114.654101942, 33.6237408181],
    '商丘市': [115.641885688, 34.4385886402],
    '安阳市': [114.351806508, 36.1102667222],
    '平顶山市': [113.300848978, 33.7453014565],
    '开封市': [114.351642118, 34.8018541758],
    '新乡市': [113.912690161, 35.3072575577],
    '洛阳市': [112.147524769, 34.2873678177],
    '漯河市': [114.0460614, 33.5762786885],
    '濮阳市': [115.026627441, 35.7532978882],
    '焦作市': [113.211835885, 35.234607555],
    '许昌市': [113.83531246, 34.0267395887],
    '郑州市': [113.64964385, 34.7566100641],
    '驻马店市': [114.049153547, 32.9831581541],
    '鹤壁市': [114.297769838, 35.7554258742],
  }
  var customerBatteryCityData = [
    {name: "三门峡市", value: 571},
    {name: "信阳市", value: 12},
    {name: "南阳市", value: 11},
    {name: "周口市", value: 114},
    {name: "商丘市", value: 91},
    {name: "安阳市", value: 13},
    {name: "平顶山市", value: 101},
    {name: "开封市", value: 15},
    {name: "新乡市", value: 43},
    {name: "洛阳市", value: 71},
    {name: "漯河市", value: 177},
    {name: "濮阳市", value: 759},
    {name: "焦作市", value: 641},
    {name: "许昌市", value: 51},
    {name: "郑州市", value: 37},
    {name: "驻马店市", value: 211},
    {name: "鹤壁市", value: 64},
  ]

  fetch(uploadedDataURL)
      .then(response => response.json())
      .then(geoJson => {
        echarts.registerMap('henan', geoJson);
        option = {
          backgroundColor: '#131C38',

          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove', // 悬浮显示弹窗
            showDelay: 0, // 浮层显示的延迟
            transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间
            enterable: true,
            formatter: function(item) {
              // Check if item.data exists and has the expected structure
              if (item.data && item.data.name) {


                return `<div style="font-size: 16px;line-height: 30px;color:#131d3c">
                          &nbsp;&nbsp;&nbsp;&nbsp;${item.data.name}<br />

                        </div>`;
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
                      color: 'rgba(37,108,190,0.3)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(15,169,195,0.3)' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
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
                      color: 'rgba(37,108,190,1)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(15,169,195,1)' // 50% 处的颜色
                    }],
                    global: false // 缺省为 false
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
                symbolSize: 5 // 图标大小
              },
              lineStyle: {
                width: 6, // 尾迹线条宽度
                color: 'rgb(22,255,255, .6)',
                opacity: 1, // 尾迹线条透明度
                curveness: 0 // 尾迹线条曲直度
              },
              label: {
                show: 0,
                position: 'end',
                formatter: '245'
              },
              silent: true,
              data: lineData()
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
              data: scatterData()
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
              data: scatterData2()
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
                      offset: 0, color: 'rgb(22,255,255, 0)' // 0% 处的颜色
                    },
                    {
                      offset: .75, color: 'rgb(22,255,255, 0)' // 100% 处的颜色
                    },
                    {
                      offset: .751, color: 'rgb(22,255,255, 1)' // 100% 处的颜色
                    },
                    {
                      offset: 1, color: 'rgb(22,255,255, 1)' // 100% 处的颜色
                    }
                  ],
                  global: false // 缺省为 false
                },
                opacity: 1
              },
              silent: true,
              data: scatterData2()
            }
          ]
        }

        myChart.setOption(option);
      })

  // 固定柱形图的高度
  function lineMaxHeight() {
    return 0.2; // 固定高度值
  }

  // 柱状体的主干
  function lineData() {
    return customerBatteryCityData.map((item) => {
      return {
        coords: [geoCoordMap[item.name], [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + lineMaxHeight()]]
      }
    })
  }

  // 柱状体的顶部
  function scatterData() {
    return customerBatteryCityData.map((item) => {
      return [geoCoordMap[item.name][0], geoCoordMap[item.name][1] + lineMaxHeight(), item]
    })
  }

  // 柱状体的底部
  function scatterData2() {
    return customerBatteryCityData.map((item) => {
      return {
        name: item.name,
        value: geoCoordMap[item.name]
      }
    })
  }
},

  }
}
</script>

<style scoped>
#main1, #main2 ,#main3,#main4,#main5{
  height: 400px;
  width: 650px;
}
</style>
