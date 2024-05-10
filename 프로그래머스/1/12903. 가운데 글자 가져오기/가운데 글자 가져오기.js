function solution(s) {
    var answer = '';
    var length = s.length;
    var middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        answer = s.substring(middle - 1, middle + 1);
    } else {
        answer = s.charAt(middle);
    }
    return answer;
}