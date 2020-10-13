import React from 'react';


class SignUpForm extends React.Component{

    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
       this.props.signup(this.state);
    }
    handleChange(field){
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    }
    demoLogin(event){
       
        event.preventDefault();
        const demoUser = {

            username: "omardude",
            password: "password",
            firstname: "omar",
            lastname: "user",
            email: "omar@user.com",
          };
          this.props.login(demoUser); 
        
    }


    render(){
        return (
          <div className="sign-up-modal">
           
            <button className="close-button">X</button>
            <form onSubmit={this.handleSubmit} className="signup-form">
              <h1 className="message">Welcome To Vibes</h1>
              <h5 className="slogan">Set a Mood</h5>
            

              <input
                type="text"
                onChange={this.handleChange("email")}
                value={this.state.email}
                placeholder="Enter Email"
              />

              <input
                type="text"
                onChange={this.handleChange("username")}
                value={this.state.username}
                placeholder="Create a Username"
              />

              
              <input type="password" name="password" placeholder="Create a Password" value={this.state.password} onChange={this.handleChange("password")}/>

              <button className="primary-button">Sign Up!</button>
              <p id="or">OR</p>
              <button className="secondary-button" onClick={(event)=>this.demoLogin(event)}>
                Continue As Demo User
              </button>
            </form>
          </div>
        );
    }
}

export default SignUpForm;