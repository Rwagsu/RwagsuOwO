import AvatarButton from '@/components/ui/avatar-button';
import LinkCard from '@/components/ui/link-card';
import Link from 'next/link';
import { Avatar } from '@radix-ui/themes';
import { Image } from 'fumadocs-core/framework';
import { Star, Archive } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center text-center flex-1">
            <h1 className="text-2xl font-bold mb-4">Hello World</h1>
            <p>
                You can open{" "}
                <Link href="/docs/docs" className="font-medium underline">
                    /docs/docs
                </Link>{" "}
                and see the documentation.
            </p>
            <div className="flex mt-12 gap-6 justify-center">
                <AvatarButton name="Rwagsu" description="A developer and designer" iconLink="https://github.com/Rwagsu.png" link="https://github.com/Rwagsu" />
                <LinkCard 
                    title="THIS IS TEST!" 
                    description="testehdjdoiyet" 
                    cta="TD!" 
                    href="/" 
                    iconFallback={<Archive/>}
                    background={
                        <Image alt="OwO" src="https://s21.ax1x.com/2024/05/19/pkuT110.png"/>
                    }>
                </LinkCard>
            </div>
        </div>
    );
}
