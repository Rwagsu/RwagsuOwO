// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ['shadcn-docs-nuxt'],
    content: {
        highlight: {
            langs: ['csharp', 'xml', 'kotlin', 'groovy', 'kts', 'java', 'log', 'rust', 'properties', 'toml'],
        },
    },
    app: {
        baseURL: '/RwagsuOwO/',
    },
    fonts: {
        providers: {
            google: false,
            googleicons: false,
            adobe: false,
            bunny: false
        }
    },
    i18n: {
        defaultLocale: 'zh',

        locales: [
            {
                code: 'zh',
                name: '中文 (简体)',
                language: 'zh-CN',
            },
            {
                code: 'en',
                name: 'English',
                language: 'en-US',
            }
        ],
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: true, // 保持为 true，让其他错误仍然能中断构建
            ignore: [
                // 使用正则表达式忽略所有内容查询 API 的 JSON 文件
                /\/api\/_content\/query\/.*\.json/
            ]
        }
    },
    compatibilityDate: '2025-08-30',
});
