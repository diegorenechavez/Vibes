
import React from "react";
import PinIndex from "../pins/pin_index_container";
import BoardPin from "./board_pins";
import HomeContainer from "../home_container/home_container"


class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchAllPins, fetchBoard, fetchBoardPins } = this.props;
    fetchBoardPins();
    
    fetchBoard(this.props.match.params.boardId);
    
  }

  render() {
    const { board, pins, fetchBoard } = this.props;
   
    if (!board) return null;
    const {deleteBoard} = this.props;
    return (
      <>
        <HomeContainer />
        <div className="show-container">
          <h1 className="board-header">{board.name}</h1>
          <h3 className="board-description">{board.description}</h3>
          <div className="board-menu">
            <div className="menu">…</div>
            <div className="selection">
              <button className="board-edit" onClick={() => deleteBoard(this.props.match.params.boardId).then(this.props.history.push(`/users/${this.props.match.params.userId}`))}>Delete Board</button>
              <button className="board-edit">Edit Board</button>
            </div>
          </div>
        </div>

        <BoardPin pins={pins} />
      </>
    );
  }
}

export default BoardShow;