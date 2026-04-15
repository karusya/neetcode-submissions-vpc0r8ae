class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        let len = arr.length;
        let count = 0;
        for (let i = 0; i< len;i++ ) {
         let x = arr[i];
         let found = false;
            for (let j = 0; j< len;j++ ) {
                if (arr[j] == x+1){
                    found = true;
                    break;
                }
            }

            if (found){
                count++;
            }
        }
        return count;
    }
}
