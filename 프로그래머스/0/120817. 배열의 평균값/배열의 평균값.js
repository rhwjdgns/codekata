function solution(numbers) {
    let a = 0
    for (i = 0; i < numbers.length; i++) {
        a += numbers[i]
    }
    let answer = a / numbers.length;
    return answer;
}