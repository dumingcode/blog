module.exports = {
  title: '笨鸟的blog',
  description: '笨鸟的blog',
  theme: '',
  themeConfig: {
    lastUpdated: 'Last Updated',
    date_format: 'yyyy-MM-dd HH:mm:ss',
    nav: [
      { text: 'archive', link: '/archive/timeline' },
      { text: 'blog', link: '/blog/' },
      { text: 'github', link: 'https://github.com/dumingcode' },
      { text: 'weibo', link: 'https://weibo.com/jake1036?refer_flag=1001030201_&display=0&retcode=6102' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '生活', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/生活/2018-04-15-北京长跑节半程马拉松',
          '/blog/生活/2018-04-15-我的小目标',
          '/blog/生活/2019-01-02-2019年学习目标'
        ]
      },
      {
        title: '读书', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/读书/2018-04-22-软技能代码之外的生存指南读书心得',
          '/blog/读书/2018-04-29-指数基金投资指南',
          '/blog/读书/2018-05-27-成功动机目标读书笔记',
          '/blog/读书/2018-07-18-刻意练习读书笔记',
          '/blog/读书/2018-07-30-一个人的朝圣',
          '/blog/读书/2018-08-13-穷查理宝典语句摘抄',
          '/blog/读书/2018-08-28-被遗忘的士兵',
          '/blog/读书/2018-09-10-巴菲特致股东的信1956-1969',
          '/blog/读书/2018-09-25-老唐谈格林厄姆思想',
          '/blog/读书/2018-10-07-价值投资新工具-股市温度计和股票束',
          '/blog/读书/2018-10-07-大数投资',
          '/blog/读书/2018-10-07-穿过迷雾-老巴投资经营思想',
          '/blog/读书/2018-10-15-投资者的未来',
          '/blog/读书/2018-10-29-影响力',
          '/blog/读书/2018-11-28-邻家的百万富翁',
          '/blog/读书/2019-01-21-巴比伦富翁理财课',
          '/blog/读书/2019-02-12-资产配置的艺术',
          '/blog/读书/2019-02-25-钱-7步创造终身收入',
          '/blog/读书/2019-03-04-有效资产管理',
          '/blog/读书/2019-04-17-不落俗套的成功',
          '/blog/读书/2019-04-17-中国社会小趋势',
          '/blog/读书/2019-05-24-机构投资的创新之路',
          '/blog/读书/2019-08-13-周期'
        ]
      },
      {
        title: '技术', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/技术/2018-04-23-ES6学习之路01',
          '/blog/技术/2018-04-24-ES6学习之路02',
          '/blog/技术/2018-04-25-ES6学习之路03',
          '/blog/技术/2018-04-26-我的常用git命令',
          '/blog/技术/2018-04-28-docker学习笔记01',
          '/blog/技术/2018-04-28-docker学习笔记02',
          '/blog/技术/2018-04-30-docker学习笔记03',
          '/blog/技术/2018-05-01-nodejs学习之路01',
          '/blog/技术/2018-05-02-ES6学习之路04',
          '/blog/技术/2018-05-03-ES6学习之路05',
          '/blog/技术/2018-05-06-nodejs学习之路02',
          '/blog/技术/2018-05-07-nodejs学习之路03',
          '/blog/技术/2018-05-08-ES6学习之路06_Promise深入',
          '/blog/技术/2018-05-09-ES6学习之路07_Promise与async深入',
          '/blog/技术/2018-05-11-koa2学习之路-01',
          '/blog/技术/2018-05-11-koa2学习之路-02',
          '/blog/技术/2018-05-15-github_travis_coveralls自动集成自动部署',
          '/blog/技术/2018-06-02-travis自动部署阿里云',
          '/blog/技术/2018-06-10-iview使用validator校验数字范围',
          '/blog/技术/2018-08-04-promise学习01',
          '/blog/技术/2018-08-04-promise学习02',
          '/blog/技术/2018-08-04-promise学习03',
          '/blog/技术/2018-08-04-promise学习04',
          '/blog/技术/2018-08-27-elk日志聚合监控',
          '/blog/技术/2019-01-24-深入浅出数据分析01',
          '/blog/技术/2019-03-15-dev十八般武器01ES搜索引擎',
          '/blog/技术/2019-03-20-dev十八般武器02缓存技术',
          '/blog/技术/2019-03-25-dev十八般武器03-redis总结',
          '/blog/技术/2019-03-25-dev十八般武器04-分库分表',
          '/blog/技术/2019-03-26-dev十八般武器05-高并发设计',
          '/blog/技术/2019-06-26-nodejs最佳实践'
        ]
      },
      {
        title: '投资', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/投资/2018-10-29-股债平衡策略',
          '/blog/投资/2018-12-10-指数roe分析',
          '/blog/投资/2019-01-21-小韭资产配置',
          '/blog/投资/2019-02-11-低相关性指数构建资产组合',
          '/blog/投资/2019-02-19-简化版全天候投资策略',
          '/blog/投资/2019-02-20-指数季度再平衡VaR计算阈值',
          '/blog/投资/2019-03-27-债券基金投资',
          '/blog/投资/2019-05-08-E大春节特辑整理',
          '/blog/投资/2019-05-28-E大网格策略'
        ]
      }, {
        title: '设计模式', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/设计模式/2018-09-21-设计模式01-设计模式概论',
          '/blog/设计模式/2018-10-31-设计模式02-桥接模式',
          '/blog/设计模式/2018-11-05-设计模式03-组合模式',
          '/blog/设计模式/2018-11-08-设计模式04-装饰模式',
          '/blog/设计模式/2018-11-12-设计模式05-策略模式',
          '/blog/设计模式/2018-11-16-设计模式06-依赖倒转模式',
          '/blog/设计模式/2018-11-16-设计模式07-代理模式',
          '/blog/设计模式/2018-11-16-设计模式08-原型模式',
          '/blog/设计模式/2018-11-16-设计模式09-模板模式',
          '/blog/设计模式/2018-11-16-设计模式10-外观模式',
          '/blog/设计模式/2018-11-22-设计模式11-建造者模式',
          '/blog/设计模式/2018-11-30-设计模式12-观察者模式',
          '/blog/设计模式/2018-11-30-设计模式13-抽象工厂模式',
          '/blog/设计模式/2018-12-03-设计模式14-状态模式',
          '/blog/设计模式/2018-12-10-设计模式15-适配器模式',
          '/blog/设计模式/2018-12-10-设计模式16-备忘录模式',
          '/blog/设计模式/2018-12-10-设计模式17-迭代器模式',
          '/blog/设计模式/2018-12-18-设计模式18-单例模式',
          '/blog/设计模式/2018-12-18-设计模式19-命令模式',
          '/blog/设计模式/2018-12-18-设计模式20-职责链模式',
          '/blog/设计模式/2018-12-27-设计模式21-中介者模式',
          '/blog/设计模式/2018-12-27-设计模式22-享元模式',
          '/blog/设计模式/2018-12-27-设计模式23-解释器模式',
          '/blog/设计模式/2018-12-27-设计模式24-访问者模式',
          '/blog/设计模式/2019-01-17-设计模式总结'
        ]
      }, {
        title: '微服务', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/微服务/2018-07-30-微服务限流',
          '/blog/微服务/2018-08-01-微服务设计笔记01',
          '/blog/微服务/2018-08-02-微服务设计笔记02',
          '/blog/微服务/2018-08-03-微服务设计笔记03',
          '/blog/微服务/2018-08-08-微服务设计笔记04',
          '/blog/微服务/2018-08-09-微服务设计笔记05',
          '/blog/微服务/2018-08-14-微服务设计笔记06',
          '/blog/微服务/2018-08-17-微服务设计笔记07',
          '/blog/微服务/2018-08-18-微服务实践01-服务中心eureka',
          '/blog/微服务/2018-08-18-微服务实践02-eureka服务提供者和消费者',
          '/blog/微服务/2018-08-18-微服务实践03-熔断器Hystrix',
          '/blog/微服务/2018-08-19-微服务实践04-熔断监控Hystrix Dashboard和Turbine',
          '/blog/微服务/2018-08-20-微服务设计笔记08',
          '/blog/微服务/2018-08-22-微服务设计笔记09',
          '/blog/微服务/2018-08-23-微服务设计笔记10',
          '/blog/微服务/2018-09-02-微服务实践05-配置中心git',
          '/blog/微服务/2018-09-04-微服务实践06-配置中心git自动refresh',
          '/blog/微服务/2018-09-04-微服务实践07-配置中心服务化以及高可用',
          '/blog/微服务/2018-09-04-微服务设计笔记11',
          '/blog/微服务/2018-09-04-微服务设计笔记12',
          '/blog/微服务/2018-09-05-微服务架构学习01-初探微服务架构',
          '/blog/微服务/2018-09-05-微服务架构学习02-服务注册和发现',
          '/blog/微服务/2018-09-08-微服务架构学习03-如何实现RPC远程服务调用',
          '/blog/微服务/2018-09-10-微服务架构学习04-如何监控微服务调用',
          '/blog/微服务/2018-09-12-微服务架构学习05-如何追踪微服务调用',
          '/blog/微服务/2018-09-13-微服务架构学习06-微服务治理的手段',
          '/blog/微服务/2018-09-17-微服务架构学习07-Dubbo框架里的微服务组件',
          '/blog/微服务/2018-09-18-微服务架构学习08-如何将注册中心落地',
          '/blog/微服务/2018-09-20-微服务架构学习09-开源注册中心选型',
          '/blog/微服务/2018-09-25-微服务架构学习10-开源RPC框架如何选',
          '/blog/微服务/2018-09-27-微服务架构学习11-如何搭建一个可靠的监控系统',
          '/blog/微服务/2018-10-08-微服务架构学习12-如何搭建一套服务追踪系统',
          '/blog/微服务/2018-10-09-微服务架构学习13-如何识别服务节点是否存活',
          '/blog/微服务/2018-10-10-微服务架构学习14-如何使用负载均衡算法',
          '/blog/微服务/2018-10-10-微服务架构学习15-如何使用服务路由',
          '/blog/微服务/2018-10-16-微服务架构学习16-服务端出现故障如何应对',
          '/blog/微服务/2018-10-22-微服务架构学习17-服务调用失败时有哪些处理手段',
          '/blog/微服务/2018-10-22-微服务架构学习18-服务配置管理',
          '/blog/微服务/2018-10-22-微服务架构学习19-搭建微服务治理平台',
          '/blog/微服务/2018-10-22-微服务架构学习20-微服务容器化',
          '/blog/微服务/2018-10-23-微服务架构学习21-微服务容器化运维',
          '/blog/微服务/2018-10-24-微服务架构学习22-容器调度和服务编排',
          '/blog/微服务/2018-10-26-微服务架构学习23-容器运维平台DCP',
          '/blog/微服务/2018-10-26-微服务架构学习24-微服务实现DevOps',
          '/blog/微服务/2018-11-05-微服务架构学习25-微服务容量规划',
          '/blog/微服务/2018-11-08-微服务架构学习26-多机房部署实践',
          '/blog/微服务/2018-11-08-微服务架构学习27-微服务混合云部署',
          '/blog/微服务/2019-01-24-微服务架构学习28-微服务总结'
        ]
      }, {
        title: 'devops', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '/blog/devops/2018-04-21-hexo使用jenkins自动部署到阿里云',
          '/blog/devops/2019-05-16-源码编译安装nodejs',
          '/blog/devops/2019-05-16-阿里云内网机通过代理访问外网',
          '/blog/devops/2019-06-03-redis集群部署与数据迁移',
          '/blog/devops/2019-08-14-skyWalking部署',
          '/blog/devops/2019-09-19-docker学习总结'
        ]
      }
    ]
  }
}
