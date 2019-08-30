module.exports = {
    title: '笨鸟', 
    description: '笨鸟的blog',
	themeConfig: { 
		lastUpdated: 'Last Updated',
		date_format: 'yyyy-MM-dd HH:mm:ss',
		nav: [
			{ text: 'home', link: '/' },
			{ text: 'blog', link: '/blog/' },
		  { text: 'github', link: 'https://github.com/dumingcode' },
		  { text: 'weibo', link: 'https://weibo.com/jake1036?refer_flag=1001030201_&display=0&retcode=6102' }
		],
		sidebar: [
			{
				title: '生活', // 侧边栏名称
 				collapsable: true, // 可折叠
				children: [
				   '/blog/2018-04-15-北京长跑节半程马拉松.md',
				   '/blog/2018-04-15-我的小目标'
				]
		   },
		   {
				title: '技术', // 侧边栏名称
				collapsable: true, // 可折叠
				children: [
				'/blog/2018-04-22-软技能代码之外的生存指南读书心得.md'
				]
	   		}
		]
    }
}