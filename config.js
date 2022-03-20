// 配置
window.Config = {

  // 站点名
  SiteName: '晓晨の小屋 服务器状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791000515-0c9a10a827f55121dfd7a88a',
    'm791000526-cec39f5c53db1d8a9335bdfc',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
    {
      text: '晓晨blog',
      url: 'https://www.axcz.cn/'
    },
    {
      text: '晓晨图床',
      url: 'https://img.nmb.al'
    }
  ]
};
