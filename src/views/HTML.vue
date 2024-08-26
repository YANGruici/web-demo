<template>
  <div class="markdown-renderer">
    <div class="sidebar">
      <el-menu
          default-active="0-0"
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
    </div>
    <div class="content">
      <div v-html="content" class="markdown-body" @click="handleCopyButtonClick"></div>
    </div>
  </div>
</template>

<script>
import { fetchMarkdown } from '@/utils/markdown';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { ElMessage } from 'element-plus';
import { Menu as IconMenu } from '@element-plus/icons-vue';

export default {
  name: 'MarkdownRenderer',
  components: {
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
    const markdownContent = await fetchMarkdown(this.$route.params.markdownFile + '.md');
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
          subItems: []
        };

        let nextElement = h2Element.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'H2') {
          if (nextElement.tagName === 'H3') {
            const subItemContent = this.extractContent(nextElement);
            menuItem.subItems.push({ title: nextElement.textContent, content: subItemContent.content });
          }
          nextElement = nextElement.nextElementSibling;
        }

        this.menuItems.push(menuItem);
      });

      if (this.menuItems.length > 0 && this.menuItems[0].subItems.length > 0) {
        this.handleMenuSelect('0-0');
      }
    },
    extractContent(startElement) {
      let content = '';
      let currentElement = startElement.nextElementSibling;
      while (currentElement && currentElement.tagName !== 'H3' && currentElement.tagName !== 'H2') {
        if (currentElement.tagName !== 'H3') {
          content += currentElement.outerHTML;
        }
        currentElement = currentElement.nextElementSibling;
      }
      return { content };
    },
    handleMenuSelect(index) {
      const [mainIndex, subIndex] = index.split('-');
      const selectedSubItem = this.menuItems[mainIndex].subItems[subIndex];
      this.content = selectedSubItem.content;
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
  }
};
</script>

<style scoped>
.markdown-renderer {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f7f9fc;
  border-right: 1px solid #e6e6e6;
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.el-menu-vertical {
  border-right: none;
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
</style>