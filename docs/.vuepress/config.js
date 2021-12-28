module.exports = {
	// 站点配置
	lang: 'zh-CN',
	title: '你好， VuePress ！',
	description: '这是我的第一个 VuePress 站点',

	// 主题和它的配置
	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: 'https://vuejs.org/images/logo.png',
		locales: {
			'/': {
				selectLanguageName: 'English',
			},
			'/zh/': {
				selectLanguageName: '简体中文',
			},
		},
		navbar: [
			// 嵌套 Group - 最大深度为 2
			{
				text: '常用工具',
				children: [{
					text: '转换工具',
					children: [{
							text: 'json',
							link: 'https://json.cn/'
						},
						{
							text: 'yaml转换',
							link: 'https://www.toyaml.com/index.html'
						},
					],
				}, ],
			},
			// 控制元素何时被激活
			{
				text: '其他站点',
				children: [{
						text: 'Always active',
						link: '/',
						// 该元素将一直处于激活状态
						activeMatch: '/',
					},
					{
						text: 'Active on /foo/',
						link: '/not-foo/',
						// 该元素在当前路由路径是 /foo/ 开头时激活
						// 支持正则表达式
						activeMatch: '^/foo/',
					},
				],
			},
		],
		// 侧边栏对象
		// 不同子路径下的页面会使用不同的侧边栏
		sidebar: [
			// SidebarItem
			{
				text: 'java',
				link: '/foo/',
				children: [
					// SidebarItem
					{
						text: '数据结构',
						link: '/java/datastructure/index.md',
					},
					{
						text: '算法',
						link: 'https://github.com',
						children: [],
					},
					// 字符串 - 页面文件路径
					'/foo/bar.md',
				],
			},
			// 字符串 - 页面文件路径
			'/bar/README.md',
		],
		sidebarDepth: 3
	},
}
