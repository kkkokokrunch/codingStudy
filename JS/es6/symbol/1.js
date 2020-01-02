let hd = Symbol('123')
let edu = Symbol.for('456')
let zs = Symbol.for('456')
console.log(hd)
console.log(edu)
console.log(hd === edu)
console.log(edu === zs)

console.log(Symbol.keyFor(zs))