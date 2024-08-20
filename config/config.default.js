/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1724136857627_1390';

  // add your middleware config here
  config.middleware = [];

  //cors
  config.cors = {
    origin:"*",
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // add your user config here
  const userConfig = {
    myAppName: 'egg',
    static: {
      prefix: '/assets/', // 设置静态资源的URL前缀
      dir: 'app/public' // 指定静态资源所在的目录
    },
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '159.75.69.188',
        // 端口号
        port: '3307',
        // 用户名
        user: 'root',
        // 密码
        password: 'Sx20131129!',
        // 数据库名
        database: 'eggtest',
      },
      // 是否加载到app上，默认开启
      app: true,
      // 是否加载到agent上，默认关闭
      agent: false,
    },
    bodyParser: {
      jsonLimit: '1Mb',
    },
    security:{
      enable: true,
      csrf: {
        exclude: ['/public/**', '/favicon.ico', '/static/**'],
        tokenName: 'XSRF-TOKEN',
        tokenLife: 15 * 60,
        getToken: function(ctx) {
          return ctx.cookies.get(ctx.app.userConfig.security.csrf.tokenName);
        },
      },
    }
  };
  return {   
    ...config,
    ...userConfig,
  };
};
