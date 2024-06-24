function solution(n) {
  let pizza = Math.floor(n / 7) + 1;
  if (n % 7 === 0) {
    return pizza - 1;
  }
  return pizza;
}