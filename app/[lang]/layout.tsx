import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n, zhTranslations, enTranslations } from '@/lib/i18n';
import '../global.css';
import { Inter } from 'next/font/google';

const { provider } = defineI18nUI(i18n, {
    translations: {
        en: enTranslations,
        cn: zhTranslations,
    },
});

const inter = Inter({
    subsets: ['latin'],
});

export default async function RootLayout({ params, children }: {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
}) {
    const lang = (await params).lang;

    return (
        <html lang={lang} className={inter.className} suppressHydrationWarning>
        <body className="flex flex-col min-h-screen">
        <RootProvider i18n={provider(lang)}>
            {children}
        </RootProvider>
        </body>
        </html>
    );
}
