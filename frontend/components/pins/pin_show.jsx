import React from 'react';
import {Link} from "react-router-dom";
import PinsIndex from './pins_index';
import HomeContainer from "../home_container/home_container"


class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
        selectedBoardId: ""
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBoards(this.props.currentUser.id);

    this.props.fetchPin(this.props.match.params.pinId);
  }

  handleSave(e) {
    e.preventDefault();
    
    let boardPin = {
      board_id: parseInt(this.state.selectedBoardId),
      pin_id: parseInt(this.props.selectedPinId),
    };
    
    this.props.saveToBoard(boardPin);
    
    
    //       let boardPin = {
    //         board_id: e.currentTarget.key,
    //         pin_id: this.props.currentPinId,
    //       };
    //         debugger
    //         this.props.saveToBoard(boardPin);
       
    // //    return (e)=>{
    // //     e.preventDefault();
    // //     this.setState(boardPin);
    // //     };

  }

  handleSelection(e){
      e.preventDefault();
          
        this.setState({ selectedBoardId: parseInt(e._targetInst.key) });
  }
  

  render() {
    if (!this.props.boards) {
      return null;
    }

    if (!this.props.pin) {
      return null;
    }
    return (
      <>
        <HomeContainer />
        <div className="pin-card">
          <div className="left-container">
            <img className="pin-image" src={this.props.pin.photoUrl} alt="" />
          </div>
          <div className="right-container">
            <div className="button-container">
              <div className="back-button-container">
                <Link to="/feed" className="wtf">
                  <button className="back-button">Back</button>
                  <button onClick={() => this.props.deletePin(this.props.match.params.pinId)}>Delete Pin</button>
                </Link>
              </div>
              <div className="add-button-wrapper">
                <button className="add-button">Add</button>
                <div className="dd-board">
                  {this.props.boards.map((board) => (
                    <button
                      className="board-name-dd"
                      onClick={this.handleSelection}
                      key={board.id}
                      value={board.id}
                    >
                      {board.name}
                    </button>
                  ))}
                  <button
                    className="board-name-dd-save"
                    onClick={this.handleSave}
                  >Save!</button>
                </div>
              </div>
            </div>
            <h1 className="pin-description">{this.props.pin.description}</h1>
            <p className="content">{this.props.pin.content}</p>
          </div>
        </div>
      </>
    );
  }
}

export default PinShow;