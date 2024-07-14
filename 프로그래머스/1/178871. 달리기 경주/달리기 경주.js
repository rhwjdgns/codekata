function solution(players, callings) {
    const positions = {};
    for (let i = 0; i < players.length; i++) {
        positions[players[i]] = i;
    }
    
    for (const calling of callings) {
        const currentIndex = positions[calling];
        
        if (currentIndex > 0) {
            const previousPlayer = players[currentIndex - 1];
            
            players[currentIndex - 1] = calling;
            players[currentIndex] = previousPlayer;
            
            positions[calling] = currentIndex - 1;
            positions[previousPlayer] = currentIndex;
        }
    }
    return players;
}