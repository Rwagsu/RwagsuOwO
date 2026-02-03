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

export const tipTranslations = {
    cn: {
        
    },
    en: {

    }
};