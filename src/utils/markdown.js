import { marked } from 'marked';

export async function fetchMarkdown(fileName) {
        // Check if the app is running in production (GitHub Pages) or development
        const basePath = process.env.NODE_ENV === 'production' ? '/web-demo/' : '/';

        // Construct the full URL for the markdown file
        const response = await fetch(`${basePath}markdown/${fileName}`);

        if (!response.ok) {
                throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`);
        }

        const markdown = await response.text();
        return marked(markdown);
}
