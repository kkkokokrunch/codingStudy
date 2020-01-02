let lily = {
    name: 'lily',
    age: 20
}
let mary = {
    name: 'mary',
    age: 19
}

const people = new WeakSet([lily, mary])
console.log(people)
console.log(people.has(lily))

//weakset的元素只能是对象
//people.add('lucy')传入非对象的值会报错

//也不能使用for of和foreach
//没有clear方法

mary = null
console.log(people.has(mary)) //此时weakset中已经没有mary weakset有自动清除功能