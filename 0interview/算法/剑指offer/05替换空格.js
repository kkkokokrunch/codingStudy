/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  var arr = s.split('')
  for(let i = 0;i<arr.length;i++) {
    if(arr[i] === ' ') {
      arr[i] = '%20'
    }
  }
  return arr.join('')
};
s = "We are happy."
console.log(replaceSpace(s))