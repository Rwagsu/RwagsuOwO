"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import MaintenanceLevelComponent, { MaintenanceLevelType } from "@/components/ui/extension/maintenance-level"
import { Flex } from "@radix-ui/themes";
import { DocsDescription, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import AvatarsView from "../avatars-view";
import { Button } from "@/components/ui/button";
import { Link } from "fumadocs-core/framework";
import Image from 'next/image';
import { Star, GitFork, Archive, FileText, Tag, ChevronRight, Code, ToolCase } from "lucide-react";
import { Icon } from '@iconify/react';
import LastUpdate from "../last-update";
import { ReadingTime } from "../reading-time";
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Octokit } from "@octokit/rest";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LanguageBar from "@/components/ui/extension/language-bar";
import { toast } from "sonner";
import { ExpandTranslation } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

interface RepositoryInfo {
    forks: number;
    stars: number;
    languages: { [key: string]: number };
    lastRelease: {
        name: string | null;
        publishedAt: string | null;
        tagName: string;
    } | null;
    releasesCount: number;
    lastUpdate: string;
    license: {
        name: string | null;
        url: string | null;
    } | null;
}

interface ButtonInfo {
    text: string,
    href: string,
    icon?: string
    variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive",
}

export default function CodePage({ title, description, tags, avatars, time, readingTime, lang, url, repositoryConfig, gitConfig, imageInfo, iconInfo, buttons, maintenanceLevel }: {
    title: string,
    description?: string,
    tags?: {
        text: string,
        icon?: string,
        variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive"
    }[]
    avatars?: string[],
    time?: any,
    readingTime?: any,
    lang: string,
    url: string,
    gitConfig: {
        user: string,
        repo: string,
        branch: string,
    },
    repositoryConfig?: {
        user: string,
        repo: string,
        branch: string,
    },
    imageInfo?: {
        alt: string;
        src: string;
    },
    iconInfo?: {
        alt: string;
        src: string;
    },
    buttons?: ButtonInfo[],
    maintenanceLevel?: MaintenanceLevelType
}) {
    // translations
    const translations = lang === "en" ? ExpandTranslation.en.CodePage : ExpandTranslation.cn.CodePage;

    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!repositoryConfig) {
            setLoading(false);
            return;
        }

        async function fetchRepositoryInfo() {
            try {
                const info = await getGitHubInfo(repositoryConfig);
                setRepositoryInfo(info);
            } catch (error) {
                console.error(translations.fetchErrorTip, error);
                toast.error(translations.fetchErrorTip + error);
            } finally {
                setLoading(false);
            }
        }

        fetchRepositoryInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repositoryConfig]);

    return (
        <Flex
            direction="column"
            align="center" className="mt-26 mb-12 w-full">
            <BlurFade className="flex flex-col items-center gap-4 w-full">
                {/* Loading title */}
                {repositoryConfig && loading && (
                    <Badge variant="secondary">
                        <Spinner data-icon="inline-end" />
                        {translations.loadingTitle}
                    </Badge>
                )}

                {/* Icon */}
                {iconInfo && <Image alt={iconInfo.alt} src={iconInfo.src} width={160} height={160} />}

                {/* Release */}
                {repositoryConfig && repositoryInfo?.lastRelease && repositoryInfo.lastRelease.publishedAt && !loading && (
                    <Button variant="secondary" asChild>
                        <Link 
                            rel="noreferrer noopener"
                            target="_blank" 
                            href={`https://github.com/${repositoryConfig.user}/${repositoryConfig.repo}/releases`}
                        >
                            <Tag style={{ color: 'var(--color-fd-primary)' }}/>
                            <Badge>
                                {new Date(repositoryInfo.lastRelease.publishedAt).toLocaleDateString()}
                            </Badge>
                            {repositoryInfo.lastRelease.name + " "}
                            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                )}

                {/* Title */}
                <DocsTitle>
                    <p className="font-bold text-center mt-0 mb-0">
                        {title}
                    </p>
                </DocsTitle>

                {/* Description */}
                <DocsDescription className="text-center mt-0 mb-0">{description}</DocsDescription>

                {/* Tags */}
                {tags && (
                    <Flex gap="4" className="mb-4">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant={tag.variant}>
                                <Flex align="center" gap="2">
                                    {tag.icon && <Icon icon={tag.icon} />}
                                    {tag.text}
                                </Flex>
                            </Badge>
                        ))}
                    </Flex>
                )} 
                

                {/* Avatars */}
                {avatars && <AvatarsView avatarIds={avatars} className="mb-2 pl-3" />}

                {/* GitHub info */}
                {repositoryConfig && repositoryInfo && !loading && (
                    <Flex gap="6" wrap="wrap">
                        {/* Stars */}
                        <Flex align="center" gap="1">
                            <Star className="w-4 h-4" />
                            <span>{repositoryInfo.stars?.toLocaleString()}</span>
                            <span className="text-muted-foreground">Stars</span>
                        </Flex>

                        {/* Forks */}
                        <Flex align="center" gap="1">
                            <GitFork className="w-4 h-4" />
                            <span>{repositoryInfo.forks?.toLocaleString()}</span>
                            <span className="text-muted-foreground">Forks</span>
                        </Flex>

                        {/* Releases */}
                        <Flex align="center" gap="1">
                            <Archive className="w-4 h-4" />
                            <span>{repositoryInfo.releasesCount}</span>
                            <span className="text-muted-foreground">Releases</span>
                        </Flex>
                    </Flex>
                )}

                {/* License */}
                {repositoryInfo?.license && repositoryInfo?.license.name && repositoryInfo?.license.url && (
                    <Button variant="secondary" asChild>
                        <Link href={repositoryInfo.license.url} target="_blank" rel="noopener noreferrer">
                            <FileText />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-fd-success)'}}/>
                            {repositoryInfo.license.name}
                        </Link>
                    </Button>
                )}

                {/* Buttons */}
                <Flex className="mb-6 flex-col sm:flex-row" gap="4">
                    {/* Link Button */}
                    {buttons && buttons.map((button, index) => {
                        return (
                            <Button size="lg" key={index} variant={button.variant} asChild>
                                <Link className="no-underline hover:no-underline" href={button.href}>
                                    {button.icon && <Icon icon={button.icon as any} className="mr-1" />}{button.text}
                                </Link>
                            </Button>
                        );
                    })}
                </Flex>

                {/* Header image */}
                {imageInfo && (
                    <div className="relative w-full mt-2 h-100 overflow-hidden rounded-lg mb-6">
                        <Image
                            alt={imageInfo.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            src={imageInfo.src}
                            className="rounded-lg"
                        />
                    </div>
                )}

                {((repositoryConfig && repositoryInfo?.languages) || maintenanceLevel) && (
                    <Card className="w-full max-w-4xl">
                        {/* Languages */}
                        {repositoryConfig && repositoryInfo?.languages && !loading && (
                            <>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                            <Code />
                                            {translations.languageCardTitle}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <LanguageBar languages={repositoryInfo.languages} />
                                </CardContent>
                            </>
                        
                        )}

                        {/* Maintenance level */}
                        {maintenanceLevel && (
                            <>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <ToolCase />
                                        {translations.maintenanceLevelCardTitle}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <MaintenanceLevelComponent lang={lang} level={maintenanceLevel}/>
                                </CardContent>
                            </>
                        )}
                    </Card>
                )}

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
            </BlurFade>
        </Flex>
    );
}

