"use client";

import { Flex } from "@radix-ui/themes";
import { DocsDescription } from 'fumadocs-ui/layouts/docs/page';
import { BlurFade } from "@/components/ui/blur-fade"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ExpandTranslation } from "@/lib/i18n";
import Link from "fumadocs-core/link";
import { getPageTreePeers } from 'fumadocs-core/page-tree';
import { source } from '@/lib/source';
import { Card, Cards } from "fumadocs-ui/components/card";
import { ReactNode, useEffect, useState } from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TypingAnimation } from "@/components/ui/typing-animation";
import MaintenanceLevel, { MaintenanceLevelType } from "@/components/ui/maintenance-level";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ExpandButton {
    icon: ReactNode | undefined,
    title: string,
    href: string,
}

export default function CodeMainPage({ title, description, folderPath, buttons, lang, maintenanceLevel, children }: {
    title: string,
    description: string,
    folderPath: string,
    buttons: ExpandButton[] | undefined,
    lang: string,
    maintenanceLevel?: MaintenanceLevelType,
    children?: React.ReactNode
}) {
    // TODO: 把 Blog MainPage 搬过来
    const translations = lang === 'en' ? ExpandTranslation.en.CodeMainPage : ExpandTranslation.cn.CodeMainPage;
    const [showNoPageError, setShowNoPageError] = useState(false);

    useEffect(() => {
        if (showNoPageError) {
            import("sonner").then(({ toast }) => {
                toast.error(translations.randomPageErrorTip);
                setShowNoPageError(false);
            });
        }
    }, [showNoPageError, translations.randomPageErrorTip]);

    return (
        <Flex
            direction="column"
            align="center" className="mb-12 mt-24 w-full">
            <BlurFade className="flex flex-col items-center gap-4 w-full">
                <RetroGrid/>

                {/* Title */}
                <TypingAnimation
                    words={[title, `println(\"${title}\")`, `Debug.WriteLine(\"${title}\");`, `console.log(\"${title}\")`, `cout << \"${title}\";`]}
                    cursorStyle="underscore"
                    loop
                    className="font-bold text-4xl text-center mt-0 mb-0"
                />

                {/* Description */}
                <DocsDescription className="text-center mt-0 mb-0">{description}</DocsDescription>

                {/* Buttons */}
                <Flex className="mt-12 mb-12 flex-col sm:flex-row" gap="4">
                    {/* Random Button */}
                    <RainbowButton variant="outline" asChild>
                        <button
                            onClick={() =>
                                toRandomPage(folderPath, () => setShowNoPageError(true))
                            }
                        >
                            {translations.randomPage}
                        </button>
                    </RainbowButton>

                    {/* Link Button */}
                    {buttons && buttons.map((button, index) => {
                        return (
                            <Button size="lg" key={index} asChild>
                                <Link className="no-underline hover:no-underline" href={button.href}>
                                    {button.icon ? button.icon : null}{button.title}
                                </Link>
                            </Button>
                        );
                    })}
                </Flex>

                {children && (
                    <Flex direction="column"
                        align="center" className="w-full justify-center">
                        {children}
                    </Flex>
                )}

                {/* Maintenance level */}
                {maintenanceLevel && (
                    <MaintenanceLevel level={maintenanceLevel} className="mt-0 mb-0" lang={lang}/>
                )}
                

                {/* Blog List */}
                <Cards className="mt-12 w-full">
                    {getPageTreePeers(source.getPageTree(), folderPath).map((peer) => (
                        <Card key={peer.url} title={peer.name} href={peer.url}>
                            {peer.description}
                        </Card>
                    ))}
                </Cards>
            </BlurFade>
        </Flex>
    );
}

function toRandomPage(path: string, onError: () => void) {
    const router = useRouter();
    
    // Filter pages that belong to the specified paths
    const pageLinks = getPageTreePeers(source.getPageTree(), path).map((peer) => peer.url);

    // If pageLinks is Empty, show error
    if (pageLinks.length == 0) {
        onError();
        return;
    }

    // Get random item
    const randomItem = pageLinks[Math.floor(Math.random() * pageLinks.length)];

    // Navigate to page
    router.push(randomItem);
}