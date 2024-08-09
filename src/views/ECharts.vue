<template>
  <dv-border-box7 class="chart-container">
    <div class="chart-wrapper">
      <el-menu
          default-active="1"
          class="el-menu-vertical"
          :background-color="menuBgColor"
          :text-color="menuTextColor"
          :active-text-color="menuActiveTextColor"
          @select="handleMenuSelect"
      >
        <el-menu-item index="1">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-histogram"></use>
          </svg>
          <span>柱图</span>
        </el-menu-item>
        <el-menu-item index="2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-histogram"></use>
          </svg>
          <span>柱图</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><DataLine /></el-icon>
          <span>折线图</span>
        </el-menu-item>
        <el-menu-item index="4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuzhetu"></use>
          </svg>
          <span>柱折结合图</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><PieChart /></el-icon>
          <span>饼图</span>
        </el-menu-item>
        <el-menu-item index="6">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ditu"></use>
          </svg>
          <span>地图</span>
        </el-menu-item>
        <el-menu-item index="7">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yibiaopan"></use>
          </svg>
          <span>仪表盘</span>
        </el-menu-item>
        <el-menu-item index="8">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijianzhou1"></use>
          </svg>
          <span>时间轴</span>
        </el-menu-item>
      </el-menu>
      <dv-border-box1 style="height: 430px; width: 580px;margin-left: 20px">
        <component
            style="margin: 15px;height: 415px; width: 560px;overflow-y: auto"
            :is="selectedChartComponent"
            :chart-data="selectedChartData"
            v-if="selectedChartComponent"
        ></component>
      </dv-border-box1>

      <dv-border-box6 style="height: 430px; width: 580px; "  :color="['gray', 'gray']">
        <div dv-bg style="margin: 10px; height: 415px; width: 560px;overflow-y: auto" v-html="markdownContent">
        </div>
      </dv-border-box6>
    </div>
  </dv-border-box7>
</template>

<script>
import {DataLine, Menu as IconMenu, PieChart} from '@element-plus/icons-vue';
import ChartBar from '../components/ChartBar.vue';
import ChartStackedBar from '../components/ChartStackedBar.vue';
import ChartStackedLine from '../components/ChartStackedLine.vue';
import ChartPie from '../components/ChartPie.vue';
import ChartLine from '../components/ChartLine.vue';
import ChartMap from '../components/ChartMap.vue';
import ChartGauge from '../components/ChartGauge.vue';
import ChartTime from '../components/ChartTime.vue';
import {BorderBox1 as DvBorderBox1, BorderBox6 as DvBorderBox6, BorderBox7 as DvBorderBox7} from '@kjgl77/datav-vue3';
import '@/assets/fonts/iconfont.js';
import {fetchMarkdown} from '@/utils/markdown';

