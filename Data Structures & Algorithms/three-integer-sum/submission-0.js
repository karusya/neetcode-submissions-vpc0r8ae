class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a,b)=> (a-b))
        let res = []

        for (let i = 0; i < sortedNums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let L = i + 1, R = sortedNums.length-1;
            while (L < R) { 
              const sum = sortedNums[i]+ sortedNums[L]+ sortedNums[R]
              if (sum > 0) {
                R --;
              } else if  (sum < 0) {
                L ++;
            } else {
               res.push([sortedNums[i], sortedNums[L],sortedNums[R]]) 
               L++;
               R--;
               while (L < R && nums[L] === nums[L - 1]){
                L++;
               }
            }

        }

    }
    return res;
    }
}
