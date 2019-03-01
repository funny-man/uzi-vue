module.exports = {
  title: 'Hello Uzi',
  base: '/uzi-vue/',
  description: '基于Vue的个人Ui组件库，ui的设计都是自己完成，轻巧、美观（个人审美）,希望你喜欢！',
  themeConfig: {
    nav: [
      { text: 'aaaa', link: '/' },
      { text: 'bbbb', link: 'https://baidu.com' },
      { text: 'cccc', link: 'https://google.com' },
    ],
    sidebar: [
      '/install/',
      '/getting_started/',
      {
        title: '通用',
        collapsable: false,
        children: [
          '/components/general/button.md'
        ]
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          '/'
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