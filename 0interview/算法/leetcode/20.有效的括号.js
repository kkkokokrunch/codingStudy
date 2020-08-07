/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) { //左括号就压入栈
      stack.push(s[i])
    } else if (s[i] !== map[stack.pop()]) { //如果是右括号且和栈顶的括号不匹配
      return false // 就错误
    }
  }
  return stack.length === 0
};