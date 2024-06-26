function solution(my_string) {
  let answer = 0;
  const chars = my_string.split("");
  const numbersOnly = chars.filter((char) => {
    return !isNaN(char) && char !== "";
  });
  newArr = numbersOnly.map(Number);
  newArr.forEach((number) => {
    answer += number;
  });
  return answer;
}