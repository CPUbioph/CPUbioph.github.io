import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn in CPU",
  description: "中国药科大学生物制药学习资源平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '课程资料', link: '/courses/' },
      { text: '科研工具', link: '/tools/' },
      { text: '资源推荐', link: '/resources/' },
      { text: '关于本站', link: '/about/' }
    ],
  }
})
