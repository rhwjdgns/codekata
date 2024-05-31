function solution(s) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numberWords.forEach((word, index) => {
    const regExp = new RegExp(word, "g");
    s = s.replace(regExp, index);
  });
  return Number(s);
}