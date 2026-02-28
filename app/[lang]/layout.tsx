import { RootProvider } from 'fumadocs-ui/provider/next';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n, zhTranslations, enTranslations, ExpandTranslation } from '@/lib/i18n';
import '../global.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner'
import { ThemeWrapper } from '@/components/theme-provider';
import { Banner } from '@/components/banner';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

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

    const translations = lang === "en" ? ExpandTranslation.en : ExpandTranslation.cn;

    return (
        <html lang={lang} className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <ThemeWrapper>
                    <RootProvider i18n={provider(lang)}>
                        {/* Banner */}
                        <Banner
                            variant="rainbow"
                            rainbowColors={[
                                '#0077FF',
                                'transparent',
                                '#FF0000'
                            ]}
                        >
                            {translations.BannerTitle}
                        </Banner>

                        {/* Toast */}
                        <Toaster richColors />
                        {children}
                    </RootProvider>
                </ThemeWrapper>

                {/* Vercel */}
                <Analytics />
                <SpeedInsights />

                {/* Umami */}
                <Script
                    src="https://cloud.umami.is/script.js"
                    strategy="afterInteractive"
                    data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
                />
            </body>
        </html>
    );
}
