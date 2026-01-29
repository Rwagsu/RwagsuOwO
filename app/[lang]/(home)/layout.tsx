import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { LinkItemType } from 'fumadocs-ui/layouts/shared';

// Top Navigation Bar Links
const navLinks: LinkItemType[] = [
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
]

export default async function Layout({ params, children }: {
    params: Promise<{ lang: string }>;
    children: ReactNode;
}) {
    const { lang } = await params;
    const options = baseOptions(lang);

    // Merge the social media links and top bar links from layout.shared.tsx
    const combinedLinks: LinkItemType[] = [...navLinks, ...(options.links ?? [])];

    return <HomeLayout {...options} links={combinedLinks}>{children}</HomeLayout>;
}