import React from "react";
import PinIndex from "../pins/pin_index_container";
import BoardPin from "./board_pins";
import HomeContainer from "../home_container/home_container";

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showConfirm: false,
      showEdit: false,
      board: this.props.board || {},
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.closeConfirm = this.closeConfirm.bind(this);
    this.openConfirm = this.openConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  showEdit() {
    this.setState({ showEdit: true });
    this.closeMenu();
  }

  closeEdit() {
    this.setState({ showEdit: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state.board || null);
    this.closeEdit();
  }

  update(field) {
    return (e) =>
      this.setState({
        board: Object.assign({}, this.state.board, {
          [field]: e.currentTarget.value,
        }),
      });
  }

  // update(field) {
  //   return e => {
  //     let board = this.state.board;
  //     board[field] = e.currentTarget.value;
  //     return this.setState({ board });
  //   }
  // }

  openConfirm() {
    this.setState({ showConfirm: true });
    this.closeMenu();
  }

  closeConfirm() {
    this.setState({ showConfirm: false });
  }

  openMenu() {
    this.setState({ showMenu: true });
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  componentDidMount() {
    const { fetchBoard, fetchBoardPins } = this.props;
    fetchBoardPins(this.props.match.params.boardId);
    fetchBoard(this.props.match.params.boardId);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.board || {}).id != (prevProps.board || {}).id) {
      this.setState({ board: this.props.board });
    }
  }

  render() {
    const { board, pins, fetchBoard } = this.props;

    if (!board) return null;
    const { deleteBoard, deleteBoardPin } = this.props;
    return (
      <>
        <HomeContainer />
        <div className="show-container">
          <h1 className="board-header">{board.name}</h1>
          <h3 className="board-description">{board.description}</h3>
          <div className="board-menu">
            <button className="menu" onClick={() => this.openMenu()}>
              …
            </button>
            {this.state.showMenu ? (
              <>
                <div
                  className="click-background"
                  onClick={() => this.closeMenu()}
                ></div>
                <div className="selection">
                  <button
                    className="board-edit"
                    onClick={() => this.openConfirm()}
                  >
                    Delete Board
                  </button>
                  <button
                    className="board-edit"
                    onClick={() => this.showEdit()}
                  >
                    Edit Board
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {this.state.showConfirm ? (
          <div className="confirm-container">
            <div className="confirmation">
              <h1 className="confirm-question">
                Are You Sure You Want To Delete Board?
              </h1>
              <div className="confirm-button-wrapper">
                <div className="bw">
                  <button
                    className="cancel-button"
                    onClick={() => this.closeConfirm()}
                  >
                    Cancel
                  </button>
                </div>
                <div className="bw2">
                  <button
                    className="remove-button"
                    onClick={() =>
                      deleteBoard(this.props.match.params.boardId)
                        .then(this.closeConfirm())
                        .then(
                          this.props.history.push(
                            `/users/${this.props.match.params.userId}`
                          )
                        )
                    }
                  >
                    Delete Board
                  </button>
                </div>
              </div>
            </div>
            <div
              className="click-background"
              onClick={() => this.closeConfirm()}
            ></div>
          </div>
        ) : null}
        <BoardPin pins={pins} deleteBoardPin={deleteBoardPin} />
        {this.state.showEdit ? (
          <div className="board-form-modal">
            <form className="Create-Board-Form" onSubmit={this.handleSubmit}>
              <h1 className="create-board-header">Edit Board</h1>
              <p>Edit Board Name</p>
              <input
                className="Name-Board-Input"
                type="text"
                value={this.state.board.name}
                onChange={this.update("name")}
              />
              <p>Edit Board Description</p>
              <textarea
                className="Description-Board-input"
                value={this.state.board.description}
                onChange={this.update("description")}
              ></textarea>
              <button className="create-button-board">Save</button>
            </form>
            <button onClick={() => this.closeEdit()} className="close-button2">
              X
            </button>
          </div>
        ) : null}
      </>
    );
  }
}

export default BoardShow;
