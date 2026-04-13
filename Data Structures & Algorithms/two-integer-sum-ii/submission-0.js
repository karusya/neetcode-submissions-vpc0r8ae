class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        /**two pointers one at the start and one in the end */
        let L = 0, R = numbers.length-1;
        while (L < R) {  
            if (numbers[L] + numbers[R] > target){
                R--;
            } else if (numbers[L] + numbers[R] < target) {
                L++;
            } else if (numbers[L] + numbers[R] === target) {
                 return [L+1, R+1];
            }
        }
        return [];
       

    }
}
