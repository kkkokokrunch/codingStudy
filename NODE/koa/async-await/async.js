async function timeout() {
    return 'hello world'
}
// console.log(timeout())
timeout().then(res => {
    console.log(res)
})

// async function timeout() {
//     throw new Error('rejected')

// }
// console.log(timeout())