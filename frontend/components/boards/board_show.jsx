
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
    fetchAllPins();
    fetchBoard(this.props.match.params.boardId);
    
  }

  render() {
    const { board, pins, fetchBoard } = this.props;
   
    if (!board) return null;
    return (
      <>
        <HomeContainer />
       
          <h1 className="board-header">{board.name}</h1>
          <h3 className="board-description">{board.description}</h3>

          <BoardPin pins={pins} />
        
      </>
    );
  }
}

export default BoardShow;