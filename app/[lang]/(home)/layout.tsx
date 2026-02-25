import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, navLinks } from '@/lib/layout.shared';
import type { LinkItemType } from '@/components/layout/link-item';
import { NavDonateButton } from '@/components/layout/nav-donate-button';

export default async function Layout({ params, children }: {
    params: Promise<{ lang: string }>;
    children: ReactNode;
}) {
    const { lang } = await params;
    const options = baseOptions(lang);

    const localeNavLinks = lang === "en" ? navLinks.en : navLinks.cn;

    // Create DonateDialog item based on language
    const donateItem: LinkItemType = {
        type: 'custom',
        children: <NavDonateButton lang={lang} />,
        secondary: true,
    };

    // Merge the social media links and top bar links from layout.shared.tsx
    const combinedLinks: LinkItemType[] = [...(options.links ?? []), ...localeNavLinks, donateItem];

    return <HomeLayout links={combinedLinks} {...options}>{children}</HomeLayout>;
}
