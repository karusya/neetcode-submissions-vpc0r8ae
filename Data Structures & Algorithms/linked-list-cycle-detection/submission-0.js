/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let visitedNodes = new Set();
        let current = head;
        while(current !== null){
            if(visitedNodes.has(current)){
                return true;
            }
            visitedNodes.add(current);
            current = current.next;
        }
        return false;
    }
}
