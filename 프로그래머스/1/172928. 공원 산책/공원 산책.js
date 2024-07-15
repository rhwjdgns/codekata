function solution(park, routes) {
    const directions = {
        'N': [-1 ,0],
        'S': [1, 0],
        'E': [0, 1],
        'W': [0, -1]
    }

const H = park.length;
const W = park[0].length;
let position = [0, 0]

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (park[i][j] === 'S') {
            position = [i, j];
            break;
        }
    }
}
for (let route of routes) {
    const [direction, distanceStr] = route.split(' ');
    const distance = parseInt(distanceStr);
    const [dRow, dCol] = directions[direction];
    
    let newRow = position[0];
    let newCol = position[1];
    let validMove = true;
    
    for (let step = 1; step <= distance; step++) {
        newRow += dRow;
        newCol += dCol;
        
        if (newRow < 0 || newRow >= H || newCol < 0 || newCol >= W || park[newRow][newCol] === 'X') {
            validMove = false;
            break;
        }
    }
    
    if (validMove) {
        position = [newRow, newCol]
    }
}
    return position;
}