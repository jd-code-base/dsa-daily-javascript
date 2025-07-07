var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("ab", "aa"));
