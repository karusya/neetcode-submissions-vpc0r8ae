class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */

    hammingWeight(n) {
        let result = 0;

         for (let i=31; i>=0; i--) {
            const bit = (n >> i) & 1;
            result = result + bit;
        }
        return result;
    }
}
