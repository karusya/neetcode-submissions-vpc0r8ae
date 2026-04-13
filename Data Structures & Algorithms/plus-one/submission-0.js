class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const l=digits.length;
        for(let i = l- 1; i>= 0; i--) {
            if(digits[i]<9) {
                digits[i]+= 1;
                return digits;
            }
            digits[i] = 0;
        }
        digits.unshift(1);
        return digits; 
    }
}
