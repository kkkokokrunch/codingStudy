/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  
  return arr.sort((a,b) => {
    return a-b
  }).splice(0,k)

};
console.log(getLeastNumbers([1,3,5,6,2,4],2))