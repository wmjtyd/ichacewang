
# 项目名称

## 软件版本

- TypeScript
- Node.js v19.7.0
- Vue 3
- Nuxt 3
- Prisma
- trpc

## 清理和启动命令

清理和启动命令用于准备和启动项目。请按以下步骤执行：

```bash
# 清理项目
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
rm -rf .nuxt

# 启动项目
npm run dev
```

## 工程结构

项目的工程结构如下：

```
project-name/
|-- assets/                 # 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
|-- components/             # Vue 组件
|-- layouts/                # 应用布局模板
|-- middleware/             # 应用的中间件
|-- pages/                  # 应用的视图和路由
|-- plugins/                # 需要运行在 Vue 应用启动之前的 Javascript 插件
|-- public/                 # 静态文件，被直接映射到服务器根路径
|-- server/                 # 服务器端的 API 路由等
|-- store/                  # 状态管理
|-- .env                    # 环境变量文件
|-- nuxt.config.ts          # Nuxt 配置文件
|-- package.json            # 项目依赖和脚本
|-- README.md               # 项目 README 文件
|-- tsconfig.json           # TypeScript 配置文件
```

## 项目目标

本项目的目标是通过模仿目标网站 [www.chacewang.com](www.chacewang.com) 来形成团队前端框架。

## github 提交修改
- git add 修改的文件
- git commit -m "更新 的内容"
- git push origin main
