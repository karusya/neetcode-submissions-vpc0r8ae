class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        const duplicates = [];
        for (const n of nums){
            if (map.has(n)){
                map.set(n,map.get(n)+1)
           }  else    {
                map.set(n,1)
            }
        }
        for (const [key, value] of map.entries()) {
        if (value > 1) {
            duplicates.push(key);
        }
        }

        return duplicates.length > 0;

    }
}
