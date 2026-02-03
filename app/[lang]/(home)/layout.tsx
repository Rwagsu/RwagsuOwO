import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, navLinks } from '@/lib/layout.shared';
import { LinkItemType } from 'fumadocs-ui/layouts/shared';

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