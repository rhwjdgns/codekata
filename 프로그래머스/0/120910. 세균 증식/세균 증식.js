function solution(n, t) {
  var answer = n;
  for (i = 0; i < t; i++) {
    answer = answer + answer;
  }
  return answer;
}