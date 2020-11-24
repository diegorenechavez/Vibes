import React from 'react';
import {Link} from "react-router-dom";

const Board = (props) => {
    return (
        <div>
            <Link to={`/users/${props.currentUser.id}/boards/${props.board.id}`}>
            <div className="board-card">
                    <div className="board-image">{props.board.name}</div>
            </div>
                <div className="board-title">{props.board.description}</div>
            </Link>
        </div>
    );
};

export default Board;