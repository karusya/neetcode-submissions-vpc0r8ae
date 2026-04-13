class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let result = 0;
       
            if (nums.length === 0){
               return 0 
            }
            else if (nums.length === 1){
               return nums[0]
            }
            else {
                for (let num of nums) {
                    result |= num;  // XOR each element
                }
            
            }
            return result << (nums.length -1);  
        }
    }

