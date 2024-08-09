<template>
  <dv-border-box7 class="chart-container">
    <div class="chart-wrapper">
      <el-menu
          default-active="2"
          class="el-menu-vertical"
          :background-color="menuBgColor"
          :text-color="menuTextColor"
          :active-text-color="menuActiveTextColor"
          @select="handleMenuSelect"
      >
        <el-sub-menu v-for="(menuItem, index) in menuItems" :key="index" :index="index.toString()">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>{{ menuItem.title }}</span>
          </template>
          <el-menu-item
              v-for="(subItem, subIndex) in menuItem.subItems"
              :key="subIndex"
              :index="`${index}-${subIndex}`"
          >
            <el-icon><icon-menu /></el-icon>
            {{ subItem.title }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>

      <dv-border-box1 style="height: 430px; width: 580px; margin-left: 20px">
        <div style="margin: 15px; height: 415px; width: 560px; text-align: left;overflow-y: auto"
             v-html="content"></div>
      </dv-border-box1>

      <dv-border-box6 style="height: 430px; width: 580px;" :color="['gray', 'gray']">
        <div id="implementation-container" style="margin: 10px; height: 415px; width: 560px; overflow-y: auto; "></div>
      </dv-border-box6>

    </div>
  </dv-border-box7>
</template>

<script>
import {BorderBox1 as DvBorderBox1, BorderBox6 as DvBorderBox6, BorderBox7 as DvBorderBox7} from '@kjgl77/datav-vue3';
import {fetchMarkdown} from '@/utils/markdown';
import {Menu as IconMenu} from '@element-plus/icons-vue';

export default {
  name: 'HTML',
  components: {
    DvBorderBox1,
    DvBorderBox6,
    DvBorderBox7,
    IconMenu,
  },
  data() {
    return {
      menuItems: [],
      content: '',
      implementation: '',
      menuBgColor: '#fff',
      menuTextColor: '#333',
      menuActiveTextColor: '#409EFF',
    };
  },
  async created() {
    const markdownContent = await fetchMarkdown('html.md');
    this.parseMarkdown(markdownContent);
  },
  methods: {
    parseMarkdown(markdownContent) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(markdownContent, 'text/html');

      const h2Elements = Array.from(htmlDoc.querySelectorAll('h2'));
      h2Elements.forEach((h2Element) => {
        const menuItem = {
          title: h2Element.textContent,
          subItems: []
        };

        let nextElement = h2Element.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'H2') {
          if (nextElement.tagName === 'H3') {
            const subItemContent = this.extractContent(nextElement);
            menuItem.subItems.push({ title: nextElement.textContent, content: subItemContent.content, implementation: subItemContent.implementation });
          }
          nextElement = nextElement.nextElementSibling;
        }

        this.menuItems.push(menuItem);
      });
    },
    extractContent(startElement) {
      let content = '';
      let implementation = '';
      let currentElement = startElement.nextElementSibling;
      while (currentElement && currentElement.tagName !== 'H3' && currentElement.tagName !== 'H2') {
        if (currentElement.tagName !== 'H3') { // Skip code blocks for content
          content += currentElement.outerHTML;
        }
        if (currentElement.tagName === 'PRE' && currentElement.querySelector('code')) {
          implementation += currentElement.querySelector('code').textContent + '\n\n';
        }
        currentElement = currentElement.nextElementSibling;
      }
      return { content, implementation };
    },
    handleMenuSelect(index) {
      const [mainIndex, subIndex] = index.split('-');
      const selectedSubItem = this.menuItems[mainIndex].subItems[subIndex];
      this.content = selectedSubItem.content;

      // Dynamically insert and execute implementation code
      const implementationContainer = document.createElement('div');
      implementationContainer.innerHTML = selectedSubItem.implementation.replace(/\n\n/g, '<br><br>'); // Add spacing between code blocks
      document.querySelector('#implementation-container').innerHTML = ''; // Clear previous content
      document.querySelector('#implementation-container').appendChild(implementationContainer);
    }
  }
};
</script>

<style>
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
  height: 430px;
  overflow-y: auto;
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
</style>
