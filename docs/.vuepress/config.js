module.exports = {
    theme: 'vuepress-theme-qbook',
    title: '博客模板',
    description: 'qbook博客示例模板',
    head: [
        // SEO优化
        ["meta", { name: "keywords", content: "open17, 博客, vuepress, vuepress-theme-qbook, vuepress-theme, 主题, IT", },],
        // PWA图标补全
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'icon/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icon/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icon/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: 'icon/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: 'icon/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#603cba' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                //自定义PWA组件
                popupComponent: 'MySWUpdatePopup',
                updatePopup: {
                    message: "铛铛铛~博客已更新!",
                    buttonText: "立刻刷新!",
                }
            }
        ]
    ],
    themeConfig: {
        // 头像
        avatar: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402180055280.webp",
        defaultPostImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082314316.jpg",
        defaultCardImg: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082335721.jpg",
        homeWallpaper: "https://cdn.jsdelivr.net/gh/open17/Pic/img/202402100325389.webp",
        // 导航栏logo
        logo: "icon/android-chrome-512x512.png",
        name: "我的博客",
        desc: "by open17 ",
        // SNS图标
        sns: [
            {
                type: "github",
                link: "https://github.com/open17/vuepress-theme-qbook-template"
            },
            {
                type: "custom",
                link: "https://qbook.open17.vip/",
                svg: `<svg t="1707409272024" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4718" width="200" height="200"><path d="M463.736 2.13C290.65 28.76 144.193 111.973 47.666 288.387S-45.535 1020.67 513.663 1024c0 0 169.757-15.578 9.986-160.97 0 0-51.127-97.593 62.044-115.301 0 0 159.772 4.394 179.743 0s264.155-51.127 259.628-312.885S730.021-22.368 463.735 2.13zM194.122 518.058a89.871 89.871 0 0 1-89.871-89.871 89.871 89.871 0 0 1 89.871-89.872 89.871 89.871 0 0 1 89.871 89.872 90.004 90.004 0 0 1-89.871 89.871z m196.652-226.342a90.004 90.004 0 0 1-110.376-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.376 110.508z m282.928 0a90.004 90.004 0 0 1-110.11-62.977 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 109.976 63.11 90.004 90.004 0 0 1-62.976 110.375z m169.49 223.147a90.004 90.004 0 0 1-110.375-63.11 90.004 90.004 0 0 1 63.11-110.375 90.004 90.004 0 0 1 110.375 63.11 90.004 90.004 0 0 1-63.11 110.375z" p-id="4719"></path></svg>`,
                color: "#c13584"
            },
        ],
        nav: [
            {
                text: '主页',
                link: '/',
                icon: 'el-icon-cold-drink'
            },

            {
                text: '标签',
                link: '/tags/',
            },
            {
                text: '使用指南',
                link: '/use/',
                icon: 'el-icon-bicycle'
            },
            {
                text: '关于',
                link: '/about/',
                icon: 'el-icon-user'
            },
        ],
        sideBar: [
            {
                title: "文档示例",
                icon: "el-icon-chat-line-square",
                links: [
                    {
                        text: "使用指南",
                        link: "/use/",
                    },
                    {
                        text: "关于",
                        link: "/about/",
                    },
                ]
            },
            {
                title: "博客示例",
                icon: "el-icon-camera",
                links: [
                    {
                        text: "示例",
                        link: "post/2024/02/03/example/",
                    },
                    {
                        text: "PWA",
                        link: "post/2024/02/18/pwa/",
                    },
                ]
            },
        ],
        mdDefaultTheme: "light",
        mdCodeTheme: ["atom-one-dark"]
    }
}