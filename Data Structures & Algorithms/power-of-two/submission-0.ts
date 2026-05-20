class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n: number): boolean {
        if(n<=0) return false;
        let x = 1;
        while(x < n){
            x*=2;
        }
        return x===n;
    }
}
