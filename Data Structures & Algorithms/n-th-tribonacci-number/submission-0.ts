class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
   
    tribonacci(n: number, memo = {}): number {
    if (n in memo) return memo[n];
    if(n===0) return 0;
    if(n===1 || n===2) return 1;
    memo[n] = this.tribonacci(n - 1,  memo) + this.tribonacci(n - 2,  memo)+this.tribonacci(n - 3, memo);

    return memo[n];

}
}
