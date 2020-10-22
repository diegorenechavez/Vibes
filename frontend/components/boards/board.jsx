import React from 'react';
import {Link} from "react-router-dom";

const Board = (props) => {
    return (
        <div>
            <Link to={`/users/${props.currentUser.id}/boards/${props.board.id}`}>
            <div className="board-card">
                 <div className="board-image"></div>
            </div>
            </Link>
            <div className="board-title">{props.board.name}</div>
        </div>
    );
};

export default Board;