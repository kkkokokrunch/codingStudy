const people = new Map()
people.set('lily', 10)
people.set('lucy', 11)
people.set('jennie', 12)

console.log(people)

//map和对象最大的不同是，map的key可以是任意类型的
people.set({}, 3) //此时key为一个对象. set相当于add
console.log(people)
console.log(people.get('lily'))

console.log(people.size)
    //map同样有delete，clear,forEach,for of方法