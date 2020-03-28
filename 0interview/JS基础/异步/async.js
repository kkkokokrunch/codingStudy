const fs = require('fs')

const readFile = function(filename) {
  return new Promise((resolve,reject) => {
    fs.readFile(filename,(err,data)=> {
      if(err) reject(err)
      resolve(data)
    })
  })
}

//如何解决async出现问题，用try catch包裹await，或者在await后直接.catch
async function fn1() {
  try {
    let f1 = await readFile('data/a.txt')
    let f2 = await readFile('data/b.txt')
    let f3 = await readFile('data/c.txt')
  } catch (error) {
    
  }
  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}

fn1()

async function fn2() {
  let [a,b,c] = await Promise.all([
    readFile('data/a.txt'),
    readFile('data/b.txt'),
    readFile('data/c.txt')
  ])

  console.log(f1.toString())
  console.log(f2.toString())
  console.log(f3.toString())
}

fn2()


