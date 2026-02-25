'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ExpandTranslation } from '@/lib/i18n';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { Link } from 'fumadocs-core/framework';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { Flex } from '@radix-ui/themes';

export default function NotFound() {
    // Theme
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Languages - useParams in Next.js 15 returns plain object, not Promise
    const params = useParams();
    const currentLang = (params?.lang as string) || 'cn';

    useEffect(() => {
        setMounted(true);
    }, []);

    // Translations
    const translations = currentLang === "en" ? ExpandTranslation.en.NotFound : ExpandTranslation.cn.NotFound;

    if (!mounted) {
        return null;
    }

    return (
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
    );
}

function ToOtherPageDialog({ translations, className }: { translations: any, className?: string }) {
    return (
        <Drawer>
            {/* Drawer trigger button */}
            <DrawerTrigger asChild><Button variant="outline" className={className}>{translations.toPageDialogButton}</Button></DrawerTrigger>
            {/* Content */}
            <DrawerContent className="items-center">
                {/* Header */}
                <DrawerHeader>
                    {/* Title and description */}
                    <DrawerTitle>{translations.toPageDialogTitle}</DrawerTitle>
                    <DrawerDescription>{translations.toPageDialogDescription}</DrawerDescription>
                </DrawerHeader>

                {/* TempTip */}
                <div className="text-muted-foreground justify-center text-sm mt-2">
                    <span className="font-semibold">{translations.tempTip}</span>
                </div>

                {/* Footer */}
                <DrawerFooter>
                    <Flex className="gap-2" direction={{ initial: 'column', md: 'row' }} justify="center" >
                        {/* HomeAssistant button */}
                        <Button asChild>
                            <Link href="/docs/notebook/home_assistant">
                                {translations.toPageDialogHomeAssistant}
                            </Link>
                        </Button>

                        {/* Astral QnA button */}
                        <Button asChild>
                            <Link href="/docs/blog/archives/11_astral_qna">
                                {translations.toPageDialogAstralQnA}
                            </Link>
                        </Button>

                        {/* Astral_ServerChecker button */}
                        <Button asChild>
                            <Link href="/docs/works/code/astral-servercheck">
                                {translations.toPageDialogAstral_ServerChecker}
                            </Link>
                        </Button>
                        
                        <DrawerClose asChild>
                            <Button variant="outline">{translations.toPageDialogCancel}</Button>
                        </DrawerClose>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}