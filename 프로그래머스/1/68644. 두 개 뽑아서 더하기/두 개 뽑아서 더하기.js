function solution(numbers) {
    var answer = new Set();
    
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            var sum = numbers[i] + numbers[j];
            answer.add(sum)
        }
    }
    return Array.from(answer).sort((a, b) => a - b);
}