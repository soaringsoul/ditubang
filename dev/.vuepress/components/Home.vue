<template>
    <div class="HomeContainer">
        <Banner />

        <!-- 作者评论 -->
        <AuthorCommentCard />


        <!-- 特性 -->
        <div class="feature-container">

            <DesignerFeatureCard/>
          <DesignerFeatureCard/>

        </div>

        <!-- 页脚 -->
        <Footer />
    </div>
</template>

<script setup>
import useCustomPage from "../utils/useCustomPage";
import { localeConfig } from "../utils/locale";

useCustomPage();
let comments = localeConfig('comments');
let home = localeConfig('home');
document.title = '地图帮 - ' + home.value.title;
</script>

<style>
.feature-container {
    @apply pt-20 mb-10 flex flex-col gap-y-20 overflow-hidden sm:pt-32 sm:mb-32 sm:gap-y-32 md:pt-20 md:mb-0 md:gap-y-40;
}
</style>