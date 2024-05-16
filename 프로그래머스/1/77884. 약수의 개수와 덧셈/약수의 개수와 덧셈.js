function solution(left, right) {
    var answer = 0;
    for (let num = left; num <= right; num++) {
        const sqrt = Math.sqrt(num);
        if (Number.isInteger(sqrt)) {
            answer -= num;
        } else {
            answer += num;
        }
    }
    return answer;
}