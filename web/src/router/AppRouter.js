import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PlayerCard from "../components/player/PlayerCard";
import PlayerList from "../components/player/PlayerList";
import GameScreen from "../pages/GameScreen";
import PlayerScreen from "../pages/PlayerScreen";
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
          <Route exact path="/player-list" component={PlayerList} />
          <Route exact path="/player-card" component={PlayerCard} />
          <Route exact path="/player/:id" component={PlayerScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
