function solution(s) {
    return s.split(' ').map(word => {
        if (word.length === 0) {
            return word;
        }
        let firstChar = word[0];
        let restOfWord = word.slice(1).toLowerCase();
        if (firstChar >= '0' && firstChar <= '9') {
            return firstChar + restOfWord;
        } else {
            return firstChar.toUpperCase() + restOfWord;
        }
    }).join(' ')
}