import LastUpdate from "@/components/layout/last-update";
import {ReadingTime} from "@/components/layout/reading-time";
import {LLMCopyButton, ViewOptions} from "@/components/ai/page-actions";
import {Flex} from "@radix-ui/themes";

export default function PageActions({ time, readingTime, url, lang, gitConfig }: {
    time?: any,
    readingTime?: any,
    lang: string,
    url: string,
    gitConfig: {
        user: string,
        repo: string,
        branch: string,
    }
}) {
    return (
        <Flex direction={{ initial: 'column', md: 'row' }} justify={{ initial: 'start', md: 'between' }} gap={{ initial: '3', md: '4' }} align={{ initial: 'start', md: 'center' }} width="100%" className="border-b pb-4 pt-2">
            {/* Page Infos - Left side on desktop, top on mobile */}
            <Flex direction="row" gap="8" align="center" className="pb-0 pl-1">
                {time && <LastUpdate time={time} lang={lang} />}
                {readingTime && <ReadingTime stats={readingTime} lang={lang} />}
            </Flex>

            {/* Page Actions - Right side on desktop, left on mobile */}
            <Flex direction="row" gap="2" align="center" width={{ initial: '100%', md: 'auto' }}>
                <LLMCopyButton markdownUrl={`${url}.mdx`} />
                <ViewOptions
                    markdownUrl={`${url}.mdx`}
                    // update it to match your repo
                    githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${url.replace('/docs/', '')}`}
                />
            </Flex>
        </Flex>
    );
}