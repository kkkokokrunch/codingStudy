/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//  return nums.sort()[nums.length/2]
// };
nums = [1, 2, 3, 2, 2, 2, 5, 4, 2]
console.log(nums.sort()[Math.floor(nums.length/2)])
// console.log(majorityElement(nums))