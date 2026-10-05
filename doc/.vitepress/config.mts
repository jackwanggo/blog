import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "个人博客",
  description: "个人博客记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
       { text: 'MySQL', link: '/mysql/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'MySQL',
        items: [
          { text: '索引', link: '/mysql/index-design' },
          { text: 'ICP', link: '/mysql/icp' },
          { text: 'MVCC', link: '/mysql/mvcc' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jackwanggo' }
    ]
  }
})
