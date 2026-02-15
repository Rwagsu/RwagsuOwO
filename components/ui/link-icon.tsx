
import Image from 'next/image';

export default function LinkIcon({ link, alt, size = 18 }: { link: string; alt: string; size?: number }) {
    // Dynamically calculate the corner radius
    const borderRadius = Math.max(2, size * 0.20);
    
    return (
        <Image
            src={link}
            alt={alt}
            width={size}
            height={size}
            style={{ borderRadius }}
        />
    );
}