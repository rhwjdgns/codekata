function solution(n) {
  let answer = 0;
  const arr = n.toString().split("");
  arr.forEach((char) => {
    answer += +char;
  });
  return answer;
}