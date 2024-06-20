function solution(number, limit, power) {
    let totalIronWeight = 0;
    function countDivisors(n) {
        let count = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                count++
                if (i * i !== n) {
                    count++
                }
            }
        }
        return count
    }
    for (let i = 1; i <= number; i++) {
        let divisorsCount = countDivisors(i);
        if (divisorsCount > limit) {
            totalIronWeight += power;
        } else {
            totalIronWeight += divisorsCount;
        }
    }
    return totalIronWeight;
}