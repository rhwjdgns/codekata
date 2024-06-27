function solution(n, numlist) {
  var answer = [];
  numlist.forEach((multiple) => {
    if (multiple % n === 0) {
      answer.push(multiple);
    }
  });
  return answer;
}