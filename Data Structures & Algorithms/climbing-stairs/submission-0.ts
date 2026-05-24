class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let memo = new Map<number,number>
        const dfs = (i: number): number => {
            if(i === n) return 1;
            if(i >= n) return 0;
            if (memo.has(i)) return memo.get(i);
            let result =  dfs(i+1) + dfs(i+2);
            memo.set(i,result);
            return result;
        }
        return dfs(0);
    }
}
