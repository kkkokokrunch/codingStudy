const Koa = require('koa')
const config = require('./config')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./routes')

app.use(bodyParser())
app.use(router.routes())

app.listen(config.port, () => {
  console.log(`server is started at port ${config.port}`)
})