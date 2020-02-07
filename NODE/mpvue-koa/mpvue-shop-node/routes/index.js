const router = require('koa-router')({
    prefix: '/lm'
  })
  const controllers = require('../controllers/index')
  
  //首页相关接口
  router.get('/index/index', controllers.home.index)
  
  //搜索相关接口
  router.get('/search/indexaction',controllers.search.index.indexAction)
  router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
  router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction)
  router.get('/search/helperaction', controllers.search.index.helperAction)
  module.exports = router