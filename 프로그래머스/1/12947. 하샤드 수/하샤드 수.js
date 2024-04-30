function solution(x) {
    var digits = String(x).split('');
    var sum = digits.reduce((total,num) => total + parseInt(num), 0);
    if (x % sum === 0) {
        answer = true;
    } else {
        answer = false;
    }    
    return answer;
}