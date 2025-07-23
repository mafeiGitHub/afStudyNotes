module.exports = {
  base: "/afStudyNotes/",
  title: "学习文档",
  description: "前端文档记录",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "阿飞的博客",
        items: [
          { text: "Github", link: "https://github.com/mafeiGitHub" },
          {
            text: "博客园",
            link: "https://www.cnblogs.com/ma1998",
          },
          {
            text: "掘金",
            link: "https://juejin.cn/user/1406995818099048/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        collapsable: false, //不折叠
        children: [
          {
            title: "学前必读",
            path: "/",
          },
        ],
      },
      {
        title: "VuePress",
        collapsable: false, //不折叠
        children: [
          {
            title: "VuePress-study01",
            path: "/handbook/VuePress/VuePress01",
          },
        ],
      },
      {
        title: "基础学习",
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
