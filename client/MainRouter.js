import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import SignUp from "./user/SignUp";
import SignIn from "./auth/SignIn";
import EditProfile from "./user/EditProfile";
import Profile from "./user/Profile";
import Menu from "./core/Menu";
import PrivateRoute from "./auth/PrivateRoute";

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
      </Switch>
    </div>
  );
};

export default MainRouter;
