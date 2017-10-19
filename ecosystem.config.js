// ecosystem.config.js

module.exports = {
  /**
   * Application configuration section 应用配置部分
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      // 项目名称
      name      : 'wchat-sv',
      // 程序入口
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
    // 还可以配置第二个应用
    {
        // ... 
    }
  ],

  /**
   * Deployment section 部署部分
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      // 因为pm2要登录到服务器（Server）中执行命令，所以要提供 name 和 host
      // 这里没有提供密码，也就是为什么要配置ssh免密码登录
      user : 'root',    // 服务器用户名
      port:39999,
      host : '60.205.219.20',    // 服务器地址
      // 服务器（Server）需要获取GitHub上的仓库
      // 所以要配置Deploy Keys
      ref  : 'origin/master',   // 仓库名称，没有更改过的话默认即可
      // Github上的仓库地址
      repo : 'git@github.com:XiomgMingCai/pm2-zidong-bushu.git',
      path : '/root/www/pm2-zidong-bushu', // 应用部署到服务器的路径
      // 在服务器上执行的脚本命令，会在从Github上获取到最新的版本后执行
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '60.205.219.20',
      ref  : 'origin/master',
      repo : 'git@github.com:XiomgMingCai/pm2-zidong-bushu.git',
      path : '/root',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};

