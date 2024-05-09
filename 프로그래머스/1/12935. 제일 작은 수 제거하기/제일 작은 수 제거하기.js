function solution(arr) {
    var answer = [];
    if (arr.length <= 1) {
        return [-1];
    } else {
        var minIndex = arr.indexOf(Math.min(...arr));
        return arr.filter((_, index) => index !== minIndex)
    }
    return answer;
}