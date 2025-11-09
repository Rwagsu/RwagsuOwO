export default defineAppConfig({
    shadcnDocs: {
        // Site info
        site: {
            name: 'RwagsuOwO',
            description: "Rwagsu's Docs & Blogs!",
            url: 'https://rwagsu.top/',
            // ogImage (TODO)

            // umami
            umami: {
                enable: true,
                src: 'https://cloud.umami.is/script.js',
                dataWebsiteId: '34b26321-29bf-4ba0-8ac9-6ce91c24b7b6',
            },
        },

        // Theme settings
        theme: {
            customizable: true,
        },

        // Banner (TODO)
        banner: {
            enable: false,
            showClose: true,
            content: '这里暂时没有活动 OwO (手动修改网页调出来吗? 好厉害 awa)',
            to: 'https://github.com/Rwagsu',
            target: '_blank',
            border: true,
        },

        // Header
        header: {
            // Title
            title: 'RwagsuOwO',
            showTitle: true,

            // Theme
            darkModeToggle: true,

            // Language
            languageSwitcher: {
                enable: true,
                triggerType: 'icon',
                dropdownType: 'select',
            },

            // Logo
            logo: {
                light: '/logo.svg',
                dark: '/logo-dark.svg',
            },

            // Nav bar
            nav: [
                // Docs
                {
                    title: 'Docs',
                    links: [
                        {
                            title: 'Blender',
                            to: '/docs/blender',
                            description: 'Better Blender ☆ﾐ(o*･ω･)ﾉ',
                            icon: 'cib:blender',
                        },
                        {
                            title: 'Uno Platform (WinUI 3)',
                            to: '/docs/uno_platform',
                            description: 'A combination of Uno Platform and WinUI 3.',
                            icon: 'file-icons:winui',
                        }
                    ],
                },

                // Notebook
                {
                    title: 'Notebook',
                    to: '/notebook',
                    target: '_self',
                    showLinkIcon: false,
                },

                // Blogs
                {
                    title: 'Blog',
                    to: '/blog',
                    target: '_self',
                    showLinkIcon: false,
                },

                // Works
                {
                    title: "Rwagsu's works",
                    links: [
                        {
                            title: 'Codes',
                            to: '/works/codes',
                            description: 'Codes(C#, Kotlin or other) and Games.',
                            icon: 'flowbite:code-solid',
                        },
                        {
                            title: 'Videos',
                            to: '/works/videos',
                            description: 'Videos on Bilibili.',
                            icon: 'material-symbols:video-library-outline-rounded',
                        },
                        {
                            title: 'Images',
                            to: '/works/images',
                            description: 'Paintings or 3D rendered images.',
                            icon: 'ri:paint-fill',
                        },
                        {
                            title: 'Audios',
                            to: '/works/audios',
                            description: 'Music and Audio.',
                            icon: 'material-symbols:library-music-outline-rounded',
                        },
                        {
                            title: 'Others',
                            to: '/works/others',
                            description: 'Regarding ADOFAI or other works.',
                            icon: 'carbon:workspace',
                        }
                    ],
                },

                // About
                {
                    title: 'About',
                    to: '/about',
                    target: '_self',
                    showLinkIcon: false,
                },
            ],

            // Links
            links: [
                // GitHub
                {
                    icon: 'lucide:github',
                    to: 'https://github.com/Rwagsu',
                    target: '_blank',
                },

                // Bilibili
                {
                    icon: 'ri:bilibili-fill',
                    to: 'https://space.bilibili.com/2123349162',
                    target: '_blank',
                },
                
                // BandLab
                {
                    icon: 'simple-icons:bandlab',
                    to: 'https://www.bandlab.com/rwagsu',
                    target: '_blank',
                },
            ],
        },

        // Aside
        aside: {
            useLevel: true,
            collapse: false,
        },

        // Main
        main: {
            breadCrumb: true,
            showTitle: true,
            codeCopyToast: true,
            codeCopyToastText: 'Code copied to clipboard!',

            // Edit link
            editLink: {
                enable: true,
                pattern: 'https://github.com/Rwagsu/RwagsuOwO/tree/shadcn-docs/content/:path',
                text: 'Edit this page on GitHub',
                icon: 'lucide:square-pen',
                placement: ['docsFooter', 'toc'],
            },
        },

        // Footer
        footer: {
            credits: 'FOOTER_CREDIT',
            links: [
                // GitHub
                {
                    icon: 'lucide:github',
                    to: 'https://github.com/Rwagsu',
                    target: '_blank',
                },

                // Bilibili
                {
                    icon: 'ri:bilibili-fill',
                    to: 'https://space.bilibili.com/2123349162',
                    target: '_blank',
                },

                // Afdian
                {
                    icon: 'simple-icons:afdian',
                    to: 'https://afdian.com/a/Rwagsu',
                    target: '_blank',
                },

                // BandLab
                {
                    icon: 'simple-icons:bandlab',
                    to: 'https://www.bandlab.com/rwagsu',
                    target: '_blank',
                },

                // Netease Cloud Music
                {
                    icon: 'ri:netease-cloud-music-line',
                    to: 'https://y.music.163.com/m/user?id=4947833811',
                    target: '_blank',
                },
            ],
        },

        // Toc
        toc: {
            enable: true,
            title: 'On this page',

            links: [
                {
                    title: 'Create Issue',
                    icon: 'lucide:circle-dot',
                    to: 'https://github.com/Rwagsu/RwagsuOwO/issues',
                    target: '_blank',
                },
                {
                    title: "BadBC's GitHub",
                    icon: 'tabler:cube',
                    to: 'https://github.com/BadBC-Studio',
                    target: '_blank',
                },
            ],

            iconLinks: [
                // Rwagsu GitHub
                {
                    icon: 'lucide:github',
                    to: 'https://github.com/Rwagsu',
                    target: '_blank',
                },

                // Rwagsu Bilibili
                {
                    icon: 'ri:bilibili-fill',
                    to: 'https://space.bilibili.com/2123349162',
                    target: '_blank',
                },

                // Afdian
                {
                    icon: 'simple-icons:afdian',
                    to: 'https://afdian.com/a/Rwagsu',
                    target: '_blank',
                },

                // Netease Cloud Music
                {
                    icon: 'ri:netease-cloud-music-line',
                    to: 'https://y.music.163.com/m/user?id=4947833811',
                    target: '_blank',
                },
            ]
        },

        // Search
        search: {
            enable: true,
            inAside: false,
        }
    }
});