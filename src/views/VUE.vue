<template>
  <dv-border-box7 class="chart-container">
    <div class="chart-wrapper">
      <el-menu
          default-active="0"
          class="el-menu-vertical"
          :background-color="menuBgColor"
          :text-color="menuTextColor"
          :active-text-color="menuActiveTextColor"
          @select="handleMenuSelect"
      >
        <el-menu-item v-for="(menuItem, index) in menuItems" :key="index" :index="index.toString()">
          <el-icon><icon-menu /></el-icon>
          {{ menuItem.title }}
        </el-menu-item>
      </el-menu>

      <dv-border-box1  style="height: 550px; width: 580px;margin: 20px;justify-content: center;justify-items: center;">
        <div style="margin: 15px; height: 520px; width: 560px; text-align: left; overflow-y: auto"
             v-html="selectedContent" class="markdown-body" @click="handleCopyButtonClick"></div>
      </dv-border-box1>

      <dv-border-box6 style="height: 550px; width: 580px; margin: 20px;display: flex;justify-content: center" :color="['gray', 'gray']">
        <div id="implementation-container" style="margin: 10px; height: 520px; width: 560px; overflow-y: auto;"></div>
      </dv-border-box6>
    </div>
  </dv-border-box7>
</template>

<script>
import { defineComponent, h,createApp } from 'vue';
import { BorderBox1 as DvBorderBox1, BorderBox6 as DvBorderBox6, BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3';
import { fetchMarkdown } from '@/utils/markdown';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { ElMessage } from 'element-plus';
export default {
  name: 'VUE',
  components: {
    DvBorderBox1,
    DvBorderBox6,
    DvBorderBox7,
    IconMenu,
  },
  data() {
    return {
      menuItems: [],
      selectedContent: '',
      menuBgColor: '#fff',
      menuTextColor: '#333',
      menuActiveTextColor: '#409EFF',
    };
  },
  async created() {
    const markdownContent = await fetchMarkdown('vue.md');
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
        const languageName = languageClass ? languageClass[1] : 'unknown';
        const languageLabel = document.createElement('div');
        languageLabel.textContent = languageName;
        languageLabel.className = 'code-language-label';

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.insertBefore(languageLabel, block);
        pre.appendChild(button);
      });

      const h2Elements = Array.from(htmlContent.querySelectorAll('h2'));
      h2Elements.forEach((h2Element) => {
        const menuItem = {
          title: h2Element.textContent,
          fullContent: '',
          implementation: '',
        };

        let currentElement = h2Element.nextElementSibling;
        while (currentElement && currentElement.tagName !== 'H2') {
          if (currentElement.tagName === 'PRE' && currentElement.querySelector('code')) {
            const codeBlock = currentElement.querySelector('code').textContent;
            if (currentElement.querySelector('code').classList.contains('language-vue')) {
              menuItem.implementation += codeBlock + '\n\n';
            }
            menuItem.fullContent += currentElement.outerHTML;
          } else {
            menuItem.fullContent += currentElement.outerHTML;
          }
          currentElement = currentElement.nextElementSibling;
        }

        this.menuItems.push(menuItem);
      });

      if (this.menuItems.length > 0) {
        this.selectedContent = this.menuItems[0].fullContent;
        this.updateImplementation(this.menuItems[0].implementation);
      }
    },
    handleMenuSelect(index) {
      const selectedMenuItem = this.menuItems[index];
      this.selectedContent = selectedMenuItem.fullContent;
      this.updateImplementation(selectedMenuItem.implementation);
    },
    updateImplementation(implementation) {
      const implementationContainer = document.createElement('div');
      implementationContainer.innerHTML = hljs.highlight(implementation, { language: 'vue' }).value;
      document.querySelector('#implementation-container').innerHTML = '';
      document.querySelector('#implementation-container').appendChild(implementationContainer);

      const Component = defineComponent({
        render() {
          return h('div', { innerHTML: implementation });
        },
      });

      this.$nextTick(() => {
        const app = createApp(Component);
        app.mount('#implementation-container');
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
    },
  },
};
</script>

<style>
.chart-container {
  margin: auto;
  padding: 0;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 95%;
}

.chart-wrapper {
  margin: 30px;
  display: flex;
  height: 100%;
  width: 100%;
}

.el-menu-vertical {
  width: 200px;
  height: 500px;
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

.el-menu-vertical .el-icon {
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
