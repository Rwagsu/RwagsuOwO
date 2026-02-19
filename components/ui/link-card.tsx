import { Avatar, Box, Card, Inset } from "@radix-ui/themes";
import { ReactNode } from "react";
import { Link } from "fumadocs-core/framework";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function LinkCard({ title, description, cta, href, iconSrc, iconFallbackColor, iconFallback, backgroundType, background }: {
    title: string,
    description: string,
    cta: string,
    href: string,
    iconSrc?: string,
    iconFallbackColor?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky",
    iconFallback: NonNullable<ReactNode>,
    backgroundType: "solid" | "image"
    background: string
}) {
    return (
        <Box width={{ initial: "280px", sm: "300px", md: "320px", lg: "270px" }}>
            <Card className="group relative overflow-hidden rounded-xl bg-background transform-gpu transition-all duration-300 hover:shadow-lg">
                {/* Background */}
                <Inset clip="padding-box" side="top" pb="current">
                    <Box height="120px" position="relative">
                        <div className="transform-gpu transition-transform duration-300 group-hover:scale-110 h-full">
                            <CardBackground type={backgroundType} src={background} alt={title} />
                        </div>
                    </Box>
                </Inset>

                {/* Content */}
                <div className="relative z-20 overflow-visible -mt-15">
                    <div className="mt-4 transform-gpu transition-transform duration-300 group-hover:-translate-y-9">
                        {/* Icon */}
                        <Avatar 
                          variant="solid" 
                          radius="full" 
                          size="5" 
                          color={iconFallbackColor} 
                          src={iconSrc} 
                          fallback={iconFallback}
                          className="border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-800"
                        />
                        
                        {/* Title */}
                        <h3 className="mt-6 mb-0 block font-bold">
                            {title}
                        </h3>

                        {/* Description */}
                        <p className="mt-1 mb-0 text-neutral-400">
                            {description}
                        </p>

                        {/* Link */}
                        <Link href={href} className="font-semibold text-xs mt-4 flex flex-row items-center hover:underline position: absolute">
                            {cta}
                            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180 transform-gpu transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </Card>
        </Box>
    )
}

function CardBackground({type, src, alt}: {
    type: "solid" | "image",
    src: string,
    alt: string
}) {
    if (type === "solid") {
        return (
            <div  className="w-full h-full" style={{ backgroundColor: src }} />
        );
    } 
    else if (type === "image") {
        return (
            <Image height={120} width={270} src={src} alt={alt} className="mt-0 mb-0 w-full h-full" style={{ objectFit: "cover", height: "120px" }} />
        );
    }
    return null;
}