import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { LinkItemType } from '@/components/layout/link-item';
import * as Fa6Icon from "react-icons/fa6";
import * as SiIcon from "react-icons/si";
import { i18n } from "@/lib/i18n";

export interface LocaleNavLinks {
    cn: LinkItemType[];
    en: LinkItemType[];
}

export function baseOptions(locale: string): BaseLayoutProps {
    return {
        // i18n Support
        i18n,

        // Navbar Options
        nav: {
            title: 'RwagsuOwO',
        },

        // GitHub Link
        githubUrl: 'https://github.com/Rwagsu',
    };
}

// GitHub Info
export const githubInfo = {
    owner: 'Rwagsu',
    repo: 'RwagsuOwO',
    branch: 'Fumadocs',
}

// Social Links
export const socialLinks: LinkItemType[] = [
    {
        type: 'icon',
        label: 'Bilibili',
        icon: <Fa6Icon.FaBilibili />,
        text: 'Bilibili',
        url: 'https://space.bilibili.com/2123349162',
    },
    {
        type: 'icon',
        label: 'BandLab',
        icon: <SiIcon.SiBandlab />,
        text: 'BandLab',
        url: 'https://www.bandlab.com/rwagsu',
    }
]

// Top Navigation Bar Links
export const navLinks: LocaleNavLinks = {
    cn: [
        // Docs
        {
            type: 'menu',
            text: '文档',
            items: [
                {
                    text: '什么也没有.',
                    description: '还未计划开发 Docs.',
                    url: '/docs/docs',
                },
            ],
        },

        // Works
        {
            type: 'menu',
            text: 'Rwagsu 的作品',
            items: [
                {
                    text: '视频',
                    description: '很多视频作品都会在此发布.',
                    url: '/docs/works/videos',
                },
                {
                    text: '图像',
                    description: '绘画作品与渲染图片 😋',
                    url: '/docs/works/images',
                },
                {
                    text: '音频',
                    description: '音乐, 但大部分是实验. ψ(｀∇´)ψ',
                    url: '/docs/works/audios',
                },
                {
                    text: '代码',
                    description: '尽管优先级降低, 但仍在坚持创作 ;) (比如这个网站 (ﾉД`))',
                    url: '/docs/works/code',
                },
            ],
        },

        // Notebook
        {
            text: 'Notebook',
            url: '/docs/notebook/',
        },

        // Blog
        {
            text: 'Blog',
            url: '/docs/blog',
        },

        // About
        {
            text: '关于',
            url: '/docs/about',
        },
    ],
    en: [
        // Docs
        {
            type: 'menu',
            text: 'Docs',
            items: [
                {
                    text: 'Nothing here.',
                    description: 'No plans to develop Docs yet.',
                    url: '/docs/docs',
                },
            ],
        },

        // Works
        {
            type: 'menu',
            text: "Rwagsu's Works",
            items: [
                {
                    text: 'Videos',
                    description: 'Many video works will be published here.',
                    url: '/docs/works/videos',
                },
                {
                    text: 'Images',
                    description: 'Artworks and rendered images 😋',
                    url: '/docs/works/images',
                },
                {
                    text: 'Audios',
                    description: 'Music, but mostly experimental. ψ(｀∇´)ψ',
                    url: '/docs/works/audios',
                },
                {
                    text: 'Code',
                    description: 'Still creating, though with lower priority ;) (like this website (ﾉД`))',
                    url: '/docs/works/code',
                },
            ],
        },

        // Notebook
        {
            text: 'Notebook',
            url: '/docs/notebook/',
        },

        // Blog
        {
            text: 'Blog',
            url: '/docs/blog',
        },

        // About
        {
            text: 'About',
            url: '/docs/about',
        },
    ],
};

// Avatars
export const avatars = [
    {
        id: 'rwagsu',
        name: 'Rwagsu',
        description: '啥都干的全能 Furry 控()',
        iconLink: 'https://github.com/Rwagsu.png',
        link: 'https://github.com/Rwagsu'
    },
    {
        id: 'drownedowo',
        name: 'DrownedOwO',
        description: '被绑架来的 QAQ',
        iconLink: 'https://github.com/DrownedOwO.png',
        link: 'https://github.com/DrownedOwO'
    }
];