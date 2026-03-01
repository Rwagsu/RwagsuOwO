'use client';

import { Flex, Grid } from "@radix-ui/themes";
import { DocsDescription, DocsTitle } from "fumadocs-ui/layouts/docs/page";
import { BlurFade } from "@/components/ui/blur-fade"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ExpandTranslation } from "@/lib/i18n";
import Masonry from 'react-masonry-css';
import Link from "fumadocs-core/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReactNode } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import LinkCard from "@/components/ui/extension/link-card";

interface FriendlyLink {
    title: string,
    description: string,
    cta: string,
    href: string,
    iconSrc?: string,
    iconFallback: NonNullable<ReactNode>
    iconFallbackColor?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky",
    tag: string,
    backgroundType: "solid" | "image",
    background: string,
    className: string;
}

interface FriendlyLinksTag {
    id: string,
    title: string,
    icon: ReactNode | undefined
}

const breakpointColumnsObj = {
    default: 3,   // Big: 3
    1024: 3,      // lg: 3
    768: 2,       // md: 2
    640: 1,       // sm: 1
    0: 1          // Default: 1
};

export default function FriendlyLinksPage({ title, description, links, tags, submitLink, lang, children }: {
    title: string,
    description: string,
    links: FriendlyLink[],
    tags: FriendlyLinksTag[],
    submitLink: string,
    lang: string,
    children?: React.ReactNode
}) {
    const translations = lang === "en" ? ExpandTranslation.en.FriendlyLinksPage : ExpandTranslation.cn.FriendlyLinksPage;
    const goodLink = "https://www.bilibili.com/video/BV1t5411G7KR/";

    return (
        <Flex
            direction="column"
            align="center" className="mt-32 mb-12 w-full">
            <BlurFade className="flex flex-col items-center gap-4 w-full">
                {/* Title */}
                <TypingAnimation
                    words={[title]}
                    blinkCursor={true}
                    cursorStyle="underscore"
                    className="text-4xl font-bold">
                </TypingAnimation>

                {/* Description */}
                <DocsDescription className="text-center mt-0 mb-0">{description}</DocsDescription>

                {/* Buttons */}
                <Flex className="mt-12 flex-col sm:flex-row" gap="4" justify="center">
                    {/* Submit Link button */}
                    <RainbowButton variant="outline" asChild>
                        <Link target={submitLink.startsWith('http') ? "_blank" : "_self"} rel={submitLink.startsWith('http') ? "noopener noreferrer" : undefined} className="no-underline hover:no-underline" href={submitLink}>
                            {translations.submitLinkText}
                        </Link>
                    </RainbowButton>

                    {/* Don't click button */}
                    <Button variant="destructive" size="lg" asChild>
                        <Link target={goodLink.startsWith('http') ? "_blank" : "_self"} rel={goodLink.startsWith('http') ? "noopener noreferrer" : undefined} className="no-underline hover:no-underline" href={goodLink}>
                            {translations.dontClickText}
                        </Link>
                    </Button>
                </Flex>


                {children && (
                    <Flex direction="column"
                        align="center" className="w-full justify-center">
                        {children}
                    </Flex>
                )}

                {/* Blog List */}
                <Tabs className="mt-24" defaultValue="all">
                    <div className="flex justify-center">
                        <TabsList>
                            {/* All */}
                            <TabsTrigger value="all">
                                {translations.allTagText}
                            </TabsTrigger>

                            {/* Other */}
                            {tags.map(tag => {
                                return (
                                    <TabsTrigger key={tag.id} value={tag.id}>
                                        {tag.icon ? tag.icon : null}{tag.title}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                    <TabsContent value="all">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="flex gap-4"
                            columnClassName="flex flex-col"
                        >
                            {links.map((item, index) => (
                                <LinkCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    iconSrc={item.iconSrc}
                                    iconFallback={item.iconFallback}
                                    iconFallbackColor={item.iconFallbackColor}
                                    cta={item.cta}
                                    href={item.href}
                                    backgroundType={item.backgroundType}
                                    background={item.background} />
                            ))}
                        </Masonry>
                    </TabsContent>

                    {tags.map(tag => {
                        return (
                            <TabsContent key={tag.id} value={tag.id}>
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="flex gap-4"
                                    columnClassName="flex flex-col"
                                >
                                    {links
                                        .filter(item => item.tag === tag.id)
                                        .map((item, index) => (
                                            <LinkCard
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                                iconSrc={item.iconSrc}
                                                iconFallback={item.iconFallback}
                                                iconFallbackColor={item.iconFallbackColor}
                                                cta={item.cta}
                                                href={item.href}
                                                backgroundType={item.backgroundType}
                                                background={item.background} />
                                        ))}
                                </Masonry>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </BlurFade>
        </Flex>
    );
}