<template>
  <div id="chart-time" style="height: 100%; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartTime',
  props: {
    chartData: Object
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = document.getElementById('chart-time');
      const myChart = echarts.init(chartDom);
      const { subtext, timelineData, titles, seriesData } = this.chartData;

      // 提取所有 seriesData 的 name
      const legendData = seriesData.flatMap(data => data.map(series => series.name));

      const options = seriesData.map((data, index) => ({
        title: { text: titles[index] },
        series: data
      }));

      const option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            data: timelineData
          },
          title: {
            subtext: subtext,
            subtextStyle: {
              align: 'center'
            }
          },
          tooltip: {},
          legend: {
            x: 'right',
            data: legendData,  // 使用动态 legendData
            selectedMode: 'single'
          },
          calculable: true,
          series: legendData.map(name => ({ name, type: 'pie', center: ['50%', '50%'] }))
        },
        options: options
      };

      option && myChart.setOption(option);
    }
  }

};
</script>
