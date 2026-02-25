"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { PulsatingButton } from "../pulsating-button"
import { ExpandTranslation } from "@/lib/i18n"
import { HeartPlus } from "lucide-react";
import { Flex } from "@radix-ui/themes";
import { Button } from "../button";
import Link from "next/link";
import { useMediaQuery } from "fumadocs-core/utils/use-media-query";

export function DonateDialog({ lang, type }: { lang: string, type: "normal" | "icon" }) {
    const translations = lang === "en" ? ExpandTranslation.en.DonateDialog : ExpandTranslation.cn.DonateDialog;
    
    const isLg = useMediaQuery('(min-width: 1024px)')
    const buttonType = isLg ? 'normal' : 'icon'

    return (
        <AlertDialog>
            {/* Trigger */}
            <AlertDialogTrigger asChild>
                <Button size={type === "icon" || buttonType === "icon" ? "icon" : "default"}>
                    <Flex className="items-center" gap="2">
                        <HeartPlus />
                        {type === "normal" && buttonType === "normal"  && translations.buttonText}
                    </Flex>
                </Button>
            </AlertDialogTrigger>

            {/* Cpntent */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    {/* Icon */}
                    <AlertDialogMedia>
                        <HeartPlus />
                    </AlertDialogMedia>

                    {/* Title */}
                    <AlertDialogTitle>{translations.dialogTitle}</AlertDialogTitle>

                    {/* Description */}
                    <AlertDialogDescription>
                        {translations.dialogDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    {/* Cancel Button */}
                    <AlertDialogCancel>{translations.dialogCancel}</AlertDialogCancel>

                    {/* TODO: Donate button */}
                    {/* Bilibili */}
                    <AlertDialogAction disabled>
                        <Link target="_blank" href="/" className="no-underline hover:no-underline">
                            {translations.dialogBiliBili}
                        </Link>
                    </AlertDialogAction>

                    {/* AFdian */}
                    <AlertDialogAction asChild>
                        <Link target="_blank" href="https://afdian.com/a/Rwagsu" className="no-underline hover:no-underline">
                            {translations.dialogAFdian}
                        </Link>
                    </AlertDialogAction>

                    {/* GitHub Sponsor */}
                    <AlertDialogAction disabled>
                        <Link target="_blank" href="/" className="no-underline hover:no-underline">
                            {translations.dialogGitHubSponsor}
                        </Link>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}