/* eslint-disable no-undef */
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./allcomponent/header/headre.css";
import LAndingpage from "./landigpage/landingpage";
import LOGINLOGOUT from "./LOGINLOGOUT /LOGPAGE";
import { auth, userprofile } from "./Firebaseconfiguration/firebase";
import productpage from "./product/product";
import { Courrentuser } from "./redux/action";
import { connect } from "react-redux";
import Cartpage from "./CARTPAGE/Cartpage";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.props.courentuser(user);
    });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userinfo = await userprofile(user);
        userinfo.onSnapshot((snapeshot) => {
        console.log(snapeshot.data());
          this.setState({
            user: {
              id: snapeshot.id,
              ...snapeshot.data(),
            },
          });
        } )
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {id,name} = {...this.state.user};
console.log("this is user" + name );
    return (
      <div>
        <Switch>
          <Route
            path="/LOGPAGE"
            render={(props) => <LOGINLOGOUT {...props} />}
          />
          <Route
            exact
            path="/"
             component={LAndingpage} 
          />
          <Route path="/productpage/:productName" component={productpage} />
          <Route path="/CARTPAGE/" component={Cartpage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    courentuser: (user) => dispatch(Courrentuser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
