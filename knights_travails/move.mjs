export function Move(coordinate) {
    let moveHistory = [coordinate];

    return {coordinate,
            moveHistory,
            
            storeMoveHistory(history=[]) {
                moveHistory = history.concat(moveHistory);
            },

            getMoveHistory() {
                return moveHistory;
            },

            getCoordinate() {
                return coordinate;
            }
        };
}
