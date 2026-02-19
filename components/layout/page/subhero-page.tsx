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

interface ButtonInfo {
    text: string,
    href: string,
    variant?: "outline" | "ghost" | "link" | "default" | "secondary" | "destructive",
    icon?: string
}

export default function SubHeroPage({ title, description, buttons, lang, avatars, time, imageInfo, iconInfo, readingTime, gitConfig, url }: {
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

                {/* Avatars */}
                {avatars && <AvatarsView avatarIds={avatars} className="mb-2 pl-3" />}

                {/* Buttons */}
                {buttons && <Flex className="mt-8 flex-col sm:flex-row" gap="4">
                    {/* Link Button */}
                     {buttons.map((button, index) => {
                        return (
                            <Button size="lg" key={index} variant={button.variant} asChild>
                                <Link className="no-underline hover:no-underline" href={button.href}>
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
                <Flex direction={{ initial: "column", md: "row" }} justify={{ initial: "start", md: "between" }} gap={{ initial: "3", md: "4" }} align={{ initial: "start", md: "center" }} width="100%" className="border-b pb-4 pt-2">
                    {/* Page Infos - Left side on desktop, top on mobile */}
                    <Flex direction="row" gap="8" align="center" className="pb-0 pl-1">
                        {time && <LastUpdate time={time} lang={lang} />}
                        {readingTime && <ReadingTime stats={readingTime} lang={lang} />}
                    </Flex>
            
                    {/* Page Actions - Right side on desktop, left on mobile */}
                    <Flex direction="row" gap="2" align="center" width={{ initial: "100%", md: "auto" }}>
                        <LLMCopyButton markdownUrl={`${url}.mdx`} />
                        <ViewOptions
                            markdownUrl={`${url}.mdx`}
                            // update it to match your repo
                            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs/content/docs/${url.replace("/docs/", "")}`}
                        />
                    </Flex>
                </Flex>
            </BlurFade>
        </Flex>
    );
}
