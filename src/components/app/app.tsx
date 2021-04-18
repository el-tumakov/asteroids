import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import "../../scss/style.scss";
import DestroyScreen from "../destroy-screen/destroy-screen";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen />
      </Route>
      <Route exact path="/destroy">
        <DestroyScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
