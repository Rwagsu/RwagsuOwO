import { getPageImage, source } from '@/lib/source';
import { githubInfo } from '@/lib/layout.shared';
import { DocsBody, DocsPage, PageLastUpdate } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getGithubLastEdit } from 'fumadocs-core/content/github';
import { Comments } from '@/lib/giscus';
import { PageFooter } from '@/components/layout/docs/page/client';
import { HeaderWithImage } from '@/components/layout/page/header-with-image';
import { LightRays } from '@/components/ui/light-rays';
import SubHeroPage from '@/components/layout/page/subhero-page';
import CodePage from '@/components/layout/page/code-page';
import { ExpandTranslation, i18n } from '@/lib/i18n';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangleIcon } from 'lucide-react';

export default async function Page({ params }: {
    params: Promise<{ lang: string; slug?: string[] }>;
}) {
    const { slug, lang } = await params;
    const page = source.getPage(slug, lang);
    if (!page) { notFound(); }

    // Content
    const MDX = page.data.body;
    const readingTime = (page.data as any)._exports?.readingTime;

    const translations = lang === "en" ? ExpandTranslation.en : ExpandTranslation.cn;

    // GitHub repository configuration
    const gitConfig = {
        user: githubInfo.owner,
        repo: githubInfo.repo,
        branch: githubInfo.branch,
    };

    let lastModifiedTime: Date | null = null;

    // Last Update Info
    try {
        lastModifiedTime = await getGithubLastEdit({
            owner: gitConfig.user,
            repo: gitConfig.repo,
            sha: gitConfig.branch,
            path: `content/docs/${page.path}`,
        });
    } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
        lastModifiedTime = null;
    }

    let pageLang = lang;
    const pathParts = page.path?.split('/') ?? [];

    if (pathParts.some(item => item === "en")) {
        pageLang = "en";
    } else {
        pageLang = "cn";
    }

    // FallBack check
    const isFallback = lang !== pageLang;

    var currentPageComponent: React.ReactNode | null = null;

    switch (page.data.type) {
        case 'base':
            currentPageComponent = (
                <HeaderWithImage
                    title={page.data.title}
                    description={page.data.description}
                    avatars={page.data.avatars}
                    time={page.data.time}
                    tags={page.data.tags}
                    readingTime={readingTime}
                    lang={lang}
                    url={page.path}
                    gitConfig={gitConfig}
                    imageInfo={page.data.headerImage}
                />
            );
            break;
        case 'subHero':
            currentPageComponent = (
                <SubHeroPage
                    title={page.data.title}
                    description={page.data.description}
                    avatars={page.data.avatars}
                    time={page.data.time}
                    buttons={page.data.hero?.buttons}
                    readingTime={readingTime}
                    lang={lang}
                    tags={page.data.tags}
                    url={page.path}
                    gitConfig={gitConfig}
                    imageInfo={page.data.headerImage}
                    iconInfo={page.data.hero?.icon}
                />
            );
            break;
        case 'code':
            currentPageComponent = (
                <CodePage
                    title={page.data.title}
                    description={page.data.description}
                    tags={page.data.tags}
                    avatars={page.data.avatars}
                    time={page.data.time}
                    buttons={page.data.code?.buttons}
                    readingTime={readingTime}
                    lang={lang}
                    url={page.path}
                    gitConfig={gitConfig}
                    repositoryConfig={page.data.code?.githubInfo}
                    maintenanceLevel={page.data.code?.maintenanceLevel}
                    imageInfo={page.data.headerImage}
                    iconInfo={page.data.code?.icon}
                />
            );
    }

    return (
        <DocsPage toc={page.data.toc} full={page.data.full} footer={{
            enabled: true,
            component: (
                <>
                    {/* Default PageFooter */}
                    <PageFooter />
                    {/* Comments */}
                    <div className="border-t pt-6 mt-6">
                        <Comments lang={lang} />
                    </div>
                </>
            ),
        }}>
            {isFallback && (
                <Alert className="mx-auto max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
                    <AlertTriangleIcon />
                    <AlertTitle>{translations.NotTranslation.title}</AlertTitle>
                    <AlertDescription>
                        {translations.NotTranslation.description}
                    </AlertDescription>
                </Alert>
            )}
            
            {currentPageComponent}

            <LightRays />

            <DocsBody>
                <MDX
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
            {lastModifiedTime && <PageLastUpdate date={lastModifiedTime} />}
        </DocsPage>
    );
}


export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata({ params }: {
    params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
    const { slug, lang } = await params;
    const page = source.getPage(slug, lang);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImage(page).url,
        },
    };
}

export function DocsFooter({ lang }: { lang: string }) {
    return (
        <Comments lang={lang} />
    )
}