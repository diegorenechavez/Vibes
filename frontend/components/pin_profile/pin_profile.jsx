import React from 'react';
import OwnPinItem from "./own_pin";
import HomeContainer from "../home_container/home_container";

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
                    <h4 className="boards-header">Boards/pins</h4>
                    <div className="button-wrapper">
                        <button className="new-board-button">+</button>
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
                    {this.props.pins.map(pin => (<OwnPinItem pin={pin} key={pin.id}/>))}
                </ul>
            </div>
        )
    }







}


export default PinsProfile 