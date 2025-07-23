---

---

# vuepress学习

## 项目创建

```bash
mkdir vuepress-starter
cd vuepress-starter
# 安装 vuepress
yarn add -D vuepress

#创建 docs 目录和 docs/.vuepress 目录
mkdir docs
mkdir docs/.vuepress
```

创建配置文件 docs/.vuepress/config.js

创建你的第一篇文档

```bash
echo '# Hello VuePress' > docs/README.md
```

目录结构

```json
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

根目录创建`.gitignore`文件

```
# VuePress 默认构建生成的静态文件目录
.vuepress/dist
```

启动开发服务器`yarn docs:dev` 

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```
# 安装打包工具和主题
yarn add vuepress-theme-reco
```

在config.js中引入

```js
module.exports = {
  // ...
  theme: 'reco'
  // ...
}  
```

创建一个 `.vuepress/styles/palette.styl` 文件，文件代码如下：

* 修改主题颜色

```
$accentColor = #c72e0f
```

部署

* 在项目 `vuepress-starter` 目录下建立一个脚本文件：`deploy.sh`，注意修改一下对应的用户名和仓库名：

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mafeiGitHub/afStudyNotes.git master:gh-pages

cd -

```

