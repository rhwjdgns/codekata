function solution(n) {
  for (i = 1; i < n; i++) {
    if (n % i === 0) {
      if (i * i === n) {
        return 1;
      }
    }
  }
  return 2;
}