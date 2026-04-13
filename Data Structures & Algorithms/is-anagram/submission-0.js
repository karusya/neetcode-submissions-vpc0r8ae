class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLen= s.length;
        const tLen = t.length;
        if(sLen !== tLen) {
            return false;         
        }
        const sMap = new Map();
        for(let char of s ){
             sMap.set(char, (sMap.get(char) || 0) + 1);
        }

         for(let char of t ){
            if(!sMap.has(char)) return false;
            sMap.set(char, sMap.get(char)-1);
            if(sMap.get(char)< 0)return false;
            
             
        }
    return true;
    }
}
