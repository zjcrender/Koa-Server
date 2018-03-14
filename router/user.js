const router = require('koa-router')();
router.prefix('/user');

router.get('/', async ctx => {
    ctx.body = 'hithere';
})

module.exports = router;