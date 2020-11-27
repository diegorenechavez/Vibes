import React from "react";
import { Link } from "react-router-dom";
import PinsIndex from "./pins_index";
import HomeContainer from "../home_container/home_container";

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      selectedBoardId: "",
      showMenu: false,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllBoards(this.props.currentUser.id);
    this.props.fetchPin(this.props.match.params.pinId);
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  handleSave(e) {
    e.preventDefault();

    let boardPin = {
      board_id: parseInt(this.state.selectedBoardId),
      pin_id: parseInt(this.props.selectedPinId),
    };

    this.props.saveToBoard(boardPin);
    this.closeMenu();
  }

  handleSelection(e) {
    e.preventDefault();

    this.setState({ selectedBoardId: parseInt(e._targetInst.key) });
  }

  goBack() {
    this.props.history.goBack();
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
                <div className="wtf">
                  <button className="back-button" onClick={() => this.goBack()}>
                    Back
                  </button>
                </div>
              </div>
              <div className="add-button-wrapper">
                <button className="add-button" onClick={() => this.showMenu()}>
                  Add To Board
                </button>
                {this.state.showMenu ? (
                  <>
                    <div className="click-background" onClick={() => this.closeMenu()}></div>
                    <div className="dd-board">
                      <h3 className="description">Boards</h3>
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
                      >
                        Save To Board
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <h1 className="pin-description">{this.props.pin.description}</h1>
            <p className="content">{this.props.pin.content}</p>
          </div>
          <p>{}</p>
        </div>
      </>
    );
  }
}

export default PinShow;
