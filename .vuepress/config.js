const pages = require('../pages')
let sidebar = {}

for (const key in pages) {
  if (pages.hasOwnProperty(key)) {
    sidebar[`/${key}/`] = pages[key].map(p => p.name)
  }
}

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  title: 'YoungLuo',
  description: '独孤求败的个人博客',
  head: [
    ['meta', { name: 'keywords', content: '独孤求败,youngluo,前端' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#338D6D' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }], // 设置书签时显示的图标
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#338D6D' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  dest: 'docs',
  themeConfig: {
    repo: 'youngluo',
    lastUpdated: '上次更新',
    logo: '/logo.svg',
    nav: [
      { text: '我的文章', link: '/articles/' },
      { text: '我的项目', link: '/projects/' },
      { text: '我的简历', link: '/resume/' },
    ],
    sidebar
  }
}
