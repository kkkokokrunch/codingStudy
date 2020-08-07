function setname(name) {
  this.name = name
}
setname.prototype.printName = function () {
  console.log(this.name)
}
let a = new setname("cc")
a.name = "dd"
a.__proto__.name = "ee"

console.log(a.__proto__.printName()) // ?
console.log(a.printName()) // ?