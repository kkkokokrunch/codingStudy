var fs = require('fs');
var AipOcrClient = require('baidu-aip-sdk').ocr; //图片识别？从图片中提取文字
var image = fs.readFileSync('./car-num.jpg').toString('base64')
var APP_ID = '17799058';
var API_KEY = 'c4NSmGLsRjoa9MoGQdynOer2';
var SECRET_KEY = 'DayWqm5hiE9ObN3odrrsegM2G1GXg28Z ';
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
var options = {};
client.licensePlate(image, options)
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err);
    })