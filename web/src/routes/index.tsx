import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Landing2 from "../pages/Landing2";
import TeacherList from "../pages/TeacherList";
import TeacherForm from "../pages/TeacherForm";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/landing" exact component={Landing2} isPrivate />
      <Route path="/study" exact component={TeacherList} isPrivate />
      <Route path="/give-classes" exact component={TeacherForm} isPrivate />
    </Switch>
  );
}

export default Routes;
