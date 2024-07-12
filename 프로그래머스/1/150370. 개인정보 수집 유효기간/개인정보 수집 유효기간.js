function solution(today, terms, privacies) {
    const todayParts = today.split('.').map(Number);
    const todayDate = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]);
    
    const termsMap = {};
    terms.forEach(term => {
        const [type, period] = term.split(' ');
        termsMap[type] = parseInt(period, 10);
    });
    
    const toDestroy = [];
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const dateParts = date.split('.').map(Number);
        const collectionDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        
        const expirationDate = new Date(collectionDate);
        expirationDate.setMonth(expirationDate.getMonth() + termsMap[type]);
        
        if (expirationDate <= todayDate) {
            toDestroy.push(index + 1);
        }
    });
    
    return toDestroy;
}