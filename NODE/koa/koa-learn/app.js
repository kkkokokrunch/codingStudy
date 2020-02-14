var Koa = require('koa')
var Router = require('koa-router')
var bodyParser = require('koa-bodyparser')

var app = new Koa()
var router = new Router()


app.use(bodyParser())
//配置路由
// router.get('/',async (ctx)=> {
//     ctx.body = '首页' //返回数据 
// }).get('/news',async (ctx) => {
//     ctx.body = '这是新闻页面'
// })
//或者
router.get('/',async (ctx)=> {
    ctx.body = '首页' //返回数据 
})
router.get('/news',async (ctx) => {
    ctx.body = '这是新闻页面'

    //congctx中读取get传值
    console.log(ctx.query) //获取的是对象 等价于ctx.request.query
    console.log(ctx.querystring) //获取的是字符串
})

//动态路由
router.get('/newscontent/:aid',async (ctx) => {
    console.log(ctx.params)
    ctx.body='新闻详情'
})


//获取post数据
router.post('/doAdd',async (ctx) => {
    //获取表单提交的数据
    ctx.body = ctx.request.body
})

//启动路由
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)