import {marked} from 'marked';

export async function fetchMarkdown(fileName) {
    const basePath = process.env.NODE_ENV === 'production' ? '/web-demo/' : '/';
    const response = await fetch(`${basePath}markdown/${fileName}`);
    const markdown = await response.text();
    return marked(markdown);
}
