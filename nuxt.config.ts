// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    extends: ['shadcn-docs-nuxt'],

    app: {
        head: {
            htmlAttrs: {
                lang: 'zh-CN',
            },
            meta: [
                {
                    name: 'msvalidate.01',
                    content: '9ED23BB0F6CCE0333714D525D8170E02',
                },
            ],
        },
    },

    site: {
        url: 'https://rwagsu.top',
        name: 'RwagsuOwO',
    },

    sitemap: {
        xsl: false,
        defaults: {
            priority: 0.5,
            changefreq: 'weekly',
        }
    },


    content: {
        highlight: {
            langs: ['csharp', 'xml', 'kotlin', 'groovy', 'kts', 'java', 'log', 'rust', 'properties', 'toml', 'bat'],
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
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'zh',
                name: '中文 (简体)',
                language: 'zh-CN',
            },
            /*{
                code: 'en',
                name: 'English',
                language: 'en-US',
            }*/
        ],
    },

    nitro: {
        prerender: {
            // Pre-render the homepage
            routes: ['/'],

            // Then crawl all the links on the page
            crawlLinks: true,
            failOnError: false,

            ignore: [
                '/**/sitemap.xml',
                '/**/sitemap.xml.gz',
                '/__sitemap__/**'
            ]
        }
    },

    compatibilityDate: '2025-11-19',

    modules: [
        '@nuxtjs/sitemap'
    ],
});