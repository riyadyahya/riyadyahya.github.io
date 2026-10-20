export const bulletList = (items: string[]): string => items.map((item) => `- ${item}`).join('\n');

export const link = (label: string, url: string): string => `[${label}](${url})`;

export const markdownDocument = (blocks: string[]): string => `${blocks.filter(Boolean).join('\n\n')}\n`;

export const markdownResponse = (body: string): Response =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
