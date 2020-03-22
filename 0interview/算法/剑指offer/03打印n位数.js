/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  if(n <= 0) return
  var num = Math.pow(10,n)
  var arr = []
  for(let i = 1;i < num;i++) {
    arr.push(i)
  }
  return arr
};
console.log(printNumbers(2))