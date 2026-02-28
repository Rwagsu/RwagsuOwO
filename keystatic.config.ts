import { config, fields, collection } from '@keystatic/core';
import { githubInfo } from './lib/layout.shared';

// 通用 Schema 工厂函数（用于创建 CN 和 EN 配置）
function createSchema(isEn: boolean) {
    return {
        // ========== 文件名（最顶部）==========
        slug: fields.text({
            label: '文件名',
            description: '保存时的文件名 (不含扩展名)',
        }),

        // ========== Fumadocs 原生字段 ==========
        title: fields.text({ label: '标题' }),
        description: fields.text({
            label: '描述',
            validation: { length: { min: 0, max: 160 } },
        }),
        icon: fields.text({ label: '图标 (Lucide Icon)' }),

        // ========== 基础元数据 ==========
        avatars: fields.array(
            fields.text({ label: '贡献者 ID' }),
            {
                label: '贡献者 ID 列表',
                itemLabel: (item) => item.value,
            },
        ),
        time: fields.date({ label: '创建时间' }),
        tags: fields.array(
            fields.object({
                text: fields.text({ label: '显示文本' }),
                icon: fields.text({ label: '图标 (Iconify)' }),
                variant: fields.select({
                    label: '样式',
                    options: [
                        { label: 'Outline', value: 'outline' },
                        { label: 'Ghost', value: 'ghost' },
                        { label: 'Link', value: 'link' },
                        { label: 'Default', value: 'default' },
                        { label: 'Secondary', value: 'secondary' },
                        { label: 'Destructive', value: 'destructive' },
                    ],
                    defaultValue: 'default',
                }),
            }, { label: '标签' }),
            {
                label: '标签列表',
                itemLabel: (item) => item.fields.text.value,
            },
        ),

        // ========== 页面视觉 ==========
        headerImage: fields.object({
            alt: fields.text({ label: 'Alt 文本' }),
            src: fields.text({ label: '图标 URL' }),
        }, {
            label: 'Header 图片',
            description: '在 Header 显示图片',
        }),

        // ========== 页面类型 ==========
        type: fields.select({
            label: '页面类型',
            options: [
                { label: 'Base', value: 'base' },
                { label: '图片', value: 'image' },
                { label: '视频', value: 'video' },
                { label: '音频', value: 'audio' },
                { label: '代码', value: 'code' },
                { label: 'SubHero', value: 'subHero' },
                { label: '无', value: 'none' },
            ],
            defaultValue: 'base',
        }),

        // ========== Code 配置（始终显示）==========
        code: fields.object({
            maintenanceLevel: fields.select({
                label: '维护等级',
                options: [
                    { label: 'X0 - 不再更新 :(', value: 'X0' },
                    { label: 'G1 - 有可能更新 & 很小', value: 'G1' },
                    { label: 'G2 - 有可能更新 & 很小', value: 'G2' },
                    { label: 'G3 - 有可能更新 & 很小', value: 'G3' },
                    { label: 'B4 - 正常速度更新', value: 'B4' },
                    { label: 'B5 - 正常速度更新', value: 'B5' },
                    { label: 'R6 - 快速更新', value: 'R6' },
                    { label: 'R7 - 快速更新', value: 'R7' },
                    { label: 'Q8 - 非常快的更新', value: 'Q8' },
                    { label: 'Q9 - 非常快的更新', value: 'Q9' },
                    { label: 'C10 - 嗖！超快！(o゜▽゜) o☆', value: 'C10' },
                ],
                defaultValue: 'G1',
            }),
            githubInfo: fields.object({
                user: fields.text({ label: '所有者' }),
                repo: fields.text({ label: '存储库' }),
                branch: fields.text({ label: '分支' }),
            }, { label: 'GitHub 仓库信息' }),
            icon: fields.object({
                alt: fields.text({ label: 'Alt 文本' }),
                src: fields.text({ label: '图标 URL' }),
            }, {
                label: '图标 (Link)',
            }),
            buttons: fields.array(
                fields.object({
                    text: fields.text({ label: '文本' }),
                    href: fields.text({ label: '链接' }),
                    icon: fields.text({ label: '图标 (Iconify)' }),
                    variant: fields.select({
                        label: '样式',
                        options: [
                            { label: 'Outline', value: 'outline' },
                            { label: 'Ghost', value: 'ghost' },
                            { label: 'Link', value: 'link' },
                            { label: 'Default', value: 'default' },
                            { label: 'Secondary', value: 'secondary' },
                            { label: 'Destructive', value: 'destructive' },
                        ],
                        defaultValue: 'default',
                    }),
                }, { label: '按钮' }),
                {
                    label: '按钮列表',
                    itemLabel: (item) => item.fields.text.value,
                },
            ),
        }, {
            label: 'Code 配置',
            description: 'code ONLY.',
        }),

        // ========== 主页配置（始终显示）==========
        hero: fields.object({
            icon: fields.object({
                alt: fields.text({ label: 'Alt 文本' }),
                src: fields.text({ label: '图标 URL' }),
            }, {
                label: '图标 (Link)',
            }),
            buttons: fields.array(
                fields.object({
                    text: fields.text({ label: '文本' }),
                    href: fields.text({ label: '链接' }),
                    icon: fields.text({ label: '图标 (Iconify)' }),
                    variant: fields.select({
                        label: '样式',
                        options: [
                            { label: 'Outline', value: 'outline' },
                            { label: 'Ghost', value: 'ghost' },
                            { label: 'Link', value: 'link' },
                            { label: 'Default', value: 'default' },
                            { label: 'Secondary', value: 'secondary' },
                            { label: 'Destructive', value: 'destructive' },
                        ],
                        defaultValue: 'default',
                    }),
                }, { label: '按钮' }),
                {
                    label: '按钮列表',
                    itemLabel: (item) => item.fields.text.value,
                },
            ),
        }, {
            label: '主页配置',
            description: 'subHero ONLY.',
        }),

        // TODO: 当 image / video / audio 类型需要配置时，添加对应的 object 字段

        // ========== MDX 内容 ==========
        content: fields.mdx({
            label: '正文内容',
            description: '支持 Fumadocs 组件和自定义 MDX 组件',
        }),
    };
}

