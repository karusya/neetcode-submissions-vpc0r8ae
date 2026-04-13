class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let bottom = 0;
        let top = nums.length-1;
        while (bottom <= top){
            let mid = Math.floor((bottom+top)/2);
            let guess = nums[mid];
            if  (guess=== target){
                return mid;
            }
            if (guess < target) {
                bottom=mid+1;
            } else {
                top=mid-1;
            }
        }
        return -1;
    }
}
