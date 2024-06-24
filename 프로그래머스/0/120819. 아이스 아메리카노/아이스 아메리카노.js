function solution(money) {
  var answer = [];
  let share = Math.floor(money / 5500);
  let theRest = money - 5500 * share;
  answer.push(share, theRest);
  return answer;
}