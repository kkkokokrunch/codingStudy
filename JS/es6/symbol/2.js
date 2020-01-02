let user1 = {
    name:'李四',
    key:Symbol()
}
let user2 = {
    name:'李四',
    key:Symbol()
}
let grade = {
    [user1.key]: {
        js:100,
        css:100
    },
    [user2.key]: {
        js:90,
        css:90
    }
}
console.log(grade)