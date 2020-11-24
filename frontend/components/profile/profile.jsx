import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PinsIndex from '../pins/pins_index';
import Board from '../boards/board';
import HomeContainer from '../home_container/home_container'

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showMenu:false 
        };
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    componentDidMount(){
      this.props.fetchAllBoards(this.props.match.params.userId).then(()=> this.props.fetchBoardPins());
    }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }

  closeMenu() {
    
      this.setState({
        showMenu:false
      });
  }



    render(){
      const {openModal} = this.props;
      
        return (
          <div>
            <HomeContainer />
            <div className="board-interface">
              <h1 className="username">{this.props.currentUser.username}</h1>
              <div className="board-header-container">
                <Link className="boards-header" to={`/users/${this.props.match.params.userId}`} style={{ backgroundColor: 'hsl(348, 90%, 40%)', color: 'white' }} >Boards</Link>
                <Link className="boards-header" to={`/users/${this.props.match.params.userId}/pins`}>Pins</Link>
              </div>
              <div className="button-wrapper">
                <div className="new-board-button" onClick={this.showMenu}>+</div>
                {this.state.showMenu ? (
                  <>
                <div className="click-background" onClick={()=> this.closeMenu()}></div>
                  <div className="item-holder">
                    <li
                      className="dropdown-item"
                      onClick={() => openModal("create board").then(this.closeMenu())}
                    >
                      New Board
                    </li>
                    <li
                      className="dropdown-item"
                        onClick={() => openModal("create pin").then(this.closeMenu())}
                    >
                      New Pin
                    </li>
                  </div>
                  </>
                ) 
                
                : (null)}
              </div>
            </div>
            <div className="boards-index" onClick={() => this.closeMenu()}>
              {this.props.boards.map((board, i) => (
                <Board
                  board={board}
                  key={i}
                  currentUser={this.props.currentUser}
                  
                />
              ))}
            </div>
          </div>
        );
    }










}

export default Profile;