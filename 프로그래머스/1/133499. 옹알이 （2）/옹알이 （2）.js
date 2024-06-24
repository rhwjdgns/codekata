function solution(babbling) {
  const validWords = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let isValid = true;
    let last = "";

    while (word.length > 0 && isValid) {
      let found = false;
      for (let validWord of validWords) {
        if (word.startsWith(validWord)) {
          if (last === validWord) {
            isValid = false;
            break;
          }
          word = word.slice(validWord.length);
          last = validWord;
          found = true;
          break;
        }
      }
      if (!found) {
        isValid = false;
      }
    }
    if (isValid && word.length === 0) {
      count++;
    }
  }
  return count;
}