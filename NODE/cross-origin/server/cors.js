const http = require('http')

http.createServer((req, res) => {
        console.log(req.url, req.method)
        res.writeHead(200, {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'X-auth, content-type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Credential': true
            })
            // res.end(JSON.stringify({
            //     bookName: 'php'
            // }))
        res.end(`getBook(${JSON.stringify({bookName:'php'})})`)
    })
    .listen(3000, () => {
        console.log('server is running')
    })