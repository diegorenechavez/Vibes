import React from 'react';

class BoardForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createBoard(this.state).then(this.props.closeModal());

    }

    render(){
      const {closeModal} = this.props
        return (
          <div className="board-form-modal">
            <form className="Create-Board-Form" onSubmit={this.handleSubmit}>
              <h1 className="create-board-header">Create Board</h1>
              <p>Name Your Board</p>
              <input
                className="Name-Board-Input"
                type="text"
                value={this.state.name}
                onChange={this.handleChange("name")}
                placeholder="Recipes To Make\ Articles To Read \ Places To Go"
              />
              <p>Describe Your Board</p>
              <textarea
                className="Description-Board-input"
                placeholder="Tell Us More About Your Board"
                value={this.state.description}
                onChange={this.handleChange("description")}
              ></textarea>
              <button className="create-button-board">Create Board</button>
            </form>
            <button onClick={() => closeModal()} className="close-button2">
              X
            </button>
          </div>
        );
    }



    

}

export default BoardForm;