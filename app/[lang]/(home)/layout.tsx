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

    const localeNavLinks = lang === "en" ? navLinks.en : navLinks.cn;

    // Merge the social media links and top bar links from layout.shared.tsx
    const combinedLinks: LinkItemType[] = [...(options.links ?? []), ...localeNavLinks];

    return <HomeLayout links={combinedLinks} {...options}>{children}</HomeLayout>;
}