function firstUniqueChar(str) {
  const charDitionaary = {};

  for (const [idx, char] of [...str].entries()) {
    if (!charDitionaary[char]) {
      charDitionaary[char] = [idx, 1];
    } else {
      charDitionaary[char][1] += 1;
    }
  }

  for (const [idx, count] of Object.values(charDitionaary)) {
    if (count === 1) {
      return idx;
    }
  }

  return -1;
}

// const str = 'leetcode';
const str = 'loveleetcode';
// const str = 'aabb';
const result = firstUniqueChar(str);
console.log(result);