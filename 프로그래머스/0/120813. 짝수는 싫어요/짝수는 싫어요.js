function solution(n) {
  let array = Array.from({ length: n }, (v, i) => i + 1);
  let oddNumber = [];

  array.forEach(function (number) {
    if (number % 2 !== 0) {
      oddNumber.push(number);
    }
  });
  return oddNumber;
}