function solution(my_string, n) {
  var answer = "";
  let answerArr = [];
  const chars = my_string.split("");

  chars.forEach((str) => {
    for (i = 0; i < n; i++) {
      answerArr.push(str);
    }
  });
  answer = answerArr.join("");
  return answer;
}