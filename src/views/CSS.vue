<template>
  <dv-border-box7 class="chart-container">
    <div class="chart-wrapper">
      <el-menu
          :active-text-color="menuActiveTextColor"
          :background-color="menuBgColor"
          :text-color="menuTextColor"
          class="el-menu-vertical"
          default-active="0"
          @select="handleMenuSelect"
      >
        <el-menu-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :index="index.toString()"
        >
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>{{ menuItem.title }}</span>
        </el-menu-item>
      </el-menu>

      <dv-border-box1 style="height: 430px; width: 580px; margin-left: 20px">
        <div style="margin: 15px; height: 400px; width: 550px; text-align: left;">
          <img alt="CSS Image" src="@/assets/img/img_1.png" style="width: 100%; height: 100%;">
        </div>
      </dv-border-box1>

      <dv-border-box6 :color="['gray', 'gray']" style="height: 430px; width: 580px;">
        <div id="implementation-container" style="margin: 10px; height: 415px; width: 560px; overflow-y: auto;"
             v-html="content"></div>
      </dv-border-box6>

    </div>
  </dv-border-box7>
</template>

<script>
import {BorderBox1 as DvBorderBox1, BorderBox6 as DvBorderBox6, BorderBox7 as DvBorderBox7} from '@kjgl77/datav-vue3';
import {fetchMarkdown} from '@/utils/markdown';
import {Menu as IconMenu} from '@element-plus/icons-vue';
import {marked} from 'marked';

export default {
  name: 'CSS',
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
      menuBgColor: '#fff',
      menuTextColor: '#333',
      menuActiveTextColor: '#409EFF',
    };
  },
  async created() {
    const markdownContent = await fetchMarkdown('css.md');
    this.parseMarkdown(markdownContent);
  },
  methods: {
    parseMarkdown(markdownContent) {
      const parser = new DOMParser();
      const htmlContent = parser.parseFromString(marked(markdownContent), 'text/html');

      const h2Elements = Array.from(htmlContent.querySelectorAll('h2'));
      const menuItems = [];

      h2Elements.forEach((h2Element) => {
        const menuItem = {
          title: h2Element.textContent,
          content: '',
        };

        let nextElement = h2Element.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'H2') {
          menuItem.content += nextElement.outerHTML;
          nextElement = nextElement.nextElementSibling;
        }

        menuItems.push(menuItem);
      });

      this.menuItems = menuItems;
      if (menuItems.length > 0) {
        this.content = menuItems[0].content; // Initialize with the first section's content
      }
    },
    handleMenuSelect(index) {
      this.content = this.menuItems[index].content;
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
