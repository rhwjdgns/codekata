function solution(price, money, count) {
    let totalCost = price * count * (count + 1) / 2;
    let deficit = totalCost - money;
    return deficit > 0 ? deficit : 0;
}