import {Move} from './move.mjs';

function getKnightPossibleMoves(x, y) {
    const max = 7;
    const min = 0;
    const possibleMoves = [[1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,1],[-2,-1]];
    const destList = [];
    for (let move of possibleMoves) {
        const [h, v] = move;
        const newX = x + h;
        const newY = y + v;
        if (newX > max || newX < min || newY > max || newY < min) continue;
        destList.push(Move([newX, newY]));
    }

    return destList;
}

function createKnightGraph() {
    const cellSize = 8;
    const graph = [];
    for (let x = 0; x < cellSize; x++) {
        graph[x] = [];

        for (let y = 0; y < cellSize; y++) {
            graph[x][y] = getKnightPossibleMoves(x,y);
        }
    }

    return graph;
}

function isAtEnd (current, end) {
    const [currX, currY] = current;
    const [endX, endY] = end;
    return currX == endX && currY == endY;
}

function isCoordinateInHistory(coor, history) {
    const [x,y] = coor;
    for (const [histX, histY] of history) {
        if (x == histX && y == histY) {
            return true;
        }
    }
    return false;
}

function getResult(history) {
    const len = history.length - 1;
    let historyTrail = '';
    for (const [x,y] of history) {
        historyTrail += `\n[${x},${y}]`
    }
    return `You made it in ${len} moves! Here's your path: ` + historyTrail;
}

export function knightMoves(start, end) {
    const graph = createKnightGraph();
    const queue = [Move(start)];
    const visitedCells = [];

    while (queue.length > 0) {
        const coordinateObj = queue.shift();
        const coordinate = coordinateObj.getCoordinate();

        if (isAtEnd(coordinate, end)) return getResult(coordinateObj.getMoveHistory());
        
        const [x,y] = coordinate;
        const possibles = graph[x][y];
        
        for (const move of possibles) {
            const moveCoordinate = move.getCoordinate();
            if (isCoordinateInHistory(moveCoordinate, visitedCells)) continue;
            visitedCells.push(moveCoordinate);
            move.storeMoveHistory(coordinateObj.getMoveHistory());
            queue.push(move);
        }
    }

    return null;
}