async function getGitHubInfo(repositoryConfig?: { user: string; repo: string; branch: string }): Promise<RepositoryInfo | null> {
    if (!repositoryConfig) {
        console.error("Git config is required to fetch repository info");
        return null;
    }

    const octokit = new Octokit();

    try {
        // 获取仓库基本信息（Stars, Forks, 最后更新时间等）
        const repoResponse = await octokit.rest.repos.get({
            owner: repositoryConfig.user,
            repo: repositoryConfig.repo,
        });

        // 获取编程语言信息
        const languagesResponse = await octokit.rest.repos.listLanguages({
            owner: repositoryConfig.user,
            repo: repositoryConfig.repo,
        });

        // 获取发布信息
        const releasesResponse = await octokit.rest.repos.listReleases({
            owner: repositoryConfig.user,
            repo: repositoryConfig.repo,
        });

        // 获取许可证信息
        let licenseInfo = null;
        try {
            const licenseResponse = await octokit.rest.licenses.getForRepo({
                owner: repositoryConfig.user,
                repo: repositoryConfig.repo,
            });

            if (licenseResponse.data && licenseResponse.data.license) {
                licenseInfo = {
                    name: licenseResponse.data.license.name || licenseResponse.data.license.spdx_id || null,
                    url: licenseResponse.data.html_url || null,
                };
            }
        } catch (error) {
            // 如果仓库没有许可证，则忽略错误
            console.log("Repository has no license file");
        }

        // 处理发布信息
        const latestRelease = releasesResponse.data[0]; // 第一个是最新发布的
        const releasesCount = releasesResponse.data.length;

        return {
            forks: repoResponse.data.forks_count,
            stars: repoResponse.data.stargazers_count,
            languages: languagesResponse.data,
            lastRelease: latestRelease ? {
                name: latestRelease.name,
                publishedAt: latestRelease.published_at,
                tagName: latestRelease.tag_name,
            } : null,
            releasesCount: releasesCount,
            lastUpdate: repoResponse.data.updated_at,
            license: licenseInfo,
        };
    } catch (error) {
        console.error("Error fetching GitHub info:", error);
        throw error;
    }
}

/**
 * 根据许可证类型返回颜色
 * 许可证越宽松越绿，越严格越红
 */
function getLicenseColor(licenseName: string | null): string {
    if (!licenseName) return 'var(--color-fd-muted-foreground)';
    
    const name = licenseName.toLowerCase();
    
    // Green - Permissive License (allows commercial use, modification, privatization)
    if (name.includes('mit') || 
        name.includes('unlicense') || 
        name.includes('cc0') || 
        name.includes('wtfpl') ||
        name.includes('0bsd')) {
        return 'var(--color-fd-success)';
    }
    
    // Blue - Medium Restriction (requires retaining copyright, patent licenses, etc.)
    if (name.includes('apache') || 
        name.includes('bsd') || 
        name.includes('isc') ||
        name.includes('mpl')) {
        return 'var(--color-fd-info)';
    }
    
    // Yellow - Stronger restrictions (requires open-source modifications, transmissibility, etc.)
    if (name.includes('lgpl') || 
        name.includes('epl') || 
        name.includes('cddl') ||
        name.includes('cpl')) {
        return 'var(--color-fd-warning)';
    }
    
    // Red - Strict License (Highly Contagious, Restricted Commercial Use, etc.)
    if (name.includes('gpl') || 
        name.includes('agpl') || 
        name.includes('cc-by') ||
        name.includes('proprietary')) {
        return 'var(--color-fd-error)';
    }
    
    // Default - Unknown License
    return 'var(--color-fd-muted-foreground)';
}