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
    en: {
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
        codePage: {
            noLicenceErrorTip: "The repository does not appear to have a LICENSE file.",
            fetchErrorTip: "GitHub is currently unavailable; the page will be missing information.",
            languageCardTitle: "Language",
            maintenanceLevelCardTitle: "Maintenance Level",
            loadingTitle: "Waiting to load GitHub information......"
        },
        MaintenanceLevel: {
            XLevelTitle: "嗯...... 😅",
            XLevelDescription: "不用期待任何更新了()",

            GLevelTitle: "也许能获得更新吧()",
            GLevelDescription: "频率也太低了点吧, 仅在出现不得不修的 Bug 或者需要特别的更新才有吧()",

            BLevelTitle: "小更小补",
            BLevelDescription: "不会太多, 但也不会很少()",

            RLevelTitle: "开始发力! ☆ﾐ(o*･ω･)ﾉ ",
            RLevelDescription: "在绘画 / 视频等创意类算是正常速度, 但代码类算高速度()",

            QLevelTitle: "这么快??? w(ﾟДﾟ)w",
            QLevelDescription: "这速度太罕见了吧! Σ(っ °Д °;)っ",

            CLevelTitle: "啊??? 不是?! Σ(°ロ°) ",
            CLevelDescription: "这等级几乎要把全部项目放一边狂赶啊, 整这么快是要干嘛啊 (っ °Д °;)っ",

            ErrorLevelTitle: "欸? (´･ω･`)?",
            ErrorLevelDescription: "好像出错了()"
        }
    },
    cn: {
        ReadingTime: {
            lessThanOneMinute: '不到 1 分钟',
            minute: '分钟',
        },
        BlogMainPage: {
            randomButtonTitle: '随机一个页面! ☆ﾐ(o*･ω･)ﾉ ',
            noPageErrorTip: '好像没有搜寻到任何页面.',
            starredTag: '特别内容!'
        },
        FriendlyLinksPage: {
            submitLinkText: '提交新的链接',
            dontClickText: '千万别点',
            allTagText: '全部'
        },
        codePage: {
            noLicenceErrorTip: "存储库好像没有 LICENSE.",
            fetchErrorTip: "现在还无法访问 GitHub, 页面将丢失信息.",
            languageCardTitle: "语言",
            maintenanceLevelCardTitle: "维护等级",
            loadingTitle: "等待加载 GitHub 信息......"
        },
        MaintenanceLevel: {
            XLevelTitle: "嗯...... 😅",
            XLevelDescription: "不用期待任何更新了()",

            GLevelTitle: "也许能获得更新吧()",
            GLevelDescription: "频率也太低了点吧, 仅在出现不得不修的 Bug 或者需要特别的更新才有吧()",

            BLevelTitle: "小更小补",
            BLevelDescription: "不会太多, 但也不会很少()",

            RLevelTitle: "开始发力! ☆ﾐ(o*･ω･)ﾉ ",
            RLevelDescription: "在绘画 / 视频等创意类算是正常速度, 但代码类算高速度()",

            QLevelTitle: "这么快??? w(ﾟДﾟ)w",
            QLevelDescription: "这速度太罕见了吧! Σ(っ °Д °;)っ",

            CLevelTitle: "啊??? 不是?! Σ(°ロ°) ",
            CLevelDescription: "这等级几乎要把全部项目放一边狂赶啊, 整这么快是要干嘛啊 (っ °Д °;)っ",

            ErrorLevelTitle: "欸? (´･ω･`)?",
            ErrorLevelDescription: "好像出错了()"
        }
    }
};