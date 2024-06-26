function solution(n, lost, reserve) {
  let answer = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));

  answer.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (i = 0; i < realReserve.length; i++) {
    const currentReserve = realReserve[i];
    const before = answer.indexOf(currentReserve - 1);
    const after = answer.indexOf(currentReserve + 1);

    if (before !== -1) {
      answer.splice(before, 1);
    } else if (after !== -1) {
      answer.splice(after, 1);
    }
  }

  return n - answer.length;
}