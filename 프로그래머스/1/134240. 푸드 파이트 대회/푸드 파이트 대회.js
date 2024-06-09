function solution(food) {
    let leftPart = '';
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);
        leftPart += i.toString().repeat(count);
    }
    let center = '0';
    let rightPart = leftPart.split('').reverse().join('');
    return leftPart + center + rightPart;
}