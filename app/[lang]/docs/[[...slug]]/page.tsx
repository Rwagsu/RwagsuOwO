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
import AvatarsView from '@/components/layout/avatars-view';
import LastUpdate from '@/components/layout/last-update';
import { ReadingTime } from '@/components/layout/reading-time';
import { Flex } from '@radix-ui/themes';
import Image from 'next/image';

// Header components with different image options
interface HeaderProps {
    title: string;
    description?: string;
    avatars?: string[];
    time?: any;
    readingTime?: any;
    lang: string;
    url: string;
    gitConfig: {
        user: string;
        repo: string;
        branch: string;
    };
    imageInfo?: {
        alt: string;
        src: string;
    };
}

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

            <HeaderWithImage
                title={page.data.title}
                description={page.data.description}
                avatars={page.data.avatars}
                time={page.data.time}
                readingTime={readingTime}
                lang={lang}
                url={page.url}
                gitConfig={gitConfig}
                imageInfo={page.data.image}
            />


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

async function HeaderWithImage({ title, description, avatars, time, readingTime, lang, url, gitConfig, imageInfo }: HeaderProps) {
    return (
        <>
            {imageInfo && (
                <div className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
                    <Image
                        alt={imageInfo.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        src={imageInfo.src}
                        className="rounded-lg"
                    />
                </div>
            )}
            <DocsTitle>{title}</DocsTitle>
            <DocsDescription className="mb-0">{description}</DocsDescription>

            {/* Avatars */}
            {avatars && <AvatarsView avatarIds={avatars} className="mb-2 pl-3" />}

            {/* Page Infos and Actions - Responsive layout */}
            <Flex direction={{ initial: 'column', md: 'row' }} justify={{ initial: 'start', md: 'between' }} gap={{ initial: '3', md: '4' }} align={{ initial: 'start', md: 'center' }} width="100%" className="border-b pb-4 pt-2">
                {/* Page Infos - Left side on desktop, top on mobile */}
                <Flex direction="row" gap="8" align="center" className="pb-0 pl-1">
                    {time && <LastUpdate time={time} lang={lang} />}
                    {readingTime && <ReadingTime stats={readingTime} lang={lang} />}
                </Flex>

                {/* Page Actions - Right side on desktop, left on mobile */}
                <Flex direction="row" gap="2" align="center" width={{ initial: '100%', md: 'auto' }}>
                    <LLMCopyButton markdownUrl={`${url}.mdx`} />
                    <ViewOptions
                        markdownUrl={`${url}.mdx`}
                        // update it to match your repo
                        githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs/content/docs/${url.replace('/docs/', '')}`}
                    />
                </Flex>
            </Flex>
        </>
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