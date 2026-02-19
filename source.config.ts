import { applyMdxPreset, defineConfig, defineDocs, frontmatterSchema, metaSchema } from "fumadocs-mdx/config";
import { z } from "zod";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { remarkReadingTime } from "./lib/remark-reading-time";
import { remarkImage } from "fumadocs-core/mdx-plugins/remark-image";

// Define the Zod schema first
const pageTagSchema = z.object({
    text: z.string(),
    icon: z.string().optional(),
    variant: z.enum(["outline", "ghost", "link", "default", "secondary", "destructive"]).default("secondary")
});

const pageButtonSchema = z.object({
    text: z.string(),
    href: z.string(),
    icon: z.string().optional(),
    variant: z.enum(["outline", "ghost", "link", "default", "secondary", "destructive"]).optional()
});

const githubInfoTypeSchema = z.object({
    user: z.string(),
    repo: z.string(),
    branch: z.string(),
});

// Define the image schema for page frontmatter
const pageImageSchema = z.object({
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

const heroTypeSchema = z.object({
    buttons: z.array(pageButtonSchema).optional(),
    icon: pageImageSchema.optional(),
});

const codeTypeSchema = z.object({
    maintenanceLevel: z.enum(["X0", "G1", "G2", "G3", "B4", "B5", "R6", "R7", "Q8", "Q9", "C10"]),
    githubInfo: githubInfoTypeSchema,
    icon: pageImageSchema.optional(),
    buttons: z.array(pageButtonSchema).optional(),
});
// ENDTODO

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
    dir: "content/docs",
    docs: {
        schema: frontmatterSchema.extend({
            // base props
            avatars: z.array(z.string()).optional(),
            time: z.date().optional(),
            tags: z.array(pageTagSchema).optional(),
            headerImage: pageImageSchema.optional(),
            type: z.enum(["base", "image", "video", "audio", "code", "subHero", "none"]).default("base"),

            // docs type props
            image: imageTypeSchema.optional(),
            video: videoTypeSchema.optional(),
            audio: audioTypeSchema.optional(),
            code: codeTypeSchema.optional(),
            hero: heroTypeSchema.optional()
        }),
        postprocess: {
            includeProcessedMarkdown: true,
            valueToExport: ["readingTime"],
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
