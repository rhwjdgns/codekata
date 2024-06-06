function solution(s) {
    var answer = [];
    var positions = {};
    
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (positions[char] === undefined) {
            answer.push(-1);
        } else {
            answer.push(i - positions[char]);
        }
        positions[char] = i;
    }
    
    return answer;
}