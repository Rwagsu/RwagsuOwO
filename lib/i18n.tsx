import { Highlighter } from '@/components/ui/highlighter';
import { Flex, Text } from '@radix-ui/themes';
import { Link } from 'fumadocs-core/framework';
import { defineI18n } from 'fumadocs-core/i18n';
import { Translations } from 'fumadocs-ui/i18n';
import { title } from 'node:process';
import { de } from 'zod/v4/locales';

export const i18n = defineI18n({
    defaultLanguage: 'cn',
    languages: ['en', 'cn'],
    parser: 'dir',
    hideLocale: 'always',
});

export const zhTranslations: Partial<Translations> & { displayName?: string; } = {
    displayName: '中文 (简体)',
    search: '搜索',
    searchNoResult: '没有任何结果 (ﾉω･､)',
    toc: '目录',
    tocNoHeadings: '好像没有标题😰',
    lastUpdate: '最后一次更新',
    chooseLanguage: '选择语言',
    nextPage: '下一页',
    previousPage: '上一页',
    chooseTheme: '选择主题',
    editOnGithub: '在 GitHub 上编辑',
};

export const enTranslations: Partial<Translations> & { displayName?: string; } = {
    displayName: 'English',
};

export const ExpandTranslation = {
    cn: {
        MainPage: {
            // Header
            title: "RwagsuOwO!",
            description: () => (
                <>
                    <p>
                        哈喽! |･ω･) 来看看任何东西, 由啥都会的
                        {" "}<Highlighter action="underline" color="#0077FF">
                            Rwagsu / DrownedOwO
                        </Highlighter>{" "}
                        这俩
                        {" "}<Highlighter action="underline" color="#FF0000">
                            Furry 控
                        </Highlighter>{" "}
                        制作 (｀・ω・´)"
                    </p>
                    
                    <p>
                        包括视频 / 音频 / 代码 (累死我了不写了QAQ) /
                        {" "}<Highlighter action="highlight" color="#87CEFA">
                            绘画 / 3D
                        </Highlighter>{" "}
                        等乱七八糟的东西, 统统都能在这里找到() ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ
                    </p>
                </>
            ),
            randomPageButtonText: "试试手气! (ﾉ≧∀≦)ﾉ ",
            randomPageErrorTip: "好像随机出错了 ()",
            bilibiliButtonText: "Rwagsu 的 Bilibili",

            // Source Not Finished
            notSourceTitle: "页面缺少资源 :(",
            notSourceDescription: () => (
                <>
                    <span>
                        嗯...... 你们也知道的, Rwagsu 的电脑出了
                        {" "}<Highlighter action="highlight" color="#FFB0B0">
                            亿点萧问题
                        </Highlighter>
                        , 这就导致所有项目 (除了代码) 全部停滞 ( ; ω ; )
                    </span>

                    <p>
                        所以那个 MacBook Pro 到底啥时候出啊急死我了QAQ 我的网站还是频道啥也没有就是因为那个啊, 电脑坏了啊 (ﾉД`)
                    </p>
                </>
            ),
            toBlogButtonText: "查看详细情况 (我的电脑( ; ω ; )) (没写完)",

            // Footer
            footerContent: () => (
                <>
                    <p>
                        Copyright © 2025 - {new Date().getFullYear()}

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://space.bilibili.com/2123349162  ">
                            Rwagsu
                        </Link>{" "}

                        &

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://space.bilibili.com/527675045  ">
                            DrownedOwO
                        </Link>{" "}

                        ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ
                    </p>
                    <p>
                        在没有特殊说明的情况下, 使用任何原创内容都记得遵守

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans  ">
                            CC BY-NC-SA 4.0
                        </Link>{" "}

                        ;)
                    </p>
                    <p>
                        网站基于

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://www.fumadocs.dev/  ">
                            Fumadocs
                        </Link>{" "}

                        制作 (希望这是最后一次换QAQ)
                    </p>
                </>
            ),
        },

        BannerTitle: "RwagsuOwO 现在基于 Fumadocs! (ﾉ≧∀≦)ﾉ  页面路径现在有很大变化，希望提醒一下老链接的评论之类的 XD",
        NotFound: {
            tempImageLicense: "Source Not Finished - By Rwagsu, 图片将在以后添加到 Works 区块，现在使用 CC BY-NC-SA 4.0 作为图片许可.",
            description: "呼呼 (-ω-、) 这里什么也没有 (´-ω-`)",
            tempLinkTipTitle: "你在寻找 Home Assistant / Astral 常见问题 / Astral_ServerChecker?",
            tempLinkTipDescription: "现在 RwagsuOwO 基于 Fumadocs, 看起来在 2026-02-23 之前的链接已经全部失效 ()",
            tempTip: "希望你可以到发现链接的地方提醒一下路人QAQ",
            toPageDialogButton: "导航到新页面",
            toPageDialogTitle: "要导航到哪里?",
            toPageDialogDescription: "不要选错哦 ψ(｀∇´)ψ",
            toPageDialogCancel: "取消",
            toPageDialogHomeAssistant: "Home Assistant",
            toPageDialogAstralQnA: "Astral 常见问题",
            toPageDialogAstral_ServerChecker: "Astral_ServerChecker",
            deleteTip: "这个 404 提醒还能存在到 2026-05-13()"
        },
        ReadingTime: {
            lessThanOneMinute: '不到 1 分钟',
            minute: '分钟',
        },
        BlogMainPage: {
            randomButtonTitle: '随机一个页面！☆ﾐ(o*･ω･)ﾉ ',
            noPageErrorTip: '好像没有搜寻到任何页面.',
            starredTag: '特别内容!'
        },
        FriendlyLinksPage: {
            submitLinkText: '提交新的链接',
            dontClickText: '千万别点',
            allTagText: '全部'
        },
        CodePage: {
            noLicenceErrorTip: "存储库好像没有 LICENSE.",
            fetchErrorTip: "现在还无法访问 GitHub, 页面将丢失信息.",
            languageCardTitle: "语言",
            maintenanceLevelCardTitle: "维护等级",
            loadingTitle: "等待加载 GitHub 信息......"
        },
        MaintenanceLevel: {
            XLevelTitle: "嗯...... (ﾉω･､)",
            XLevelDescription: "坐下来玩会游戏吧，不用期待任何更新了 ()",

            GLevelTitle: "也许能获得更新吧 ()",
            GLevelDescription: "频率也太低了点吧，跟 Rwagsu 本设的力量差不多吧 XD",

            BLevelTitle: "小更小补",
            BLevelDescription: "喝个缓速药水或者被流浪者射一箭，差不多就是这速度 ()",

            RLevelTitle: "开始发力！☆ﾐ(o*･ω･)ﾉ ",
            RLevelDescription: "速度开始增快！就像...... Minecraft 正常跑步的速度一样 ()",

            QLevelTitle: "这么快??? w(ﾟДﾟ)w",
            QLevelDescription: "这速度太罕见了吧！Σ(っ °Д °;) っ",

            CLevelTitle: "啊??? 不是?! Σ(°ロ°) ",
            CLevelDescription: "这等级几乎要把全部项目放一边狂赶啊，整这么快是要干嘛啊？？(っ °Д °;) っ",

            errorLevelTitle: "欸？(´･ω･`)?",
            errorLevelDescription: "好像出错了 ()"
        },
        CodeMainPage: {
            randomPage: "随机一个存储库！(つ≧▽≦) つ",
            randomPageErrorTip: "好像随机出错了 ()",
        },
        DonateDialog: {
            buttonText: "Donate!",
            dialogTitle: "在哪里支持 Rwagsu?",
            dialogDescription: "给 Rwagsu 买杯咖啡吧！(ﾉ≧∀≦)ﾉ",
            dialogCancel: "取消 ( ; ω ; )",
            dialogBiliBili: "BiliBili 充电 (没搞完)",
            dialogAFdian: "爱发电",
            dialogGitHubSponsor: "GitHub Sponsor",
        }
    },
    en: {
        MainPage: {
            title: "RwagsuOwO!",
            description: () => (
                <>
                    <p>
                        Hello! |･ω･) Come check out all sorts of stuff created by the all-rounder
                        {" "}<Highlighter action="underline" color="#0077FF">
                            Rwagsu / DrownedOwO
                        </Highlighter>{" "}
                        — these two
                        {" "}<Highlighter action="underline" color="#FF0000">
                            Furry enthusiasts
                        </Highlighter>{" "}
                        (｀・ω・´)"
                    </p>
                    
                    <p>
                        Including videos / audio / code (I'm exhausted, not writing anymore QAQ) /
                        {" "}<Highlighter action="highlight" color="#87CEFA">
                            Art / 3D
                        </Highlighter>{" "}
                        and all kinds of random stuff, you can find it all here () ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ
                    </p>
                </>
            ),
            randomPageButtonText: "Try your luck! (ﾉ≧∀≦)ﾉ",
            randomPageErrorTip: "Looks like a random error occurred ()",
            bilibiliButtonText: "Rwagsu's Bilibili",

            notSourceTitle: "Page missing resources :(",
            notSourceDescription: () => (
                <>
                    <span>
                        Well... as you know, Rwagsu's computer has run into
                        {" "}<Highlighter action="highlight" color="#FFB0B0">
                            a teensy-weensy little problem
                        </Highlighter>
                        , which has caused all projects (except code) to come to a complete halt ( ; ω ; )
                    </span>

                    <p>
                        So when is that MacBook Pro coming out already, I'm dying of anxiety QAQ My website and channel have nothing on them because of that — my computer broke (ﾉД`)
                    </p>
                </>
            ),
            toBlogButtonText: "View details (my computer ( ; ω ; )) (Not finished)",

            footerContent: () => (
                <>
                    <p>
                        Copyright © 2025 - {new Date().getFullYear()}

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://space.bilibili.com/2123349162  ">
                            Rwagsu
                        </Link>{" "}

                        &

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://space.bilibili.com/527675045  ">
                            DrownedOwO
                        </Link>{" "}

                        ヽ( ･∀･)ﾉ_θ彡☆Σ(ノ `Д´)ノ
                    </p>
                    <p>
                        Unless otherwise specified, please remember to comply with

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans  ">
                            CC BY-NC-SA 4.0
                        </Link>{" "}

                        when using any original content ;)
                    </p>
                    <p>
                        This website is built with

                        {" "}<Link target="_blank" className="ml-1 mr-1 font-bold underline decoration-2 decoration-primary" href="https://www.fumadocs.dev/  ">
                            Fumadocs
                        </Link>{" "}

                        (Hope this is the last time switching QAQ)
                    </p>
                </>
            ),
        },

        BannerTitle: "RwagsuOwO is now based on Fumadocs! (ﾉ≧∀≦)ﾉ  The page paths have changed significantly, so I hope to give a heads-up about comments on the old links and such XD",
        NotFound: {
            tempImageLicense: "Source Not Finished - By Rwagsu. Images will be added to the Works section later; currently using CC BY-NC-SA 4.0 as the image license.",
            description: "Oops (-ω-、) There's nothing here (´-ω-`)",
            tempLinkTipTitle: "Are you looking for Home Assistant / Astral FAQ / Astral_ServerChecker?",
            tempLinkTipDescription: "RwagsuOwO is now based on Fumadocs. It seems all links before 2026-02-23 are broken now ()",
            tempTip: "I hope you can remind passersby to check the links when you find them QAQ",
            toPageDialogButton: "Navigate to new page",
            toPageDialogTitle: "Where to navigate?",
            toPageDialogDescription: "Don't choose the wrong one ψ(｀∇´)ψ",
            toPageDialogCancel: "Cancel",
            toPageDialogHomeAssistant: "Home Assistant",
            toPageDialogAstralQnA: "Astral FAQ",
            toPageDialogAstral_ServerChecker: "Astral_ServerChecker",
            deleteTip: "This 404 reminder will exist until 2026-05-13 ()"
        },
        ReadingTime: {
            lessThanOneMinute: 'Less than 1 min',
            minute: 'min',
        },
        BlogMainPage: {
            randomButtonTitle: 'Random page! ☆ﾐ(o*･ω･)ﾉ ',
            noPageErrorTip: 'Seems like we didn\'t find any pages.',
            starredTag: 'Special Content!'
        },
        FriendlyLinksPage: {
            submitLinkText: 'Submit a new link',
            dontClickText: 'DON\'T CLICK',
            allTagText: 'All'
        },
        CodePage: {
            noLicenceErrorTip: "The repository does not appear to have a LICENSE file.",
            fetchErrorTip: "GitHub is currently unavailable; the page will be missing information.",
            languageCardTitle: "Language",
            maintenanceLevelCardTitle: "Maintenance Level",
            loadingTitle: "Waiting to load GitHub information......"
        },
        MaintenanceLevel: {
            XLevelTitle: "Hmm...... (ﾉω･､)",
            XLevelDescription: "Sit down and play some games, don't expect any updates ()",

            GLevelTitle: "Perhaps it can be updated ()",
            GLevelDescription: "The frequency is way too low, about the same as Rwagsu's OC's power XD",

            BLevelTitle: "Minor adjustments",
            BLevelDescription: "Like drinking a Slowness potion or getting shot by a Stray, that's about the speed ()",

            RLevelTitle: "Start exerting force! ☆ﾐ(o*･ω･)ﾉ ",
            RLevelDescription: "Speed starts increasing! Like… the speed of normal running in Minecraft ()",

            QLevelTitle: "So fast??? w(ﾟДﾟ)w",
            QLevelDescription: "That speed is incredibly rare! Σ(っ °Д °;) っ",

            CLevelTitle: "What?! No way?! Σ(°ロ°) ",
            CLevelDescription: "This level of urgency is practically forcing us to put everything else on hold and rush through it. What's the point of moving so fast?? (っ °Д °;) っ",

            errorLevelTitle: "Huh? (´･ω･`)?",
            errorLevelDescription: "Something seems to have gone wrong ()"
        },
        CodeMainPage: {
            randomPage: "Random repository! (つ≧▽≦) つ",
            randomPageErrorTip: "Seems like a random error occurred ()",
        },
        DonateDialog: {
            buttonText: "Donate!",
            dialogTitle: "Where to support Rwagsu?",
            dialogDescription: "Buy Rwagsu a coffee! (ﾉ≧∀≦)ﾉ",
            dialogCancel: "Cancel ( ; ω ; )",
            dialogBiliBili: "BiliBili Charging (Not finished)",
            dialogAFdian: "Afdian",
            dialogGitHubSponsor: "GitHub Sponsor",
        }
    },
};