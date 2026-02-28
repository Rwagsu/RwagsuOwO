'use client';

import { DocsDescription, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import AvatarsView from '@/components/layout/avatars-view';
import LastUpdate from '@/components/layout/last-update';
import { ReadingTime } from '@/components/layout/reading-time';
import { Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@iconify/react';

// Header components with different image options
export interface HeaderWithImageProps {
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
    tags?: {
        text: string,
        icon?: string,
        variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive"
    }[]
    imageInfo?: {
        alt: string;
        src: string;
    };
}

export function HeaderWithImage({ 
    title, 
    description, 
    avatars, 
    time, 
    readingTime, 
    lang, 
    url, 
    tags, 
    gitConfig, 
    imageInfo 
}: HeaderWithImageProps) {
    return (
        <>
            {imageInfo && (
                <div className="relative w-full h-82 overflow-hidden rounded-lg mb-6">
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
                        githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${lang}/${url.replace('/docs/', '')}`}
                    />
                </Flex>
            </Flex>
        </>
    );
}