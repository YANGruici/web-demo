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
            <icon-menu />
          </el-icon>
          <span>{{ menuItem.title }}</span>
        </el-menu-item>
      </el-menu>

      <dv-border-box1 style="height: 540px; width: 580px; margin: 20px;">
        <div
            id="implementation-containe3r"
            style="margin: 10px; height: 520px; width: 560px; overflow-y: auto;text-align: left;"
            class="markdown-body"
            v-html="content"
            @click="handleCopyButtonClick"
        ></div>

      </dv-border-box1>

      <dv-border-box6 :color="['gray', 'gray']" style="height: 540px; width: 580px;margin: 20px">
        <div style="margin: 15px; height: 520px; width: 550px; ">
          <img alt="CSS Image" :src="img1" style="width: 100%; height: 100%;" />
        </div>
      </dv-border-box6>
    </div>
  </dv-border-box7>
</template>

<script>
import {
  BorderBox1 as DvBorderBox1,
  BorderBox6 as DvBorderBox6,
  BorderBox7 as DvBorderBox7,
} from '@kjgl77/datav-vue3';
import { fetchMarkdown } from '@/utils/markdown';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { ElMessage } from 'element-plus';

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
        img1: require('@/assets/image/img_1.png'),
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

        const codeBlocks = htmlContent.querySelectorAll('pre code');
        codeBlocks.forEach((block) => {
        hljs.highlightElement(block);

        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.className = 'copy-button';
        button.dataset.code = block.textContent;
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';

        const languageClass = block.className.match(/language-([a-zA-Z0-9_-]+)/);
        const languageName = languageClass ? languageClass[1]: 'unknown'; // 提取语言名称并转换为大写
        const languageLabel = document.createElement('div');
        languageLabel.textContent = languageName;
        languageLabel.className = 'code-language-label';

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.insertBefore(languageLabel, block);
        pre.appendChild(button);
      });

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
        this.content = menuItems[0].content;
      }
    },
    handleMenuSelect(index) {
      this.content = this.menuItems[index].content;
      this.$nextTick(() => {
        const codeBlocks = document.querySelectorAll('#implementation-container pre code');
        codeBlocks.forEach((block) => {
          hljs.highlightElement(block);
        });
      });
    },
    handleCopyButtonClick(event) {
      if (event.target.classList.contains('copy-button')) {
        const code = event.target.dataset.code;
        this.copyToClipboard(code);
      }
    },
    async copyToClipboard(text) {
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(text);
          ElMessage({
            message: 'Code copied to clipboard!',
            type: 'success',
          });
        } catch (e) {
          console.error('Failed to copy: ', e);
          ElMessage.error('Failed to copy code!');
        }
      } else {
        console.error('Clipboard not supported');
        ElMessage.error('Clipboard not supported');
      }
    }
  },
};
</script>

<style>
.chart-container {
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
}

.chart-wrapper {
  margin: 30px;
  display: flex;
  height: 100%;
  width: 100%;
}

.el-menu-vertical {
  width: 200px;
  height: 580px;
  overflow-y: auto;
  background-color: #f7f9fc;
  border-right: 1px solid #e6e6e6;
  border-radius: 5px;
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
  background-color: #e6f7ff;
}

.el-menu-vertical .el-menu-item.is-active {
  background-color: #409EFF;
  color: white;
  border-radius: 4px;
}

pre {
  position: relative;
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 10px;
  overflow: auto;
  color: #dcdcdc;
  font-size: 14px;
  font-family: 'Fira Code', monospace;
}

pre .code-language-label {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #007acc;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  font-family: Arial, sans-serif;
}

pre button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

pre button:hover {
  background-color: #005f9e;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
