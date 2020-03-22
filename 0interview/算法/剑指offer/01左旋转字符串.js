/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  var arr = s.split('')
  for(let i = 0;i < n;i++) {
    var item = ''
    item = arr.shift()
    arr.push(item)
  }
  return arr.join('')
};



// 更简单的方法
var reverseLeftWords = function(s, n) {
  return s.slice(n) + s.slice(0, n);
};
