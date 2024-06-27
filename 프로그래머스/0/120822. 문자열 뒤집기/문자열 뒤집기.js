function solution(my_string) {
  let answerArr = [];
  var answer = "";
  const chars = my_string.split("");
  for (i = chars.length - 1; i >= 0; i--) {
    answerArr.push(chars[i]);
  }
  answer = answerArr.join("");
  return answer;
}