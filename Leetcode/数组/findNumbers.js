/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let arr = []
    for(let num of nums) {
        let length = num.toString().length
        if(length % 2 === 0) {
            arr.push(num)
        }
    }

    return arr.length
};

nums = [555,901,482,1771]

console.log(findNumbers(nums)) 