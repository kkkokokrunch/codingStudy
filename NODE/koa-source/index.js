let myKoa = require('./lib/application')
let app = new myKoa()

app.use((req,res) => {
    res.end('hello world!')
})
app.listen(3000)