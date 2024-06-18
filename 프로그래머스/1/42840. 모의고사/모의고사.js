function solution(answers) {
    const patterns = [
        [ 1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    const scores = [0,0,0]
    answers.forEach((answer, i) => {
        patterns.forEach((pattern, j) => {
            if(answer === pattern[i % pattern.length]) {
                scores[j]++
            }
        })
    })
    
    const maxScore = Math.max(...scores)
    
    return scores.map((score, index) => {
        if (score === maxScore) {
            return index + 1
        }
    }).filter(Boolean)
    
}