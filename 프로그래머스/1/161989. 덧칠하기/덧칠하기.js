function solution(n, m, section) {
        section.sort((a, b) => a - b)
    let count = 0
    let i = 0;
    
    while (i< section.length) {
        count++
        let start = section[i]
        while (i < section.length && section[i] < start + m) {
            i++
        }
    }
    return count;
}