<template>
  <div class="markdown-renderer">
    <div class="sidebar">
      <ul class="menu-list">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <a @click="scrollTo(menuItem.id, index)">{{ menuItem.title }}</a>
          <ul v-if="menuItem.subItems && menuItem.subItems.length">
            <li v-for="(subItem, subIndex) in menuItem.subItems" :key="subIndex">
              <a @click="scrollTo(subItem.id, `${index}-${subIndex}`)">{{ subItem.title }}</a>
              <ul v-if="subItem.subItems && subItem.subItems.length">
                <li v-for="(subSubItem, subSubIndex) in subItem.subItems" :key="subSubIndex">
                  <a @click="scrollTo(subSubItem.id, `${index}-${subIndex}-${subSubIndex}`)">{{ subSubItem.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
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

export default {
  name: 'MarkdownRenderer',
  data() {
    return {
      menuItems: [],
      content: '',
      activeItemIndex: null, // 当前活动菜单项的索引
    };
  },
  async created() {
    this.loadMarkdown();
  },
  watch: {
    '$route.params.markdownFile': 'loadMarkdown',
  },
  methods: {
    async loadMarkdown() {
      const markdownContent = await fetchMarkdown(this.$route.params.markdownFile + '.md');
      this.parseMarkdown(markdownContent);
    },
    parseMarkdown(markdownContent) {
      const parser = new DOMParser();
      const htmlContent = parser.parseFromString(marked(markdownContent), 'text/html');
      this.generateMenu(htmlContent);

      const codeBlocks = htmlContent.querySelectorAll('pre code');
      codeBlocks.forEach((block,) => {
        hljs.highlightElement(block);

        const pre = block.parentElement;
        if (pre) {
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

          pre.style.position = 'relative';
          pre.insertBefore(languageLabel, block);
          pre.appendChild(button);
        }
      });

      this.content = htmlContent.body.innerHTML;
    },
    generateMenu(htmlContent) {
      const menuItems = [];
      const headings = htmlContent.querySelectorAll('h1, h2, h3');
      let currentH1 = null;
      let currentH2 = null;

      headings.forEach((heading, index) => {
        const id = `${heading.tagName}-${heading.textContent.trim().toLowerCase().replace(/\s+/g, '-')}-${index}`;
        heading.id = id;

        if (heading.tagName === 'H1') {
          currentH1 = { id, title: heading.textContent, subItems: [] };
          menuItems.push(currentH1);
        } else if (heading.tagName === 'H2' && currentH1) {
          currentH2 = { id, title: heading.textContent, subItems: [] };
          currentH1.subItems.push(currentH2);
        } else if (heading.tagName === 'H3' && currentH2) {
          currentH2.subItems.push({ id, title: heading.textContent });
        }
      });

      this.menuItems = menuItems;
    },
    scrollTo(id, index) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeItemIndex = index; // 更新活动菜单项的索引
      }
    },
    handleCopyButtonClick(event) {
      if (event.target.classList.contains('copy-button')) {
        const code = event.target.dataset.code;
        this.copyToClipboard(code);
      }
    },
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        ElMessage.success('Code copied to clipboard!');
      } catch (e) {
        ElMessage.error('Failed to copy code!');
      }
    },
  },
};
</script>

<style>
.markdown-renderer {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f7f9fc;
  border-right: 1px solid #e6e6e6;
  overflow-y: auto;
  padding: 16px;
}

.menu-list {
  list-style-type: none;
  padding: 0;
}

.menu-list a {
  color: #333;
  text-decoration: none;
  padding: 8px 16px;
  display: block;
  transition: background-color 0.3s;
  border-radius: 4px;
}

.menu-list a:hover {
  background-color: #409EFF;
  color: white;
}

.menu-list ul {
  list-style-type: none;
  padding-left: 20px;
}

.menu-list .active {
  background-color: #409EFF;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.markdown-body {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
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

.code-language-label {
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
  transition: background-color 0.3s;
  position: absolute;
  top: 10px;
  right: 10px;
}

pre button:hover {
  background-color: #005f9e;
}
</style>
