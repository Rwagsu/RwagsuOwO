import AvatarButton from '@/components/ui/avatar-button';
import Link from 'next/link';

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
            <div className="flex justify-center">
                <AvatarButton name="Rwagsu" description="A developer and designer" iconLink="https://github.com/Rwagsu.png" link="https://github.com/Rwagsu" />
            </div>
        </div>
    );
}
