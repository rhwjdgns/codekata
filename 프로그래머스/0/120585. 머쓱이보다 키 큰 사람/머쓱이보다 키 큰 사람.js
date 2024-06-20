function solution(array, height) {
    var answer = 0;
    array.forEach(function(array) {
        if (array > height) {
            answer += 1
        }    
    })
    return answer;
}