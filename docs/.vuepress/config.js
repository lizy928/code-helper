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
			{
				text: '开发手册',
				children: [{
					text: '文档手册',
					children: [{
							text: 'vue',
							link: 'https://cn.vuejs.org/v2/api/'
						},
						{
							text: 'vuex',
							link: 'https://vuex.vuejs.org/zh/api/#vuex-store'
						},
						{
							text: 'Axios',
							link: 'https://www.kancloud.cn/yunye/axios/234845'
						},
						{
							text: 'jQuery',
							link: 'https://www.jquery123.com/'
						},
						{
							text: 'bootstrap',
							link: 'https://www.runoob.com/bootstrap/bootstrap-tutorial.html'
						},
						{
							text: 'markdown语法',
							link: 'https://commonmark.org/help/'
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
						link: '/java/algorithm/index.vue',
						children: [],
					},
					{
						text: 'jvm',
						link: '/java/jvm/index.md',
						//children: [],
					},
					{
						text: 'jdk',
						link: '/java/jdk/index.md',
						//children: [],
					},
					{
						text: '集合',
						children: [{
								text: '概述',
								link: '/java/algorithm/index.vue',
								children: [],
							},
							{
								text: 'HashMap',
								link: '/java/collection/hashmap.md',
								children: [],
							},
							{
								text: 'ArrayList',
								link: '/java/collection/arraylist.md',
								children: [],
							},
						],
					},
				],
			},
			{
				text: '前端',
				link: '/foo/',
				children: [{
						text: '关于前端',
						link: '/foo/',
						children: []
					},
					{
						text: 'vue',
						link: '/front/vue/index.md',
						children: []
					},
				]
			},
		],
		sidebarDepth: 3
	},
}
