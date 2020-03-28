const fs = require('fs')

const readFile = function(filename) {
  return new Promise((resolve,reject) => {
    fs.readFile(filename,(err,data)=> {
      if(err) reject(err)
      resolve(data)
    })
  })
}

function *gen() {
  yield readFile('data/a.txt')
  yield readFile('data/b.txt')
  yield readFile('data/c.txt')
}

//生成器会返回一个迭代器
let g1 = gen()

//通过迭代器的next()方法取出值
g1.next().value.then(res=> {
  console.log(res.toString())
  return g1.next().value
}).then(res => {
  console.log(res.toString())
  return g1.next().value
}).then(res => {
  console.log(res.toString())
})