export default {
  name: 'ECharts',
  components: {
    ChartBar,
    ChartStackedBar,
    ChartStackedLine,
    ChartPie,
    ChartLine,
    ChartMap,
    ChartGauge,
    ChartTime,
    DvBorderBox1,
    DvBorderBox6,
    DvBorderBox7,
    IconMenu,
    PieChart,
    DataLine,
  },
  data() {
    return {
      chartComponents: {
        '1': 'ChartBar',
        '2': 'ChartStackedBar',
        '3': 'ChartStackedLine',
        '4': 'ChartLine',
        '5': 'ChartPie',
        '6': 'ChartMap',
        '7': 'ChartGauge',
        '8': 'ChartTime'
      },
      chartData: {
        bar: {
          data: [50, 60, 70, 20, 30, 10, 50, 60, 70, 20, 30, 10],
          names: ['1年级', '2年级', '3年级', '4年级', '5年级', '6年级', '1年级', '2年级', '3年级', '4年级', '5年级', '6年级']
        },
        stackedbar: {
          title: '集团成员',
          categories: ['日', '月', '季度', '年'],
          data1: [10, 15, 10, 80],
          data2: [20, 40, 10, 100],
          data3: [30, 15, 40, 10],
          series: ['易网主卡', '携入', '纯新增']
        },
        stackedline: {
          yUnit: '单位：Mbps',
          axisData: ["北京", "上海", "广州", "深圳", "四川", "河南", "南京", "贵州", "新疆"],
          series: ['流入', '流出'],
          seriesData1: [12, 25, 22, 10, 36, 56, 45, 12, 25],
          seriesData2: [42, 15, 36, 9, 6, 10, 12, 25, 32]
        },
        pie: {
          color: ['rgba(220, 145, 255, 1)', 'rgba(245, 154, 108, 1)', 'rgba(139, 111, 255, 1)', 'rgba(120, 187, 255, 1)', 'rgba(124, 168, 255, 1)'],
          seriesData: [
            { "name": "治安单位", "value": 1243 },
            { "name": "内保单位", "value": 629 },
            { "name": "人管单位", "value": 1629 },
            { "name": "国保单位", "value": 3425 },
            { "name": "禁毒单位", "value": 2824 },
          ]
        },
        line: {
          yseries: ['销售量', '增长额', '销售增长率'],
          xseries: ["水泥", "多孔砖", "医用氧气", "工业氧气"],
          xsl: [30, 45, 26, 40],
          xse: [35, 56, 20, 43],
          xszzl: [50, 70, 37, 45],
          yUnits: ['销售量（万吨）', '增长额（万元）'],
          tUnits: ['万吨', '万元', '%'],
        },
        map: {
          URL: 'https://geo.datav.aliyun.com/areas_v3/bound/410000_full.json',
          geoCoordMap: {
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
            '济源市': [112.602920675, 35.06724323]
          },
          customerBatteryCityData: [
            { name: "三门峡市", values: { 卡号: 571, 宽带: 100, 终端: 50 } },
            { name: "信阳市", values: { 卡号: 12, 宽带: 5, 终端: 2 } },
            { name: "南阳市", values: { 卡号: 11, 宽带: 7, 终端: 3 } },
            { name: "周口市", values: { 卡号: 114, 宽带: 40, 终端: 20 } },
            { name: "商丘市", values: { 卡号: 91, 宽带: 30, 终端: 10 } },
            { name: "安阳市", values: { 卡号: 13, 宽带: 6, 终端: 4 } },
            { name: "平顶山市", values: { 卡号: 101, 宽带: 35, 终端: 15 } },
            { name: "开封市", values: { 卡号: 15, 宽带: 8, 终端: 3 } },
            { name: "新乡市", values: { 卡号: 43, 宽带: 20, 终端: 10 } },
            { name: "洛阳市", values: { 卡号: 71, 宽带: 25, 终端: 12 } },
            { name: "漯河市", values: { 卡号: 177, 宽带: 60, 终端: 30 } },
            { name: "濮阳市", values: { 卡号: 759, 宽带: 200, 终端: 100 } },
            { name: "焦作市", values: { 卡号: 641, 宽带: 180, 终端: 90 } },
            { name: "许昌市", values: { 卡号: 51, 宽带: 15, 终端: 7 } },
            { name: "郑州市", values: { 卡号: 37, 宽带: 12, 终端: 6 } },
            { name: "驻马店市", values: { 卡号: 211, 宽带: 70, 终端: 35 } },
            { name: "鹤壁市", values: { 卡号: 64, 宽带: 25, 终端: 10 } },
            { name: "济源市", values: { 卡号: 64, 宽带: 25, 终端: 10 } },
          ]
        },
        gauge: {
          text: '测试文字',
          score: 95,
        },
        time: {
          subtext: '数据来自国家统计局',
          timelineData: ['2013-01-01', '2014-01-01', '2015-01-01'],
          titles: ['2013就业', '2014就业', '2015就业'],
          seriesData: [
            [
              { name: '硕士', data: [ { name: '华为', value: 50 }, { name: '百度', value: 10 }, { name: '腾讯', value: 40 } ] },
              { name: '本科生', data: [ { name: '华为', value: 40 }, { name: '百度', value: 30 }, { name: '腾讯', value: 30 } ] },
              { name: '博士', data: [ { name: '华为', value: 20 }, { name: '百度', value: 30 }, { name: '腾讯', value: 50 } ] }
            ],
            [
              { name: '硕士', data: [ { name: '华为', value: 50 }, { name: '百度', value: 30 }, { name: '腾讯', value: 20 } ] },
              { name: '本科生', data: [ { name: '华为', value: 40 }, { name: '百度', value: 55 }, { name: '腾讯', value: 5 } ] },
              { name: '博士', data: [ { name: '华为', value: 30 }, { name: '百度', value: 20 }, { name: '腾讯', value: 50 } ] }
            ],
            [
              { name: '硕士', data: [ { name: '华为', value: 40 }, { name: '百度', value: 20 }, { name: '腾讯', value: 40 } ] },
              { name: '本科生', data: [ { name: '华为', value: 40 }, { name: '百度', value: 40 }, { name: '腾讯', value: 20 } ] },
              { name: '博士', data: [ { name: '华为', value: 10 }, { name: '百度', value: 40 }, { name: '腾讯', value: 50 } ] }
            ]
          ]
        }
      },

      selectedChartComponent: null,
      selectedChartData: null,
      menuBgColor: '#fff',
      menuTextColor: '#333',
      menuActiveTextColor: '#409EFF',
      markdownContent: '',
    };
  },
  methods: {
    async handleMenuSelect(index) {
      this.selectedChartComponent = this.$options.components[this.chartComponents[index]];
      const dataKey = this.chartComponents[index].replace('Chart', '').toLowerCase();
      this.selectedChartData = this.chartData[dataKey];
      await this.updateMarkdownContent(index);
    },
    async updateMarkdownContent(index) {
      const fileName = 'Echarts.md'; // 可以根据需求动态调整文件名
      const markdownContent = await fetchMarkdown(fileName);
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(markdownContent, 'text/html');

      let content = '';
      let startElement, endElement;
      switch (index) {
        case '1': // First Bar Chart
          startElement = Array.from(htmlDoc.querySelectorAll('h3')).find(el => el.textContent.includes('第一个柱状图'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h3', 'h2');
          }
          break;
        case '2': // Second Bar Chart
          startElement = Array.from(htmlDoc.querySelectorAll('h3')).find(el => el.textContent.includes('第二个柱状图'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h3', 'h2');
          }
          break;
        case '3': // Line Chart
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('折线图总结'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        case '4': // Pie Chart
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('饼图总结'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        case '5': // Bar-Line Combined Chart
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('柱状图折线图结合总结'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        case '6': // Map
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('地图总结'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        case '7': // Gauge
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('仪表盘总结'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        case '8': // Timeline
          startElement = Array.from(htmlDoc.querySelectorAll('h2')).find(el => el.textContent.includes('时间轴'));
          endElement = startElement?.nextElementSibling;
          if (startElement && endElement) {
            content = this.extractContentUntilTag(endElement, 'h2');
          }
          break;
        default:
          content = '';
      }

      this.markdownContent = content;
    },
    extractContentUntilTag(startElement, ...stopTags) {
      let content = '';
      let currentElement = startElement;
      while (currentElement && !stopTags.some(tag => currentElement.tagName.toLowerCase() === tag)) {
        content += currentElement.outerHTML;
        currentElement = currentElement.nextElementSibling;
      }
      return content;
    }
  }
}
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.chart-wrapper {
  margin: 30px;
  display: flex;
  height: 430px;
  width: 100%;
}

.el-menu-vertical {
  width: 200px;
}

.el-menu-vertical .el-menu-item {
  padding: 10px;
  display: flex;
  align-items: center;
}

.el-menu-vertical .el-menu-item .el-icon {
  margin-right: 8px;
}

.el-menu-vertical .el-menu-item:hover {
  background-color: #f5f5f5;
}

.el-menu-vertical .el-menu-item.is-active {
  background-color: #409EFF;
  color: white;
}

.icon {
  width: 2em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right: 5px;
}
</style>
