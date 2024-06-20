function solution(array) {
  let uparr = array.sort((a, b) => a - b);
  uparrMidle = Math.floor(uparr.length / 2);
  answer = uparr[uparrMidle];
  return answer;
}