function solution(my_string) {
  let arr = [];
  var answer = "";
  const chars = my_string.split("");
  chars.forEach((char) => {
    if (char === char.toLowerCase()) {
      arr.push(char.toUpperCase());
    } else if (char === char.toUpperCase()) {
      arr.push(char.toLowerCase());
    }
  });
  answer = arr.join("");
  return answer;
}