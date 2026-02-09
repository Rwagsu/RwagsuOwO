import { applyMdxPreset, defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import { remarkReadingTime } from './lib/remark-reading-time';

// Define the Zod schema first
const pageTagSchema = z.object({
    text: z.string(),
    value: z.string().optional(),
    icon: z.any().optional() // IconType is difficult to represent in Zod, using z.any() as a workaround
});

const pageImageSchema = z.object({
    alt: z.string(),
    src: z.string()
});


// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
    dir: 'content/docs',
    docs: {
        schema: frontmatterSchema.extend({
            // other props
            avatars: z.array(z.string()).optional(),
            time: z.date().optional(),
            props: z.array(pageTagSchema).optional(),
            image: pageImageSchema.optional(),
        }),
        postprocess: {
            includeProcessedMarkdown: true,
            valueToExport: ['readingTime'],
        },
        mdxOptions: applyMdxPreset({
            remarkPlugins: [remarkReadingTime],
        }),
    },
    meta: {
        schema: metaSchema,
    },

});

export default defineConfig({
    plugins: [lastModified()],
});
