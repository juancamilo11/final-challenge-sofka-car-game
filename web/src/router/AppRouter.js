import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GameScreen from "../pages/GameScreen";
import PodiumHistoryScreen from "../pages/PodiumHistoryScreen";
import PodiumScreen from "../pages/PodiumScreen";
import SetupGameScreen from "../pages/SetupGameScreen";
import WelcomeScreen from "../pages/WelcomeScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/game" component={GameScreen} />
          <Route exact path="/podium" component={PodiumScreen} />
          <Route exact path="/podium-list" component={PodiumHistoryScreen} />
          <Route exact path="/setup-game" component={SetupGameScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
