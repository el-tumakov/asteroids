import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import DestroyScreen from "../destroy-screen/destroy-screen";
import AsteroidScreen from "../asteroid-screen/asteroid-screen";
import "../../scss/style.scss";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen />
      </Route>
      <Route exact path="/destroy">
        <DestroyScreen />
      </Route>
      <Route exact path="/asteroid/:id">
        <AsteroidScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
