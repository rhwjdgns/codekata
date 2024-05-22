function solution(arr1, arr2) {
    const rows = arr1.length;
    const cols = arr1[0].length;
    
    var answer = new Array(rows);
    for (let i = 0; i < rows; i++) {
        answer[i] = new Array(cols);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}