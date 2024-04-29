function solution(n) {
    var answer = parseInt(String(n).split('').sort().reverse().join(''))
    return answer;
}