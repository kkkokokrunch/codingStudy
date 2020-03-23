/**
 * @param {number} target
 * @return {number[][]}
 */

 //滑动窗口，左右指针都向右边移动
var findContinuousSequence = function(target) {
  let l = 1,r = 1,sum = 0,res = []
  while(l <= Math.round(target/2)) {
    if(sum === target) {
      let temp = []
      for(let i = l;i < r;i++) {
        temp.push(i)
      }
      res.push(temp)
      sum -=l
      l++
    }else if(sum > target) {
      sum -=l
      l++
    }else {
      sum += r
      r++
    }
  }
  return res
};
