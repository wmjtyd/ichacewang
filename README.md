一、软件版本
TypeScript Nodejsv19.7.0 Vue3 Nuxt3 Prisma trpc

二、清理启动命令
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
rm -rf .nuxt
npm run dev

三、工程结构
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

四、目标：通过模仿目标网站：www.chacewang.com 形成团队前端框架