import { getPageImage, source } from '@/lib/source';
import { githubInfo } from '@/lib/layout.shared';
import { DocsBody, DocsDescription, DocsPage, DocsTitle, PageLastUpdate } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { getGithubLastEdit } from 'fumadocs-core/content/github';
import { Comments } from '@/lib/giscus';
import { useTheme } from 'next-themes';
import { PageFooter } from '@/components/layout/docs/page/client';
import { HeaderWithImage } from '@/components/layout/header-with-image';

export default async function Page({ params }: {
    params: Promise<{ lang: string; slug?: string[] }>;
}) {
    const { slug, lang } = await params;
    const page = source.getPage(slug, lang);
    if (!page) { notFound(); }

    const MDX = page.data.body;

    const readingTime = (page.data as any)._exports?.readingTime;

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

    var currentPageComponent : React.ReactNode | null = null;

    switch (page.data.type) {
        case 'base':
            currentPageComponent = (
            <HeaderWithImage
                title={page.data.title}
                description={page.data.description}
                avatars={page.data.avatars}
                time={page.data.time}
                readingTime={readingTime}
                lang={lang}
                url={page.url}
                gitConfig={gitConfig}
                imageInfo={page.data.headerImage}
            />
        );
        break;
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
            {currentPageComponent}


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