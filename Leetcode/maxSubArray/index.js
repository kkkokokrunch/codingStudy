/**
 * @param {number[]} nums
 * @return {number}
 */
var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var maxSubArray = function(nums) {
    let i, k, j
    let thisSum
    let maxSum = -Number.MAX_VALUE
    for (i = 0; i < nums.length; i++) {
        for (k = i; k < nums.length; k++) {
            thisSum = 0
            for (j = i; j <= k; j++) {
                thisSum += nums[j]
            }
            if (thisSum > maxSum) {
                maxSum = thisSum
            }
        }
    }
    return maxSum
};

console.log(maxSubArray(arr))