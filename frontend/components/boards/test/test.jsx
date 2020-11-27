import React from "react";
import PinIndex from "../pins/pin_index_container";
import BoardPin from "./board_pins";
import HomeContainer from "../home_container/home_container";

class Test extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props,props);
    // this.state = {
    //   showMenu: false,
    //   showConfirm: false,
    //   showEdit: false,
    //   board: this.props.board || {},
    // };
    // this.openMenu = this.openMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    // this.closeConfirm = this.closeConfirm.bind(this);
    // this.openConfirm = this.openConfirm.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.showEdit = this.showEdit.bind(this);
    // this.closeEdit = this.closeEdit.bind(this);
  }

//   showEdit() {
//     this.setState({ showEdit: true });
//     this.closeMenu();
//   }

//   closeEdit() {
//     this.setState({ showEdit: false });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.updateBoard(this.state.board || null);
//     this.closeEdit();
//   }

//   update(field) {
//     return (e) =>
//       this.setState({
//         board: Object.assign({}, this.state.board, {
//           [field]: e.currentTarget.value,
//         }),
//       });
//   }

  // update(field) {
  //   return e => {
  //     let board = this.state.board;
  //     board[field] = e.currentTarget.value;
  //     return this.setState({ board });
  //   }
  // }

//   openConfirm() {
//     this.setState({ showConfirm: true });
//     this.closeMenu();
//   }

//   closeConfirm() {
//     this.setState({ showConfirm: false });
//   }

//   openMenu() {
//     this.setState({ showMenu: true });
//   }

//   closeMenu() {
//     this.setState({ showMenu: false });
//   }

  componentDidMount() {
    const { fetchBoard, fetchBoardPins } = this.props;
    fetchBoardPins(this.props.match.params.boardId);
    fetchBoard(this.props.match.params.boardId);
  }

//   componentDidUpdate(prevProps) {
//     if ((this.props.board || {}).id != (prevProps.board || {}).id) {
//       this.setState({ board: this.props.board });
//     }
//   }

  render() {
    const { board, pins } = this.props;

    if (!board) return null;
    return (
      <>
        <HomeContainer />
        <div className="show-container">
          <h1 className="board-header">{board.name}</h1>
          <h3 className="board-description">{board.description}</h3>
          <BoardPin pins={pins} deleteBoardPin={deleteBoardPin} />
        </div>
        
      </>
    );
  }
}
export default Test