export default config({
    storage: {
        kind: 'github',
        repo: {
          owner: githubInfo.owner,
          name: githubInfo.repo
        }   
    },
    collections: {
        // ========== 中文内容 ==========
        docs_cn: collection({
            label: 'Docs (cn)',
            slugField: 'slug',
            path: 'content/docs/cn/docs/**',
            format: { contentField: 'content' },
            schema: createSchema(false),
        }),
        notebook_cn: collection({
            label: 'Notebook (cn)',
            slugField: 'slug',
            path: 'content/docs/cn/notebook/**',
            format: { contentField: 'content' },
            schema: createSchema(false),
        }),
        works_cn: collection({
            label: 'Rwagsu 的作品 (cn)',
            slugField: 'slug',
            path: 'content/docs/cn/works/**',
            format: { contentField: 'content' },
            schema: createSchema(false),
        }),
        blog_cn: collection({
            label: 'Blog (cn)',
            slugField: 'slug',
            path: 'content/docs/cn/blog/**',
            format: { contentField: 'content' },
            schema: createSchema(false),
        }),
        about_cn: collection({
            label: '关于 (cn)',
            slugField: 'slug',
            path: 'content/docs/cn/about/**',
            format: { contentField: 'content' },
            schema: createSchema(false),
        }),

        // ========== 英文内容 ==========
        docs_en: collection({
            label: 'Docs (en)',
            slugField: 'slug',
            path: 'content/docs/en/docs/**',
            format: { contentField: 'content' },
            schema: createSchema(true),
        }),
        notebook_en: collection({
            label: 'Notebook (en)',
            slugField: 'slug',
            path: 'content/docs/en/notebook/**',
            format: { contentField: 'content' },
            schema: createSchema(true),
        }),
        works_en: collection({
            label: "Rwags's Works (en)",
            slugField: 'slug',
            path: 'content/docs/en/works/**',
            format: { contentField: 'content' },
            schema: createSchema(true),
        }),
        blog_en: collection({
            label: 'Blog (en)',
            slugField: 'slug',
            path: 'content/docs/en/blog/**',
            format: { contentField: 'content' },
            schema: createSchema(true),
        }),
        about_en: collection({
            label: 'About (en)',
            slugField: 'slug',
            path: 'content/docs/en/about/**',
            format: { contentField: 'content' },
            schema: createSchema(true),
        }),
    },
});
