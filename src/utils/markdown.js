import { marked } from 'marked';

export async function fetchMarkdown(fileName) {
        const response = await fetch(`/markdown/${fileName}`);
        const markdown = await response.text();
        return marked(markdown);
}
