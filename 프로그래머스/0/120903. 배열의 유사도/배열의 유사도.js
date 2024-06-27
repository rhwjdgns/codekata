function solution(s1, s2) {
  let answerArr = [];
  answerArr = s1.filter((x) => s2.includes(x));
  return answerArr.length;
}