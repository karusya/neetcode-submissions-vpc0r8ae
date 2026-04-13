class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for(let char of s){
            if (['(','[','{'].includes(char)){
                stack.push(char);
            } else if ([ ')',']','}'].includes(char)){
                const last = stack.pop();
                if (last !== pairs[char]) {
                    return false; // invalid immediately
                }
            }
        }
       return stack.length === 0;
    }
}
