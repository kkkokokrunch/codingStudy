let promise = new Promise((resolve, reject) => {

  reject(111)
})
promise.catch(err => {
  console.log(err)
})