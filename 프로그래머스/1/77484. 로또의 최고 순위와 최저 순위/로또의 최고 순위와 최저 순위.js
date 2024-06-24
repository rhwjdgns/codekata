function solution(lottos, win_nums) {
    const correctNumbers = lottos.filter(num => win_nums.includes(num)).length;
    const zerosCount = lottos.filter(num => num === 0).length;
    const maxRank = Math.min (7 - (correctNumbers + zerosCount), 6);
    const minRank = Math.min (7 - correctNumbers, 6);
    return [maxRank, minRank]
}