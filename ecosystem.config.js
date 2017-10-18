module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: 'pm2-zidong-bushu',
            script: 'server.js',
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'root',
            host: '60.205.219.20',
            ref: 'origin/master',
            repo: 'git@github.com:XiomgMingCai/pm2-zidong-bushu.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            env: {
                NODE_ENV: 'production'
            }
        },
        dev: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/development',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env dev',
            env: {
                NODE_ENV: 'dev'
            }
        }
    }
};
