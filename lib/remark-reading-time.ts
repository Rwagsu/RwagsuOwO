import readingTime from 'reading-time';
import { visit } from 'unist-util-visit';

export function remarkReadingTime() {
  return (tree: any, file: any) => {
    const textParts: string[] = [];

    // Only collect pure prose text (automatically exclude fenced code blocks and inline code)
    visit(tree, 'text', (node: any) => {
      textParts.push(node.value);
    });

    // Collect image alt text (descriptive, usually counted in reading time)
    visit(tree, 'image', (node: any) => {
      if (node.alt) {
        textParts.push(node.alt);
      }
    });

    // Collect text from tables.
    visit(tree, 'tableCell', (node: any) => {
      visit(node, 'text', (child: any) => {
        textParts.push(child.value);
      });
    });

    const plainText = textParts.join(' ').replace(/\s+/g, ' ').trim();

    // Calculate reading time
    const stats = readingTime(plainText, { wordsPerMinute: 260 });

    // Save to vfile.data
    file.data.readingTime = stats;
  };
}