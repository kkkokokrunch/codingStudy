/**
 * @param {number[]} nums
 * @return {number}
 */
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function(nums) {
    let maxSum = -Number.MAX_VALUE
    let sum = 0
    for (let num of arr) {
        if (sum < 0) {
            sum = 0
        }
        sum += num
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}