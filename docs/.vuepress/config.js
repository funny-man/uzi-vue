module.exports = {
  title: 'Hello Uzi',
  base: '/uzi-vue/',
  description: '基于Vue的个人Ui组件库，ui的设计都是自己完成，轻巧、美观（个人审美）,希望你喜欢！',
  themeConfig: {
    nav: [
      { text: '我的简书', link: 'https://www.jianshu.com/u/acb9cf89fa0f' },
      { text: 'gitHub', link: 'https://github.com/funny-man/uzi-vue' },
    ],
    sidebar: [
      '/install/',
      '/getting_started/',
      {
        title: '通用',
        collapsable: false,
        children: [
          '/components/general/button.md',
          '/components/general/icon.md'
        ]
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          '/components/layout/grid.md',
          '/components/layout/layout.md'
        ]
      },
      {
        title: 'input',
        collapsable: false,
        children: [
          '/'
        ]
      },
    ]
  }
}