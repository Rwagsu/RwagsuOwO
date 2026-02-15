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
        }
    }
};