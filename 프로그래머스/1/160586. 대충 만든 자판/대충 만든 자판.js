function solution(keymap, targets) {
  const charToMinPresses = {};

  keymap.forEach((keyString, keyIndex) => {
    for (let i = 0; i < keyString.length; i++) {
      const char = keyString[i];
      const presses = i + 1;
      if (!charToMinPresses[char]) {
        charToMinPresses[char] = presses;
      } else {
        charToMinPresses[char] = Math.min(charToMinPresses[char], presses);
      }
    }
  });

  return targets.map((target) => {
    let totalPresses = 0;
    for (let i = 0; i < target.length; i++) {
      const char = target[i];
      if (charToMinPresses[char] !== undefined) {
        totalPresses += charToMinPresses[char];
      } else {
        return -1;
      }
    }
    return totalPresses;
  });
}