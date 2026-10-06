import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "个人博客",
  description: "个人博客记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '阅读笔记', link: '/readingNote/index' },
      { text: '经济', link: '/economics/index' },
      { text: '技术', link: '/tech/index' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: [
      {
        text: '阅读笔记',
        items: [
          { text: '论持久战', link: '/readingNote/index' },
          { text: '矛盾论', link: '/readingNote/api-examples' }
        ]
      },
      {
        text: '经济',
        items: [
          { text: '经济学十大原理', link: '/economics/markdown-examples' },
          { text: '货币系数', link: '/economics/api-examples' }
        ]
      },
      {
        text: '技术',
        items: [
          { text: '索引', link: '/tech/index' },
          { text: 'ICP', link: '/tech/icp' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jackwanggo' }
    ]
  }
})
