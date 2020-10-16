import React from 'react';
import PinIndexitem from "./pin_index_item";


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
            <div>
                <ul>
                    {
                       this.props.pins.map((pin) => (<PinIndexitem pin={pin} key={pin.id} />))
                    }
                </ul>
            </div>
        );
                }
    }


}

export default PinsIndex;