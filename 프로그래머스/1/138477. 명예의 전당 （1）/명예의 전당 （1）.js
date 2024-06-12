function solution(k, score) {
    let answer = [];
    let honorList = [];

    for (let i = 0; i < score.length; i++) {
        honorList.push(score[i]);
        honorList.sort((a, b) => a - b);

        if (honorList.length > k) {
            honorList.shift();
        }

        answer.push(honorList[0]);
    }

    return answer;
}