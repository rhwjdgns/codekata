function solution(n, m) {
    var answer = [];
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    function lcm(a, b, gcdValue) {
        return (a * b) / gcdValue;
    }
    const gcdValue = gcd(n, m);
    const lcmValue = lcm(n, m, gcdValue);
    
    return [gcdValue, lcmValue];
}