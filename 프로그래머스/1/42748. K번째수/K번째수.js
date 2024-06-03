function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        let i = command[0];
        let j = command[1];
        let k = command[2];
        
        let slicedArray = array.slice(i - 1, j).sort((a, b) => a -b)
        
        let result = slicedArray[k -1];
        
        answer.push(result);
    })
    return answer;
}