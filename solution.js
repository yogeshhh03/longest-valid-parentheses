/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    let stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}

// Test Cases
console.log(longestValidParentheses("(()"));      // 2
console.log(longestValidParentheses(")()())"));   // 4
console.log(longestValidParentheses(""));         // 0
console.log(longestValidParentheses("()(())"));   // 6
