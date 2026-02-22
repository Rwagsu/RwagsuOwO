'use client';

import { Theme } from '@radix-ui/themes';  // 确保导入 Theme
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ExpandTranslation } from '@/lib/i18n';
import { useParams } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Link } from 'fumadocs-core/framework';

export default function NotFound() {
    // Theme
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Languages
    const params = useParams();
    const currentLang = (params?.lang as string) || 'cn';

    useEffect(() => {
        setMounted(true);
    }, []);

    // Translations
    const translations = currentLang === "en" ? ExpandTranslation.en.NotFound : ExpandTranslation.cn.NotFound;

    let currentTheme: "inherit" | "light" | "dark" = "light";

    switch (resolvedTheme) {
        case "system":
            currentTheme = "inherit";
            break;
        case "light":
            currentTheme = "light";
            break;
        case "dark":
            currentTheme = "dark";
            break;
    }

    if (!mounted) {
        return null;
    }

    return (
        <Theme accentColor="blue" appearance={currentTheme} scaling="100%">
            {/* 或直接写 appearance="dark" 如果你项目默认 dark */}
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 ml-6 mr-6">
                <Image width={3508} height={2481} src="/images/NoFile.png" alt={translations.tempImageLicense} className="rounded-xl w-full max-w-[600px] h-auto" />
                <p className="text-muted-foreground mb-12">
                    {translations.tempImageLicense}
                </p>

                <h1 className="text-6xl font-bold text-primary">ERROR 404 (ﾉД`) </h1>
                <h2 className="text-2xl font-semibold mt-4">{translations.description}</h2>
                <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50 max-w-3xl mt-6">
                    <InfoIcon />
                    <AlertTitle>{translations.tempLinkTipTitle}</AlertTitle>
                    <AlertDescription>
                        {translations.tempLinkTipDescription}
                        <ul>
                            {/* Home Assistant */}
                            <li>{translations.tempLinkHomeAssistant} 
                                <Link href="/docs/notebook/home_assistant">
                                    Home Assistant
                                </Link>
                            </li>

                            {/* Astral Q&A */}
                            <li>{translations.tempLinkAstralQnA} 
                                <Link href="/docs/blog/archives/11_astral_qna">
                                    Astral Q&A
                                </Link>
                            </li>

                            {/* Astral_ServerChecker */}
                            <li>{translations.tempLinkAstral_ServerChecker} 
                                <Link href="/docs/works/code/astral-servercheck">
                                    Astral_ServerChecker
                                </Link>
                            </li>
                        </ul>

                        {/* Delete Tip */}
                        <h2 className="text-1xl font-semibold mt-4">{translations.deleteTip}</h2>
                    </AlertDescription>
                </Alert>

            </div>
        </Theme>
    );
}