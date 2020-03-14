/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s || s.length < 1) {
        return false
    }else {
        var stack = []
        for (i = 0 ;i < s.length;i++) {
            var c = s[i]
            if(c == '(') {
                stack.push(c)
            }else {
                if(stack.length < 1) {
                    return false
                }
                stack.pop()
            }
        }
    }
    return stack.length > 0 ? false : true
};

console.log(isValid('()'))