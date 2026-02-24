'use client';

import { useRouter } from 'next/navigation';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { Button } from '@/components/ui/button';

interface RandomPageButtonProps {
    children: React.ReactNode;
    pageLinks: string[];
    variant?: 'rainbow' | 'default';
}

export function RandomPageButton({ children, pageLinks, variant = 'rainbow' }: RandomPageButtonProps) {
    const router = useRouter();

    const handleRandomNavigate = () => {
        if (pageLinks.length === 0) return;
        const randomIndex = Math.floor(Math.random() * pageLinks.length);
        router.push(pageLinks[randomIndex]);
    };

    const ButtonComponent = variant === 'rainbow' ? RainbowButton : Button;

    return (
        <ButtonComponent onClick={handleRandomNavigate}>
            {children}
        </ButtonComponent>
    );
}
