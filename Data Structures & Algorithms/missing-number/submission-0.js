class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        let xorFull = 0;
        let xorMiss = 0;
        for (let i=0; i<=n; i++ ){
            xorFull ^= i;
        }

        for (let nu of nums){
            xorMiss ^= nu;
        }

        return xorFull ^ xorMiss;
    }
}
