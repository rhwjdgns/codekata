function solution(array) {
  const originArray = [...array];
  var answer = [];
  let uparr = originArray.sort((a, b) => a - b);
  let last = uparr[uparr.length - 1];
  lastIndex = array.indexOf(last);
  answer.push(last, lastIndex);

  return answer;
}