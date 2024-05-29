function solution(s, n) {
    var answer = '';
    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        if (char >= 'A' && char <= 'Z') {
            var newChar = String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + n) % 26 + 'A'.charCodeAt(0));
            answer += newChar;
        } else if (char >= 'a' && char <= 'z') {
            var newChar = String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + n) % 26 + 'a'.charCodeAt(0));
            answer += newChar;
        } else {
            answer += char
        }
    }
    return answer;
}