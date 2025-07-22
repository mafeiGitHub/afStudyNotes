#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

git init
git add -A
git commit -m 'deploy'

# 主代码提交到 main 分支（不包括 dist 和 node_modules）
cd $(dirname "$0")
echo "dist/" > .gitignore
echo "node_modules/" >> .gitignore
git add .
git commit -m 'update main code'
git pull origin main --rebase
git push origin main

# 进入生成的文件夹，部署到 gh-pages 分支
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:mafeiGitHub/afStudyNotes.git master:gh-pages

cd -
