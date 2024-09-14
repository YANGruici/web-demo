<template>
  <Navigation />
  <div class="markdown-renderer">
    <div class="sidebar">
      <ul class="menu-list">
        <li v-for="(menuItem, index) in menuItems" :key="index">
          <a
              :class="{ active: activeItemIndex === index.toString() }"
              @click="handleMenuClick(menuItem.id, index.toString())"
          >
            {{ menuItem.title }}
          </a>
          <ul v-if="menuItem.subItems && menuItem.subItems.length">
            <li v-for="(subItem, subIndex) in menuItem.subItems" :key="subIndex">
              <a
                  :class="{ active: activeItemIndex === `${index}-${subIndex}` }"
                  @click="handleMenuClick(subItem.id, `${index}-${subIndex}`)"
              >
                {{ subItem.title }}
              </a>
              <ul v-if="subItem.subItems && subItem.subItems.length">
                <li
                    v-for="(subSubItem, subSubIndex) in subItem.subItems"
                    :key="subSubIndex"
                >
                  <a
                      :class="{ active: activeItemIndex === `${index}-${subIndex}-${subSubIndex}` }"
                      @click="handleMenuClick(
                      subSubItem.id,
                      `${index}-${subIndex}-${subSubIndex}`
                    )"
                  >
                    {{ subSubItem.title }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content" ref="content" @scroll="onScroll">
      <div
          v-html="content"
          class="markdown-body"
          @click="handleCopyButtonClick"
      ></div>
    </div>
  </div>
</template>

<script>
import { fetchMarkdown } from '@/utils/markdown';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { ElMessage } from 'element-plus';
import Navigation from '@/components/NaviGation'

export default {
  name: 'MarkdownRenderer',
  components: { Navigation },

  data() {
    return {
      menuItems: [],
      content: '',
      activeItemIndex: '',
      observer: null,
      disableScrollEvent: false,
      scrollTimeout: null,
    };
  },
  async created() {
    await this.loadMarkdown();
  },
  watch: {
    '$route.params.markdownFile': 'loadMarkdown',
  },
  methods: {
    async loadMarkdown() {
      const markdownContent = await fetchMarkdown(
          this.$route.params.markdownFile + '.md'
      );
      this.parseMarkdown(markdownContent);
      this.$nextTick(() => {
        this.initializeObserver();
        this.activateTopLevelMenu();
      });
    },
    parseMarkdown(markdownContent) {
      const parser = new DOMParser();
      const htmlContent = parser.parseFromString(
          marked(markdownContent),
          'text/html'
      );
      this.generateMenu(htmlContent);
      const codeBlocks = htmlContent.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
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
    handleMenuClick(id, index) {
      this.scrollTo(id, index);
    },
    scrollTo(id, index) {
      if (this.observer) this.observer.disconnect(); // Properly disconnect observer
      const element = document.getElementById(id);
      if (element) {
        this.disableScrollEvent = true;
        const contentElement = this.$refs.content;
        const topOffset = element.offsetTop - contentElement.offsetTop;
        contentElement.scrollTo({ top: topOffset, behavior: 'auto' }); // Change scrollIntoView to scrollTo for better control
        this.setActiveMenu(index);
        if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.disableScrollEvent = false;
          this.initializeObserver(); // Reinitialize observer
        }, 300);
      }
      this.setActiveMenu(index);
    },
    setActiveMenu(index) {
      this.activeItemIndex = index;
    },
    activateTopLevelMenu() {
      if (this.menuItems.length > 0) {
        this.activeItemIndex = '0';
        this.scrollTo(this.menuItems[0].id, '0');
      }
    },
    onScroll() {
      if (this.disableScrollEvent) return;
      this.debounce(this.updateActiveMenuOnScroll, 20)();
    },
    initializeObserver() {
      if (this.observer) return;
      const options = {
        root: this.$refs.content,
        rootMargin: '0px',
        threshold: 0.1,
      };
      this.observer = new IntersectionObserver(this.handleIntersect, options);
      const elements = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3');
      elements.forEach((element) => this.observer.observe(element));
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = this.getMenuIndexById(entry.target.id);
          if (index !== null) {
            this.setActiveMenu(index);
          }
        }
      });
    },
    updateActiveMenuOnScroll() {
      const scrollTop = this.$refs.content.scrollTop;
      const headings = Array.from(document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3'));
      const closestHeading = headings.reduce((closest, heading) => {
        const headingOffset = Math.abs(heading.offsetTop - scrollTop);
        return headingOffset < closest.offset ? { heading, offset: headingOffset } : closest;
      }, { heading: null, offset: Infinity });
      if (closestHeading.heading) {
        this.setActiveMenu(this.getMenuIndexById(closestHeading.heading.id));
      }
    },
    getMenuIndexById(id) {
      let index = null;
      this.menuItems.forEach((item, i) => {
        if (item.id === id) index = i.toString();
        item.subItems?.forEach((subItem, j) => {
          if (subItem.id === id) index = `${i}-${j}`;
          subItem.subItems?.forEach((subSubItem, k) => {
            if (subSubItem.id === id) index = `${i}-${j}-${k}`;
          });
        });
      });
      return index;
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
    debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    },
  },
};
</script>

