function solution(s) {
    let count = 0;
    let removedZeroCount = 0;
    
    while (s !== "1") {
        let zeroCount = s.split('').filter(char => char === '0').length;
        removedZeroCount += zeroCount;
        
        s = s.replace(/0/g, '').length.toString(2);
        
        count++;
    }
    return [count, removedZeroCount];
}