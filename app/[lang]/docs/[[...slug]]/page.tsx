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

export default async function Page({ params }: {
    params: Promise<{ lang: string; slug?: string[] }>;
}) {
    const { slug, lang } = await params;
    const page = source.getPage(slug, lang);
    if (!page) { notFound(); }

    const MDX = page.data.body;

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
            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
            <div className="flex flex-row gap-2 items-center border-b pb-6">
                <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
                <ViewOptions
                    markdownUrl={`${page.url}.mdx`}
                    // update it to match your repo
                    githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs/content/docs/${page.path}`}
                />
            </div>
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