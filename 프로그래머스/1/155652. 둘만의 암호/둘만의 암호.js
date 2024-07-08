function solution(s, skip, index) {
    const skipSet = new Set(skip);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = ''
    
    for (let char of s) {
        let currentIndex = alphabet.indexOf(char);
        let count = 0;
        
        while (count < index) {
            currentIndex = (currentIndex + 1) % 26;
            if (!skipSet.has(alphabet[currentIndex])) {
                count++;
            }
        }
        result += alphabet[currentIndex];
    }
    return result;
}