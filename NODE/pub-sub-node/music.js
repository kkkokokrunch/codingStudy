// 发布订阅设计模式  使用Node搜索歌曲

// node music.js 内容
// console.log(process.argv);
const request = require('request');
const Events = require('events');
const ev = new Events();

function main(argv) {
    if (argv.length) {
        let search = argv[0];
        console.log(search);
        // 模块解耦
        ev.emit('search', search)
    }
}

// 搜索模块
ev.on('search', (search) => {
    // /search?keywords=海阔天空
    // http
    search = encodeURIComponent(search); //编码
    request({
        method: 'GET',
        json: true,
        url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${search}`
    }, (err, body) => {
        if (err) {
            console.log('搜索出错', err)
        } else {
            console.log(body.body);
        }
    })
})

main(process.argv.slice(2));