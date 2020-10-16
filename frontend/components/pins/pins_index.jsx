import React from 'react';
import PinIndexitem from "./pin_index_item";
import Home from "../home_container/home";

class PinsIndex extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        this.props.fetchAllPins();
    }

    render(){
        if(this.props.pins.length === 0){
            return null;
        }else{
        return (
            <>
            <Home />
                <figure className="main-feed" >
                    {
                       this.props.pins.map((pin) => (<PinIndexitem pin={pin} key={pin.id} />))
                    }
                </figure>
            </>
        );
                }
    }


}

export default PinsIndex;