<style scoped lang="scss">
.markdown-renderer {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background-color: #f7f9fc;
  border: 1px solid #e6e6e6;
  overflow-y: auto;
  padding: 16px;
  margin: 5px;
}

.menu-list {
  list-style-type: none;
  padding: 0;
  font-family: Arial, sans-serif;

  li {
    margin-bottom: 5px;

    /* Top-level menu items (H1) */
    & > a {
      font-size: 1.2em;
      font-weight: bold;
      color: #333;
      padding: 10px 16px;
      display: block;
      transition: background-color 0.3s;
      border-radius: 6px;
      position: relative;
      border-left: 4px solid transparent;
      text-decoration: none;  // Add this line to remove underline

      &:hover {
        background-color: #409EFF;
        color: white;
        border-left-color: #409EFF;
      }
    }

    /* Second-level items (H2) */
    ul {
      list-style-type: none;
      padding-left: 15px;

      li > a {
        font-size: 1em;
        font-weight: normal;
        color: #555;
        padding: 8px 16px;
        display: block;
        transition: background-color 0.3s;
        border-radius: 4px;
        border-left: 4px solid transparent;
        text-decoration: none;  // Add this line to remove underline

        &:hover {
          background-color: #53a8ff;
          color: white;
          border-left-color: #53a8ff;
        }
      }

      /* Third-level items (H3) */
      ul {
        list-style-type: none;
        padding-left: 15px;

        li > a {
          font-size: 0.9em;
          font-weight: lighter;
          color: #777;
          padding: 6px 16px;
          display: block;
          transition: background-color 0.3s;
          border-radius: 4px;
          border-left: 4px solid transparent;
          text-decoration: none;  // Add this line to remove underline

          &:hover {
            background-color: #69b0ff;
            color: white;
            border-left-color: #69b0ff;
          }
        }
      }
    }
  }

  /* Active state styling */
  .active {
    background-color: #409EFF;
    color: white !important;
    border-left-color: #409EFF !important;

    /* Active styling for nested items */
    ul .active {
      background-color: #53a8ff;
      border-left-color: #53a8ff;

      ul .active {
        background-color: #69b0ff;
        border-left-color: #69b0ff;
      }
    }
  }
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.markdown-body {
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

:deep(pre) {
  position: relative;
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 10px;
  overflow: auto;
  color: #dcdcdc;
  font-size: 14px;
  font-family: 'Fira Code', monospace;

  button {
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

  button:hover {
    background-color: #005f9e;
  }
}

:deep(.code-language-label) {
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

</style>

