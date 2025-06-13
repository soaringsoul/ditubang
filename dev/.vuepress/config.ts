import { defineUserConfig, viteBundler } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from "./config/index";
import { seoPlugin } from 'vuepress-plugin-seo2';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';


export default defineUserConfig({
  locales: {
    '/': {
      lang: 'English',
      title: '地图帮',
    },
    '/zh/': {
      lang: '简体中文',
      title: "地图帮",
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],
  theme: recoTheme(themeConfig),
  debug: false,
  base: '/',
  plugins: [
    // seo plugin，https://vuepress-theme-hope.github.io/v2/seo/
    seoPlugin({
      hostname: 'https://地图帮.com/',
      author: {
        name: 'zhiyiYo',
        url: 'https://github.com/zhiyiYo/'
      }
    }),

    // siteMap plugin，https://vuepress-theme-hope.github.io/v2/sitemap/zh/config.html
    sitemapPlugin({
      hostname: 'https://地图帮.com/',
      extraUrls: []
    }),
  ]
});
