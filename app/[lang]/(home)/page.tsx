import Link from 'next/link';
import { ExpandTranslation } from '@/lib/i18n';
import { IconsOrbit } from '@/components/ui/icons-orbit';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Card, Flex } from '@radix-ui/themes';
import { BlurFade } from '@/components/ui/blur-fade';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { source } from '@/lib/source';
import { flattenTree } from 'fumadocs-core/page-tree';
import { RandomPageButton } from '@/components/ui/random-page-button';

export default async function HomePage(props: {
    params: Promise<{ lang: string }>;
}) {
    const lang = (await props.params).lang;
    const translations = lang === "en" ? ExpandTranslation.en : ExpandTranslation.cn;

    // 获取所有页面用于随机跳转
    const pageTree = source.getPageTree();
    const flattenedTree = flattenTree(pageTree.children || []);
    const pageLinks = flattenedTree.map(item => item.url);

    return (
        <BlurFade>
            <div className="flex min-h-screen flex-col">
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <IconsOrbit className="absolute inset-0 -translate-y-1/5 w-full h-full" />
                </div>

                <main className="mt-32 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 pt-8 relative">
                    {/* Header */}
                    <div className="w-full max-w-4xl text-center">
                        {/* Title */}
                        <SparklesText colors={{ first: '#0077FF', second: '#FF0000' }}>{translations.MainPage.title}</SparklesText>

                        {/* Description */}
                        <p className="mt-4 font-medium">
                            {translations.MainPage.description()}
                        </p>

                        {/* Buttons */}
                        <Flex justify="center" gap="4" className="mt-8">
                            <RandomPageButton pageLinks={pageLinks}>
                                {translations.MainPage.randomPageButtonText}
                            </RandomPageButton>
                            
                            <Button size="lg" asChild>
                                <Link href="https://space.bilibili.com/2123349162" className="no-underline hover:no-underline">
                                    {translations.MainPage.bilibiliButtonText}
                                </Link>
                            </Button>
                        </Flex>
                    </div>

                    {/* TempTip */}
                    <div className="w-full mt-64">
                        <Card size="5" className="bg-transparent/30 backdrop-blur-sm rounded-4xl p-8">
                            <Flex className="items-center" gap="8" direction={{ initial: 'column', md: 'row' }}>
                                <Flex direction="column" gap="4" align={{ initial: 'center', md: 'start' }} className="w-full">
                                    {/* Title */}
                                    <h1 className="mt-0 mb-0 text-3xl font-bold">{translations.MainPage.notSourceTitle}</h1>

                                    {/* Description */}
                                    <div className="font-medium">
                                        {translations.MainPage.notSourceDescription()}
                                    </div>

                                    {/* ToBlog button */}
                                    <Button disabled asChild>
                                        <Link href="/" className="no-underline hover:no-underline">
                                            {translations.MainPage.toBlogButtonText}
                                        </Link>
                                    </Button>
                                </Flex>
                                <Image width={3508} height={2481} src="/images/NoFile.png" alt={translations.NotFound.tempImageLicense} className="rounded-xl w-full max-w-[500px] h-auto" />
                            </Flex>
                        </Card>
                    </div>
                </main>

                <footer className="shrink-0 py-8 text-sm text-muted-foreground w-full text-center mt-auto">
                    {translations.MainPage.footerContent()}
                </footer>
            </div>
        </BlurFade>

    );
}
