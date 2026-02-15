"use client";

import { Flex } from "@radix-ui/themes";
import { DocsDescription, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { BlurFade } from "@/components/ui/blur-fade"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text"
import { ExpandTranslation } from "@/lib/i18n";
import Link from "fumadocs-core/link";
import { flattenTree } from 'fumadocs-core/page-tree';
import { source } from '@/lib/source';
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconType } from "react-icons/lib";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface BlogFolder {
    path: string,
    icon: ReactNode | undefined,
    title: string,
    isStarred: boolean
}

interface ExpandButton {
    icon: ReactNode | undefined,
    title: string,
    href: string,
}

export default function BlogMainPage({ title, description, blogFolders, blogPathBase, buttons, lang, children }: {
    title: string,
    description: string,
    blogFolders: BlogFolder[],
    blogPathBase: string,
    buttons: ExpandButton[] | undefined,
    lang: string,
    children?: React.ReactNode
}) {
    const translations = lang === 'en' ? ExpandTranslation.en.BlogMainPage : ExpandTranslation.cn.BlogMainPage;

    // Get the full page tree and flatten it
    const pageTree = source.getPageTree();
    const flattenedTree = flattenTree(pageTree.children || []);

    return (
        <Flex
            direction="column"
            align="center" className="mt-32 mb-12 w-full">
            <BlurFade className="flex flex-col items-center gap-4 w-full">
                {/* Title */}
                <SparklesText colors={{ first: '#0077FF', second: '#FF0000' }}>
                    <p className="font-bold text-center mt-0 mb-0">
                        {title}
                    </p>
                </SparklesText>

                {/* Description */}
                <DocsDescription className="text-center mt-0 mb-0">{description}</DocsDescription>

                {/* Buttons */}
                <Flex className="mt-12 flex-col sm:flex-row" gap="4">
                    {/* Random Button */}
                    <RainbowButton variant="outline" asChild>
                        <button
                            onClick={() =>
                                toRandomPage(
                                    blogFolders?.map(folder => blogPathBase + folder.path),
                                    translations.noPageErrorTip
                                )
                            }
                        >
                            {translations.randomButtonTitle}
                        </button>
                    </RainbowButton>

                    {/* Link Button */}
                    {buttons && buttons.map((button, index) => {
                        return (
                            <RainbowButton key={index} variant="outline" asChild>
                                <Link className="no-underline hover:no-underline" href={button.href}>
                                    {button.icon ? button.icon : null}{button.title}
                                </Link>
                            </RainbowButton>
                        );
                    })}
                </Flex>


                {children && (
                    <Flex direction="column"
                        align="center" className="w-full justify-center">
                        {children}
                    </Flex>
                )}

                {/* Blog List */}
                {blogFolders.length > 1 ? (
                    <Tabs className="mt-24 w-full" defaultValue={blogFolders[0].path}>
                        <div className="flex justify-center">
                            <TabsList>
                                {blogFolders.map(folder => {
                                    return (
                                        <TabsTrigger key={folder.path} value={folder.path}>
                                            {folder.icon ? folder.icon : null}{folder.title}{folder.isStarred && <Badge>{translations.starredTag}</Badge>}
                                        </TabsTrigger>
                                    );
                                })}
                            </TabsList>
                        </div>

                        {blogFolders.map(folder => {
                            return (
                                <TabsContent key={folder.path} value={folder.path}>
                                    <Cards>
                                        {flattenedTree
                                            .filter(item => item.url.startsWith(blogPathBase + folder.path))
                                            .filter(item => item.url !== blogPathBase + folder.path)
                                            .map(item => (
                                                <Card key={item.url} title={item.name} href={item.url}>
                                                    {item.description}
                                                </Card>
                                            ))}
                                    </Cards>
                                </TabsContent>
                            );
                        })}
                    </Tabs>)
                    :
                    <Cards className="mt-12 w-full">
                        {flattenedTree
                            .filter(item => item.url.startsWith(blogPathBase + blogFolders[0].path))
                            .filter(item => item.url !== blogPathBase + blogFolders[0].path)
                            .map(item => (
                                <Card key={item.url} title={item.name} href={item.url}>
                                    {item.description}
                                </Card>
                            ))}
                    </Cards>
                }
            </BlurFade>
        </Flex>
    );
}


function toRandomPage(paths: string[], errorTip: string) {
    let pageLinks: string[] = [];

    // Get the full page tree and flatten it
    const pageTree = source.getPageTree();
    const flattenedTree = flattenTree(pageTree.children || []);

    // Filter pages that belong to the specified paths
    for (let path of paths) {
        const links = flattenedTree
            .filter(item => item.url.startsWith(path)) // Only include items under the specified path
            .filter(item => item.url !== path)
            .map(item => item.url);
        pageLinks = pageLinks.concat(links);
    }

    // If pageLinks is Empty, show error
    if (pageLinks.length == 0) {
        toast.error(errorTip);
        return;
    }

    // Get random item
    const randomItem = pageLinks[Math.floor(Math.random() * pageLinks.length)];

    // Navigate to page
    window.open(randomItem, '_self', 'noopener,noreferrer');
}