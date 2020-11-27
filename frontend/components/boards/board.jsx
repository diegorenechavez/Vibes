import React from 'react';
import {Link} from "react-router-dom";
import BoardShow from './board_show_container'
class Board extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchBoardPins(this.props.board.id);
    }

  

    

    render(){
        
    return (
        <div>

            <Link to={`/users/${this.props.currentUser.id}/boards/${this.props.board.id}`}>
            <div className="board-card">
                    
                    <div className="board-image">{this.props.board.name}</div>
            </div>
                <div className="board-title">{this.props.board.description}</div>
            </Link>
        </div>
    );
    }
};

export default Board;