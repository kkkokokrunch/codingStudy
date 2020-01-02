const user = [
    {name:"张三",js:89},
    {name:"李四",js:99},
    {name:"王五",js:59}
]

const res = user.every(item => {
    return item.js > 60
})

console.log(res ? '都及格':'有人没及格')

