import React, { Component } from "react";
import INPUT from "./Inputform";
import "./Loginpage.css";
import { auth } from "../Firebaseconfiguration/firebase";
import userprofile from "../Firebaseconfiguration/firebase";

class LOGOUT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmpassowrd: "",
    };
  }

  Change = (e) => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
      console.log(e.target.name)
    );
  };

  handlechange = async (event) => {
    event.preventDefault();
    const { email, displayName, password } = this.state;
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await userprofile(user, { displayName });
  

      this.setState({
        email: "",
        password: "",
        displayName: "",
        confirmpassowrd: "",
      });
    } catch (error) {
      console.log(error);
    } 

  };

  render() {
    
    return (
      <div>
        <h1>sign up</h1>
        <h3>DisplayName</h3>
        <INPUT
          type={"text"}
          value={this.state.displayname}
          name={"displayName"}
          change={this.Change}
        />
        <h3>Email</h3>
        <INPUT
          type={"email"}
          value={this.state.Email}
          name={"email"}
          change={this.Change}
        />
        <h3>pasword</h3>
        <INPUT
          type={"password"}
          value={this.state.password}
          name={"password"}
          change={this.Change}
        />
        <h3>Comfirm passwod</h3>
        <INPUT
          type={"password"}
          value={this.state.Confirmpassowrd}
          name={"confirmpassword"}
          change={this.Change}
        />
        <button className="button" onClick={this.handlechange} type="button">
          sign up
        </button>
      </div>
    );
  }
}

export default LOGOUT;
