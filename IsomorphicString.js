var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const mapS = {};
    const mapT = {}; 
    
    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];
        
        if (!mapS[charS]) mapS[charS] = charT;
        if (!mapT[charT]) mapT[charT] = charS;
      
        if (mapS[charS] !== charT || mapT[charT] !== charS) {
            return false;
        }
    }
    
    return true;
};
s = "egg", t = "add"
console.log(isIsomorphic(s,t))