"use client";

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
import { ExpandTranslation } from "@/lib/i18n";
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
        <Drawer>
            {/* Trigger */}
            <DrawerTrigger asChild>
                <Button size={type === "icon" || buttonType === "icon" ? "icon" : "default"}>
                    <Flex className="items-center" gap="2">
                        <HeartPlus />
                        {type === "normal" && buttonType === "normal"  && translations.buttonText}
                    </Flex>
                </Button>
            </DrawerTrigger>

            {/* Content */}
            <DrawerContent className="items-center">
                <DrawerHeader>
                    {/* Icon */}
                    <DrawerTitle className="flex items-center justify-center gap-2">
                        <HeartPlus />
                    </DrawerTitle>

                    {/* Title */}
                    <DrawerTitle>{translations.dialogTitle}</DrawerTitle>

                    {/* Description */}
                    <DrawerDescription>
                        {translations.dialogDescription}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Flex className="gap-2" direction={{ initial: 'column', md: 'row' }} justify="center">
                        {/* Cancel Button */}
                        <DrawerClose asChild>
                            <Button variant="outline">{translations.dialogCancel}</Button>
                        </DrawerClose>

                        {/* TODO: Donate button */}
                        {/* Bilibili */}
                        <Button disabled>
                            <Link target="_blank" href="/" className="no-underline hover:no-underline">
                                {translations.dialogBiliBili}
                            </Link>
                        </Button>

                        {/* AFdian */}
                        <Button asChild>
                            <Link target="_blank" href="https://afdian.com/a/Rwagsu" className="no-underline hover:no-underline">
                                {translations.dialogAFdian}
                            </Link>
                        </Button>

                        {/* GitHub Sponsor */}
                        <Button disabled>
                            <Link target="_blank" href="/" className="no-underline hover:no-underline">
                                {translations.dialogGitHubSponsor}
                            </Link>
                        </Button>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}