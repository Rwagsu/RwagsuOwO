import { BlurFade } from "@/components/ui/blur-fade";
import { Flex } from "@radix-ui/themes";
import { Link } from "fumadocs-core/framework";
import { DocsDescription, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import AvatarsView from "../avatars-view";
import LastUpdate from "../last-update";
import { ReadingTime } from "../reading-time";
import { Icon } from '@iconify/react';
import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import PageActions from "@/components/layout/page-actions";

interface ButtonInfo {
    text: string,
    href: string,
    variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive",
    icon?: string
}

export default function SubHeroPage({ title, description, buttons, lang, avatars, time, imageInfo, iconInfo, readingTime, gitConfig, tags, url }: {
    title: string,
    description: string | undefined,
    buttons: ButtonInfo[] | undefined,
    avatars?: string[];
    lang: string,
    time?: any,
    gitConfig: {
        user: string,
        repo: string,
        branch: string
    },
    tags?: {
        text: string,
        icon?: string,
        variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive"
    }[]
    imageInfo?: {
        alt: string;
        src: string;
    },
    iconInfo?: {
        alt: string;
        src: string;
    },
    readingTime?: any,
    url: string
}) {
    return (
        <Flex
            direction="column"
            align="center" className="mt-32 mb-12 w-full">
            <BlurFade className="flex flex-col items-center gap-4 w-full">
                {/* Icon */}
                {iconInfo && <Image src={iconInfo.src} alt={iconInfo.alt} width={160} height={160}/>}

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

                {/* Buttons */}
                {buttons && <Flex className="mt-8 flex-col sm:flex-row" gap="4">
                    {/* Link Button */}
                     {buttons.map((button, index) => {
                        return (
                            <Button size="lg" key={index} variant={button.variant} asChild>
                                <Link target={button.href.startsWith('http') ? "_blank" : "_self"} rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined} className="no-underline hover:no-underline" href={button.href}>
                                    {button.icon ? <Icon icon={button.icon as any} /> : null}{button.text}
                                </Link>
                            </Button>
                        );
                    })}
                </Flex>}

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

                {/* Page Infos and Actions - Responsive layout */}
                <PageActions time={time} readingTime={readingTime} url={url} lang={lang} gitConfig={gitConfig} />
            </BlurFade>
        </Flex>
    );
}
