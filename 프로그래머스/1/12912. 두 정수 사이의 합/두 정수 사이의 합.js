function solution(a, b) {
    var sum = 0;
    var answer = 0;
    if (a <= b) {
    for(var i = a; i <= b; i++){
        sum += i;
    }
        } else {
            for(var i = a; i >= b; i--){
        sum += i;
        }
    } 
    answer = sum
    return answer;
}