function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    const regex = /^\d+$/;
    return regex.test(s);
}