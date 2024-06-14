function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    
    for (let k = 0; k < goal.length; k++) {
        let currentWord = goal[k]
     if (i < cards1.length && cards1[i] === currentWord) {
        i++;
    } else if (j < cards2.length && cards2[j] === currentWord) {
        j++;
    } else {
        return "No";
    }
    }
    
    return "Yes";
}