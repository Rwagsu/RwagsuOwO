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
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

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

                        {/* Dialog button */}
                        <ToOtherPageDialog className="mt-4" translations={translations}/>

                        {/* Delete tip */}
                        <h2 className="text-1xl font-semibold mt-4">{translations.deleteTip}</h2>
                        <h2 className="text-1xl font-semibold">{translations.tempTip}</h2>
                    </AlertDescription>
                </Alert>
            </div>
        </Theme>
    );
}

function ToOtherPageDialog({ translations, className }: { translations: any, className?: string }) {
    return (
        <AlertDialog>
            {/* Alert trigger button */}
            <AlertDialogTrigger asChild>
                <Button variant="outline" className={className}>{translations.toPageDialogButton}</Button>
            </AlertDialogTrigger>

            {/* Content */}
            <AlertDialogContent>
                {/* Header */}
                <AlertDialogHeader>
                    {/* Title and description */}
                    <AlertDialogTitle>{translations.toPageDialogTitle}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {translations.toPageDialogDescription}
                    </AlertDialogDescription>

                    {/* TempTip */}
                    <div className="text-muted-foreground text-sm mt-2">
                        <span className="font-semibold">{translations.tempTip}</span>
                    </div>
                </AlertDialogHeader>

                {/* Footer */}
                <AlertDialogFooter>
                    {/* HomeAssistant button */}
                    <AlertDialogAction asChild>
                        <Link href="/docs/notebook/home_assistant">
                            {translations.toPageDialogHomeAssistant}
                        </Link>
                    </AlertDialogAction>

                    {/* Astral QnA button */}
                    <AlertDialogAction asChild>
                        <Link href="/docs/blog/archives/11_astral_qna">
                            {translations.toPageDialogAstralQnA}
                        </Link>
                    </AlertDialogAction>

                    {/* Astral QnA button */}
                    <AlertDialogAction asChild>
                        <Link href="/docs/works/code/astral-servercheck">
                            {translations.toPageDialogAstralQnA}
                        </Link>
                    </AlertDialogAction>

                    {/* Cancel button */}
                    <AlertDialogCancel>{translations.toPageDialogCancel}</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}