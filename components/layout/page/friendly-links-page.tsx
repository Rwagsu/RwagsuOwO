import { Flex, Grid } from "@radix-ui/themes";
import { DocsDescription, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { BlurFade } from "@/components/ui/blur-fade"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ExpandTranslation } from "@/lib/i18n";
import Link from "fumadocs-core/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReactNode } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "@/components/ui/button";
import LinkCard from "@/components/ui/link-card";

interface FriendlyLink {
    title: string,
    description: string,
    cta: string,
    href: string,
    iconSrc?: string,
    iconFallback: NonNullable<ReactNode>
    iconFallbackColor?: 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky',
    tag: string,
    background: ReactNode,
    className: string;
}

interface FriendlyLinksTag {
    id: string,
    title: string,
    icon: ReactNode | undefined
}

export default function FriendlyLinksPage({ title, description, links, tags, submitLink, lang, children }: {
    title: string,
    description: string,
    links: FriendlyLink[],
    tags: FriendlyLinksTag[],
    submitLink: string,
    lang: string,
    children?: React.ReactNode
}) {
    const translations = lang === 'en' ? ExpandTranslation.en.FriendlyLinksPage : ExpandTranslation.cn.FriendlyLinksPage;
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
                        <Link className="no-underline hover:no-underline" href={submitLink}>
                            {translations.submitLinkText}
                        </Link>
                    </RainbowButton>

                    <Button variant="destructive" size="lg" asChild>
                        <Link className="no-underline hover:no-underline" href={goodLink}>
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
                <Tabs className="mt-24 w-full" defaultValue="all">
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
                        <Grid gap="4" columns={{ initial: "1", sm: "1", md: "2", lg: "3" }} align="start">
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
                                    background={item.background} />
                            ))}
                        </Grid>
                    </TabsContent>

                    {tags.map(tag => {
                        return (
                            <TabsContent key={tag.id} value={tag.id}>
                                <Grid gap="4" columns={{ initial: "1", sm: "1", md: "2", lg: "3" }} align="start">
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
                                                background={item.background}/>
                                        ))}
                                </Grid>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </BlurFade>
        </Flex>
    );
}