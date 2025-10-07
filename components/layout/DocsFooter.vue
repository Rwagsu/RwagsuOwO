<template>
    <div class="mt-16">
        <div class="mb-6 flex w-full items-center justify-between">
            <!-- Left: Edit Link -->
            <LayoutEditLink />
            <!-- Right: Back to Top Button -->
            <LayoutBackToTop />
        </div>
        <LayoutPrevNext />

        <!-- giscus -->
        <Giscus repo="Rwagsu/RwagsuOwO" repo-id="R_kgDOPCVQEQ" category="Comments" category-id="DIC_kwDOPCVQEc4CsmMo"
            mapping="pathname" strict="0" reactions-enabled="1" emit-metadata="0" input-position="top"
            :theme="themeMode" :lang="locale === 'zh' ? 'zh-CN' : 'en'" loading="lazy" />

        <div class="flex">
            <LayoutCarbonAds v-if="!isDesktop && carbonAdsEnabled" class="mx-auto" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import Giscus from '@giscus/vue'
    import 'giscus';

    const { carbonAds } = useConfig().value.toc;
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const colorMode = useColorMode();
    const { locale } = useI18n();

    const themeMode = computed(() => {
        return colorMode.value === "dark" ? "dark_tritanopia" : "light_tritanopia";
    });

    const carbonAdsEnabled = computed(
        () =>
            carbonAds.enable &&
            !carbonAds.disableInMobile &&
            !(import.meta.dev && carbonAds.disableInDev)
    );
</script>
