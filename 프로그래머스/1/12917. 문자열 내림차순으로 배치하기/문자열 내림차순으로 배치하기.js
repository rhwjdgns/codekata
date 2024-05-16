function solution(s) {
    var upperCase = s.split('').filter(char => char.toUpperCase() === char).sort().reverse().join('');
    var lowerCase = s.split('').filter(char => char.toLowerCase() === char).sort().reverse().join('');
    return lowerCase + upperCase;
}
