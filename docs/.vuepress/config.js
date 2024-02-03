module.exports = {
    theme: 'vuepress-theme-qbook',
    title: '博客模板',
    themeConfig: {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F13%2F20200513161213_vnkdf.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1709524661&t=5acefe73b49fb131e880dbe6f0d720f1",
        logo: "/logo.png",
        name: "qbook主题示例",
        desc: "by open17 ",
        pics: [
            {
                img: 'default_bg.jpg',
                color: 'rgba(92, 101, 124, 0.1)'
            },
            {
                img: 'default_bg2.jpg',
                color: 'rgba(92, 101, 124, 0.1)'
            }
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
                        text: "你好世界",
                        link: "post/2024/02/02/helloworld/",
                    },
                    {
                        text: "示例",
                        link: "post/2024/02/03/example1/",
                    },
                ]
            },
        ],
        mdDefaultTheme: "light",
        mdCodeTheme: ["atom-one-dark", "atom-one-light"]
    }
}