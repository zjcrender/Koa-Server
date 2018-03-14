const Koa = require('koa'),
      onerror = require('koa-onerror'),
      logger = require('koa-logger'),
      json = require('koa-json'),
      static = require('koa-static'),
      bodyparse = require('koa-bodyparser');

const index = require('./router/index');
const user = require('./router/user');

const app = new Koa();

// 错误处理
onerror(app);

// 中间件
app.use(bodyparse())
   .use(json())
   .use(logger())
   .use(static(`${__dirname}/public`))
   .use(index.routes(), index.allowedMethods())
   .use(user.routes(), user.allowedMethods());

module.exports = app;
