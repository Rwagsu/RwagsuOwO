import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import * as Fa6Icon from "react-icons/fa6";
import * as TbIcon from "react-icons/tb";
import * as SiIcon from "react-icons/si";
import {i18n} from "@/lib/i18n";

export function baseOptions(locale : string) : BaseLayoutProps {
  return {
    // i18n Support
    i18n,

    // Navbar Options
    nav: {
      title: 'RwagsuOwO',
    },

    // GitHub Link
    githubUrl: 'https://github.com/Rwagsu',

    // Social Links
    links: [
        {
            type: 'icon',
            label: 'Bilibili',
            icon: <Fa6Icon.FaBilibili/>,
            text: 'Bilibili',
            url: 'https://space.bilibili.com/2123349162',
        },
        {
            type: 'icon',
            label: 'BandLab',
            icon: <SiIcon.SiBandlab/>,
            text: 'BandLab',
            url: 'https://www.bandlab.com/rwagsu',
        },
        {
            type: 'icon',
            label: 'Afdian',
            icon: <TbIcon.TbHeartDollar />,
            text: 'Afdian',
            url: 'https://afdian.com/a/Rwagsu',
        },
    ]
  };
}

export const githubInfo = {
    owner: 'Rwagsu',
    repo: 'RwagsuOwO',
    branch: 'Fumadocs',
}

// Top Navigation Bar Links
export const navLinks : LinkItemType[] = [
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
    {
        text: 'Notebook',
        url: '/docs/notebook/',
    },
    {
        text: 'Blog',
        url: '/docs/blog',
    },
    {
        text: 'About',
        url: '/docs/about',
    },
];

export const avatars = [
    {
        id: 'rwagsu',
        name: 'Rwagsu',
        description: 'A developer and designer',
        iconLink: 'https://github.com/Rwagsu.png',
        link: 'https://github.com/Rwagsu'
    },
    {
        id: 'drownedowo',
        name: 'DrownedOwO',
        description: 'WTF',
        iconLink: 'https://github.com/DrownedOwO.png',
        link: 'https://github.com/DrownedOwO'
    }
];