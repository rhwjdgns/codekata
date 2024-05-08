function solution(absolutes, signs) {
    var answer = 123456789;
    var totalSum = 0;
    for (var i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            totalSum += absolutes[i];
        } else {
            totalSum -= absolutes[i];
        }
    }
    return totalSum;
}