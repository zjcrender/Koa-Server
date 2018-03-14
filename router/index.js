const router = require('koa-router')();

router.all('/test', async ctx => {
    ctx.body = {
        name: 'render',
        message: 'hello world',
    }
})

module.exports = router;