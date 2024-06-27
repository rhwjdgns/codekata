function solution(my_string) {
  let answerArr = [];
  var answer = "";
  const delWord = "aeiou";
  const delArr = delWord.split("");
  const chars = my_string.split("");
  answerArr = chars.filter((x) => !delArr.includes(x));
  answer = answerArr.join("");
  return answer;
}