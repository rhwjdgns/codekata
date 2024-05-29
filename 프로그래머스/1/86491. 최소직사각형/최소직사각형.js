function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let width = Math.max(sizes[i][0], sizes[i][1]);
        let height = Math.min(sizes[i][0], sizes[i][1]);
        
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }
    return maxWidth * maxHeight;
}