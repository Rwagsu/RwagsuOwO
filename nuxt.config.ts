// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    name: 'msvalidate.01',
                    content: '9ED23BB0F6CCE0333714D525D8170E02',
                },
            ],
        },
    },

    devtools: { enabled: true },
    extends: ['shadcn-docs-nuxt'],

    content: {
        highlight: {
            langs: ['csharp', 'xml', 'kotlin', 'groovy', 'kts', 'java', 'log', 'rust', 'properties', 'toml'],
        },
    },

    fonts: {
        providers: {
            google: false,
            googleicons: false,
        },
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
            // Pre-render the homepage
            routes: ['/'],
            // Then crawl all the links on the page
            crawlLinks: true
        }
    },

    compatibilityDate: '2025-11-19',
});