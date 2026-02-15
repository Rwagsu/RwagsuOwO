import { applyMdxPreset, defineConfig, defineDocs, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import { remarkReadingTime } from './lib/remark-reading-time';
import { remarkImage } from 'fumadocs-core/mdx-plugins/remark-image';

// Define the Zod schema first
const pageTagSchema = z.object({
    text: z.string(),
    value: z.string().optional(),
    icon: z.string().optional()
});

// Define the image schema for page frontmatter
const pageHeaderImageSchema = z.object({
    alt: z.string(),
    src: z.string()
});

// TODO: 还未完成...
const imageTypeSchema = z.object({
    alt: z.string(),
    src: z.string()
});

const videoTypeSchema = z.object({
    alt: z.string(),
    src: z.string()
});

const audioTypeSchema = z.object({
    alt: z.string(),
    src: z.string()
});

const codeTypeSchema = z.object({
    alt: z.string(),
    src: z.string()
});
// ENDTODO

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
    dir: 'content/docs',
    docs: {
        schema: frontmatterSchema.extend({
            // base props
            avatars: z.array(z.string()).optional(),
            time: z.date().optional(),
            tags: z.array(pageTagSchema).optional(),
            headerImage: pageHeaderImageSchema.optional(),
            type: z.enum(['base', 'image', 'video', 'audio', 'code', 'none']).default('base'),

            // docs type props
            image: imageTypeSchema.optional(),
            video: videoTypeSchema.optional(),
            audio: audioTypeSchema.optional(),
            code: codeTypeSchema.optional(),
        }),
        postprocess: {
            includeProcessedMarkdown: true,
            valueToExport: ['readingTime'],
        },
        mdxOptions: applyMdxPreset({
            remarkPlugins: [
                remarkReadingTime,
                [remarkImage, {
                    onError: "ignore"  // 忽略图片获取错误
                }]
            ]
        }),
    },
    meta: {
        schema: metaSchema,
    },

});

export default defineConfig({
    plugins: [lastModified()],
});
