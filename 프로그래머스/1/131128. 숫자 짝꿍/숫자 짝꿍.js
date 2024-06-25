function solution(X, Y) {
    let countX = Array(10).fill(0);
    let countY = Array(10).fill(0);
    
    for (let i = 0; i < X.length; i++) {
        countX[X[i]]++;
    }
    for (let i = 0; i < Y.length; i++) {
        countY[Y[i]]++;
    }
    
    let commonNumbers = [];
    for (let i = 0; i < 10; i++) {
        let commonCount = Math.min(countX[i], countY[i]);
        for (let j = 0; j < commonCount; j++) {
            commonNumbers.push(i)
        }
    }
    
    if (commonNumbers.length === 0) {
        return '-1';
    }
    
    commonNumbers.sort((a, b) => b - a);
    
    let answer = commonNumbers.join('');
    if (answer[0] === '0') {
        return '0';
    }
    return answer;
}