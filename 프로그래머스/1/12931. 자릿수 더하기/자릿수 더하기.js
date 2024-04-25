function solution(n)
{
   var digits = n.toString().split('').map(Number);
    var answer = 0;
    for (i = 0; i < digits.length; i++) {
        answer += digits[i]
    }
    return answer;
}