function solution(num_list) {
  var answer = [];
  let even = [];
  let odd = [];
  num_list.forEach((num) => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  answer.push(even.length, odd.length);
  return answer;
}