export const selectBoardPins = (boardPins, pins, BoardId) =>{
    if (Object.values(boardPins).length=== 0) return [];
    let pinIds = [];
    let pinsOnBoard = [];
    Object.values(boardPins).forEach(bp =>{
        if(bp.board_id === BoardId) pinIds.push(bp.pin_id);
    });
    for(let i= 0; i < pinIds.length; i++){
        pinsOnBoard.push(pins[pinIds[i]]);
    }
    if (pinsOnBoard[0] === undefined) return [];
    return pinsOnBoard;
};