import { Avatar, Box, Card, Inset } from "@radix-ui/themes";
import { ReactNode, isValidElement, cloneElement } from "react";
import { Image as FumadocsImage, Link } from 'fumadocs-core/framework';
import { ArrowRightIcon } from "lucide-react";
import { PropDef } from "@radix-ui/themes/dist/esm/props/prop-def.js";
import { accentColors } from "@radix-ui/themes/src/props/color.prop.js";

// Define the props type for the Image component
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

export default function LinkCard({ title, description, cta, href, iconSrc, iconFallbackColor, iconFallback, background }: {
    title: string,
    description: string,
    cta: string,
    href: string,
    iconSrc?: string,
    iconFallbackColor?: 'gray' | 'gold' | 'bronze' | 'brown' | 'yellow' | 'amber' | 'orange' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'lime' | 'mint' | 'sky',
    iconFallback: NonNullable<ReactNode>,
    background: ReactNode
}) {
    // Check whether the background is a valid React element
    let processedBackground = background;

    if (isValidElement<any>(background)) {
        // Check whether the component is FumadocsImage
        if (background.type === FumadocsImage) {
            const imageProps = background.props as ImageProps;
            processedBackground = cloneElement(background, {
                width: imageProps.width || 300,
                height: imageProps.height || 100,
                ...imageProps
            });
        } else {
            // Directly use the source component
            processedBackground = background;
        }
    }

    return (
        <Box width="270px">
            <Card className="group relative overflow-hidden rounded-xl bg-background transform-gpu transition-all duration-300 hover:shadow-lg">
                {/* Background */}
                <Inset clip="padding-box" side="top" pb="current">
                    <Box height="120px" position="relative">
                        <div className="transform-gpu transition-transform duration-300 group-hover:scale-110">
                            {processedBackground}
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