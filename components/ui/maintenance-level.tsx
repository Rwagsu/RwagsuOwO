
"use client"

import { useEffect, useState } from "react"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ShineBorder } from "./shine-border"
import { SparklesText } from "./sparkles-text"
import { ExpandTranslation } from "@/lib/i18n"
import { Flex } from "@radix-ui/themes"
import { TextAnimate } from "./text-animate"

export type MaintenanceLevelType = "X0" | "G1" | "G2" | "G3" | "B4" | "B5" | "R6" | "R7" | "Q8" | "Q9" | "C10"

const LEVEL_ORDER: MaintenanceLevelType[] = [
    "X0", "G1", "G2", "G3", "B4", "B5", "R6", "R7", "Q8", "Q9", "C10"
]

const LEVEL_PREFIX: Record<MaintenanceLevelType, string> = {
    "X0": "X", "G1": "G", "G2": "G", "G3": "G",
    "B4": "B", "B5": "B", "R6": "R", "R7": "R",
    "Q8": "Q", "Q9": "Q", "C10": "C"
}

// Card background color
const PREFIX_BG_COLORS: Record<string, string> = {
    "X": "bg-red-500",
    "G": "bg-orange-500",
    "B": "bg-yellow-500",
    "R": "bg-blue-500",
    "Q": "bg-green-500",
}

// Text color (using theme variable)
const TEXT_COLOR = "text-[var(--color-fd-primary-foreground)]"

// Description text color
const PREFIX_DESCRIPTION_COLORS: Record<string, string> = {
    "X": "text-red-500",
    "G": "text-orange-500",
    "B": "text-yellow-500",
    "R": "text-blue-500",
    "Q": "text-green-500",
}

// Components
export default function MaintenanceLevel({
    level,
    lang,
    className,
}: {
    level: MaintenanceLevelType
    lang: string,
    className?: string
}) {
    const currentIndex = LEVEL_ORDER.indexOf(level)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })

    const [displayedLevel, setDisplayedLevel] = useState<MaintenanceLevelType>("X0")

    useEffect(() => {
        motionValue.set(currentIndex)

        const unsubscribe = springValue.on("change", (latest) => {
            const roundedIndex = Math.round(latest)
            setDisplayedLevel(LEVEL_ORDER[roundedIndex])
        })

        return () => unsubscribe()
    }, [currentIndex, motionValue, springValue])

    const prefix = LEVEL_PREFIX[displayedLevel]
    const number = LEVEL_ORDER.indexOf(displayedLevel)
    const bgClass = PREFIX_BG_COLORS[prefix]
    const descriptionColorClass = PREFIX_DESCRIPTION_COLORS[prefix]
    const isComplete = displayedLevel === level
    const isMaxLevel = prefix === "C"

    // Translations
    const translations = lang === "en" ? ExpandTranslation.en.MaintenanceLevel : ExpandTranslation.cn.MaintenanceLevel;

    // Description & title init
    let title: string;
    let description: string;

    switch (level) {
        case 'X0':
            title = translations.XLevelTitle;
            description = translations.XLevelDescription;
            break;

        case 'G1':
        case 'G2':
        case 'G3':
            title = translations.GLevelTitle;
            description = translations.GLevelDescription;
            break;

        case 'B4':
        case 'B5':
            title = translations.BLevelTitle;
            description = translations.BLevelDescription;
            break;

        case 'R6':
        case 'R7':
            title = translations.RLevelTitle;
            description = translations.RLevelDescription;
            break;

        case 'Q8':
        case 'Q9':
            title = translations.QLevelTitle;
            description = translations.QLevelDescription;
            break;

        case 'C10':
            title = translations.CLevelTitle;
            description = translations.CLevelDescription;
            break;

        default:
            title = translations.ErrorLevelTitle
            description = translations.errorLevelDescription
    }

    return (
        <div className={cn("justify-center relative flex items-center gap-4", className)}>
            <Card className={cn("relative overflow-hidden flex items-center justify-center transition-colors duration-300", isMaxLevel ? "bg-white" : bgClass)}>
                {/* C10 effect */}
                {isMaxLevel && (
                    <>
                        <ShineBorder borderWidth={2} shineColor={["#4DE9FF", "#0077FF", "#A855F7", "#FF0000"]} />
                    </>
                )}

                <Flex className="ml-6 mr-6" direction={{ initial: 'column', md: 'row' }} gap="4">
                    {/* Level text */}
                    <LevelText isMaxLevel={isMaxLevel} prefix={prefix} number={number} />

                    {isComplete && (
                        <Flex direction="column">
                            {/* Title */}
                            {title && (
                                <>
                                    {isMaxLevel ? (

                                        <TextAnimate className={cn("font-bold text-lg", className)} animation="slideLeft" by="character">
                                            {title}
                                        </TextAnimate>

                                    ) : (
                                        <TextAnimate className={cn("font-bold text-lg", TEXT_COLOR, className)} animation="slideLeft" by="character">
                                            {title}
                                        </TextAnimate>
                                    )}
                                </>
                            )}

                            {/* Description */}
                            {description && (
                                <>
                                    {isMaxLevel ? (

                                        <TextAnimate className={cn("font-bold text-sm", className)} animation="slideLeft" by="character">
                                            {description}
                                        </TextAnimate>

                                    ) : (
                                        <TextAnimate className={cn("font-bold text-sm", TEXT_COLOR, className)} animation="slideLeft" by="character">
                                            {description}
                                        </TextAnimate>
                                    )}
                                </>
                            )}
                        </Flex>
                    )}
                </Flex>
            </Card>


        </div>
    )
}

function LevelText({ isMaxLevel, prefix, number, className }: { isMaxLevel: boolean, prefix: string, number: number, className?: string }) {
    return (
        <CardContent className="flex items-center justify-center gap-1 p-0" >
            {isMaxLevel ? (
                <SparklesText
                    className="flex items-center justify-center leading-none"
                    colors={{ first: '#FF0000', second: '#0077FF' }}
                    sparklesCount={3}
                >
                    <div className="flex items-center gap-1 leading-none">
                        <span className={cn("text-4xl font-semibold", className)}>{prefix}</span>
                        <span className={cn("text-4xl font-bold", className)}>{number}</span>
                    </div>
                </SparklesText>

            ) : (
                <>
                    <span className={cn("text-4xl font-semibold", TEXT_COLOR, className)}>{prefix}</span>
                    <span className={cn("text-4xl font-bold", TEXT_COLOR, className)}>{number}</span>
                </>
            )}
        </CardContent>
    )
}