'use client';

import Giscus from '@giscus/react';
import { githubInfo } from '@/lib/layout.shared';
import { useTheme } from 'next-themes'

export function Comments({ lang }: { lang: string }) {
    const { theme } = useTheme();

    return (<Giscus
            repo={`${githubInfo.owner}/${githubInfo.repo}`}
            repoId="R_kgDOPCVQEQ"
            category="Comments"
            categoryId="DIC_kwDOPCVQEc4CsmMo"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
            lang={lang === 'cn' ? 'zh-CN' : 'en'}
            loading="lazy"
        />);
}