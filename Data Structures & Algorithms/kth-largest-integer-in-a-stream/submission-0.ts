class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    private k: number;
    private arr: number[];
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.arr = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.arr.push(val);
        this.arr.sort((a,b) => (a-b));
        return this.arr[this.arr.length - this.k]
    }
}