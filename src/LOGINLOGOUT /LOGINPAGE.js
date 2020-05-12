import React, { Component } from "react";
import Inputform from "./Inputform";
import { signinWithGoogle } from "../Firebaseconfiguration/firebase";
import "/home/bhumika/nirakar/travell-app/src/LOGINLOGOUT /Loginpage.css";
import { auth } from "../Firebaseconfiguration/firebase";
import { connect } from "react-redux";
import userprofile from "../Firebaseconfiguration/firebase";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: " ",
      user: "true",
    };
  }
  change = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handlechange = async (event) => {
    await event.preventDefault();

    try {
      const user = await auth.signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );

      await userprofile(user);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("logpage");
    console.log(this.state.password);
       console.log(this.state.email);
    console.log(this.props.NEWUser + " no");
    console.log(this.props.NEWUser);
    return (
      <div>
        {this.props.NEWUser ? (
          this.props.user.history.push("/")
        ) : (
          <div>
            <h1> LOG in </h1>
            <button className="button" onClick={signinWithGoogle} type="button">
              sign with goolge
            </button>
            <h5>Email</h5>
            <Inputform
              value={this.state.email}
              type={"email"}
              change={this.change}
              name={"email"}
            />
            <h5>password</h5>
            <Inputform
              value={this.state.password}
              type={"password"}
              change={this.change}
              name={"password"}
            />
            <button onClick={this.handlechange} className="button">
              Sign in
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStatetoprps = (state) => {
  return {
    NEWUser: state.Courrentuser.User,
  };
};

export default connect(mapStatetoprps)(Login);
