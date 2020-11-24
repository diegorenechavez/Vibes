import React from 'react';
import Profile from "../profile/profile";


class CreatePin extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            description:"",
            content:"",
            photoFile: null,
            photoUrl: null,
            
        };
    }
    

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('pin[description]',this.state.description);
        formData.append('pin[content]',this.state.content);
        formData.append('pin[photo]',this.state.photoFile);
        
        this.props.createPin(formData,this.props.userId).then(this.props.closeModal());
        // .then((response) => {
        //   this.props.history.push(`/pins/${response.pin.id}`);
        // });
    }

    handleChange(field){
        return (e)=>{
            this.setState({[field]: e.currentTarget.value});
        };

    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const filereader = new FileReader();
        filereader.onloadend = () => {

            this.setState({photoFile: file, photoUrl: filereader.result});
        };
        if (file){
            filereader.readAsDataURL(file);
        }
    }

    render(){
        const {closeModal} = this.props;
        const previewImage = this.state.photoUrl ? <img className="pin-image2" src={this.state.photoUrl} /> : null;
        return (
          <div className="modal-form">
            <button className="close-button" onClick={() => closeModal()}>
              X
            </button>
            <form onSubmit={this.handleSubmit} className="create-image-form">
              <div className="photo-place-holder">{previewImage}</div>
              <div className="right-side-creation">
                <h1 className="create-image-header">Create a Pin</h1>

                <input
                  placeholder="Add a Description"
                  className="description-box"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange("description")}
                />

                <textarea
                  placeholder="Tell us More..."
                  className="content-box"
                  value={this.state.content}
                  onChange={this.handleChange("content")}
                />
                <div className="button-container-create">
                  <input
                    className="create-pin-button"
                    type="file"
                    onChange={this.handleFile.bind(this)}
                  />
                  <button className="save-pin-button">Submit</button>
                </div>
              </div>
            </form>
          </div>
        );
    }






}

export default CreatePin;