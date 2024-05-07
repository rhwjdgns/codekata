function solution(arr, divisor) {
    var answer = [];
    arr.forEach(function(num) {
        if (num % divisor === 0) {
            answer.push(num)
        }
    });
    
    if (answer.length === 0) {
        answer.push(-1);
    }
    
    answer.sort(function(a, b) {
        return a - b;
    });
    
    return answer;
}