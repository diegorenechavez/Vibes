import React from 'react';
import OwnPinItem from "./own_pin";
import HomeContainer from "../home_container/home_container";
import {Link} from "react-router-dom";
class PinsProfile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
    this.props.fetchUsersPins(this.props.currentUserId);
    }

    render() {
        const {openModal} = this.props;
        return (
            <div>
                <div className="board-interface">
                    <h1 className="username">{this.props.currentUser.username}</h1>
                    <div className="board-header-container">
                        <Link className="boards-header" to={`/users/${this.props.match.params.userId}`}>Boards</Link>
                        
                        <Link className="boards-header" to={`/users/${this.props.match.params.userId}/pins`} style={{backgroundColor:'hsl(348, 90%, 40%)', color:'white'}}>Pins</Link>
                    </div>
                    <div className="button-wrapper">
                        <div className="new-board-button" >+</div>
                        <ul className="dropdown-profile">
                            <div className="item-holder">
                                <li
                                    className="dropdown-item"
                                    onClick={() => openModal("create board")}
                                >
                                    Create New Board
                    </li>
                                <li
                                    className="dropdown-item"
                                    onClick={() => openModal("create pin")}
                                >
                                    Create New Pin
                    </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <HomeContainer/>
                <ul className="own-pin-list">
                    {this.props.pins.map(pin => (<OwnPinItem pin={pin} key={pin.id} deletePin={this.props.deletePin}/>))}
                </ul>
            </div>
        )
    }







}


export default PinsProfile 