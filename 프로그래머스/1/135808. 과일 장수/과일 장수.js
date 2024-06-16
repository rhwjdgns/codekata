function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let totalprofit = 0;
  let i = 0;

  while (i < score.length) {
    const box = score.slice(i, i + m);
    if (box.length < m) {
      break;
    }
    const minScore = box[box.length - 1];
    totalprofit += minScore * m;
    i += m;
  }
  return totalprofit;
}