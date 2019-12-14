function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000)
    })
}

async function testResult() {
    //await要等待resolve执行完毕以后，才会执行
    let first = await doubleAfter2seconds(30)
    let second = await doubleAfter2seconds(50)
    let third = await doubleAfter2seconds(70)
    console.log(first + second + third)
}
testResult()
console.log('先执行')