var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify; //图片分类
var fs = require('fs')
var APP_ID = "17798929"
var API_KEY = "SWbx2wKPcg9SASlMpui6ONGs"
var SECRET_KEY = "kQCkQoORs1eoZrzZuFRlW1laacVgELto"

var image = fs.readFileSync('./car.jpg').toString("base64") //同步
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)
client.carDetect(image)
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })
    // console.log(img)