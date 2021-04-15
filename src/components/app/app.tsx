import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
