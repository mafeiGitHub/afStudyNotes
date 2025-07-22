module.exports = {
  base: '/afStudyNotes/',
  title: "TypeScript4文档",
  description: "TypeScript4最新官方文档翻译",
  theme:'reco',
  locales:{
    '/':{
      lang:'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "阿飞的博客",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/712139234359182/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, //不折叠
        children: [
          {
            title: "学前必读",
            path: "/",
          },
        ],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, //不折叠
        children: [
          {
            title: "条件类型",
            path: "/handbook/ConditionalTypes",
          },
          {
            title: "泛型",
            path: "/handbook/Generics",
          },
        ],
      },
    ],
  },
};
