class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let L = 0, R = clean.length-1;
        while (L < R) {
        if (clean.charAt(L) !== clean.charAt(R)) {
            return false;
        }       
        L++;
        R--;
    }
    return true;
    }
    
}
