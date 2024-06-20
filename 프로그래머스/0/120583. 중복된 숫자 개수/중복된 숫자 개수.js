function solution(array, n) {
    let findnumbers = 0;
    array.forEach(function(arrays) {
        if (arrays === n) {
            findnumbers += 1
        }
    })
    return findnumbers;
}