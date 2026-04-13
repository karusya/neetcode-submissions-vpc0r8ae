class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    sumOfSquares(n) {
        let sum = 0;
        while (n >0) {
            const digit = n%10; // we take the last digit here 
            sum += digit*digit;
            n = Math.floor(n / 10);
        }
    return sum;
    }

    isHappy(n) {
        let seen = new Set();
        while (n !== 1) {
        if (seen.has(n)) {
            return false;
         }
        seen.add(n);
        n = this.sumOfSquares(n);
        }
        return true;
    }

}
