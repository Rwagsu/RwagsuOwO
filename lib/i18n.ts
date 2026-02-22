import { defineI18n } from 'fumadocs-core/i18n';
import { Translations } from 'fumadocs-ui/i18n';

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
        BannerTitle: "RwagsuOwO 现在基于 Fumadocs! (ﾉ≧∀≦)ﾉ  页面路径现在有很大变化，希望提醒一下老链接的评论之类的 XD",
        NotFound: {
            tempImageLicense: "Source Not Finished - By Rwagsu, 图片将在以后添加到 Works 区块，现在使用 CC BY-NC-SA 4.0 作为图片许可.",
            description: "呼呼 (-ω-、) 这里什么也没有 (´-ω-`)",
            tempLinkTipTitle: "你在寻找 Home Assistant / Astral 常见问题 / Astral_ServerChecker?",
            tempLinkTipDescription: "现在 RwagsuOwO 基于 Fumadocs, 看起来在 2026-02-23 之前的链接已经全部失效 ()",
            tempLinkHomeAssistant: "如果你在寻找 Home Assistant:",
            tempLinkAstralQnA: "如果你在寻找 Astral Q&A(常见问题):",
            tempLinkAstral_ServerChecker: "如果你在寻找 Astral_ServerChecker:",
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
        }
    },
    en: {
        BannerTitle: "RwagsuOwO is now based on Fumadocs! (ﾉ≧∀≦)ﾉ  The page paths have changed significantly, so I hope to give a heads-up about comments on the old links and such XD",
        NotFound: {
            tempImageLicense: "Source Not Finished - By Rwagsu. Images will be added to the Works section later; currently using CC BY-NC-SA 4.0 as the image license.",
            description: "Oops (-ω-、) There's nothing here (´-ω-`)",
            tempLinkTipTitle: "Are you looking for Home Assistant / Astral FAQ / Astral_ServerChecker?",
            tempLinkTipDescription: "RwagsuOwO is now based on Fumadocs. It seems all links before 2026-02-23 are broken now ()",
            tempLinkHomeAssistant: "If you are looking for Home Assistant:",
            tempLinkAstralQnA: "If you are looking for Astral Q&A (FAQ):",
            tempLinkAstral_ServerChecker: "If you are looking for Astral_ServerChecker:",
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
        }
    },
};