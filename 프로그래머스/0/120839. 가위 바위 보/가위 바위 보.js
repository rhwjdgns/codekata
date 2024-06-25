function solution(rsp) {
  let arr = [];
  const oldArr = rsp.split("").map((char) => Number(char));
  console.log(oldArr);
  oldArr.forEach((rspCase) => {
    switch (true) {
      case rspCase === 2:
        arr.push(0);
        break;
      case rspCase === 0:
        arr.push(5);
        break;
      case rspCase === 5:
        arr.push(2);
        break;
    }
  });
  const answer = arr.join("");
  return answer;
}