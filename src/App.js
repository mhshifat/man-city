import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Hoc/Layout";
import Home from "./Components/Home";
import Team from "./Components/Team";
import MatchesHome from "./Components/MatchesHome";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AdminMatches from "./Components/AdminMatches";
import EditMatches from "./Components/EditMatches";
import AdminPlayers from "./Components/AdminPlayers";
import AddPlayers from "./Components/AddPlayers";

import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/matches" component={MatchesHome} />
          <PublicRoute
            {...this.props}
            exact
            restricted={true}
            path="/login"
            component={Login}
          />
          <PrivateRoute
            {...this.props}
            path="/dashboard"
            component={Dashboard}
            exact
          />
          <PrivateRoute
            {...this.props}
            exact
            path="/admin_matches"
            component={AdminMatches}
          />
          <PrivateRoute
            {...this.props}
            path="/admin_matches/edit_match/:id"
            component={EditMatches}
            exact
          />
          <PrivateRoute
            {...this.props}
            path="/admin_matches/edit_match"
            component={EditMatches}
            exact
          />
          <PrivateRoute
            {...this.props}
            path="/admin_players"
            component={AdminPlayers}
            exact
          />
          <PrivateRoute
            {...this.props}
            path="/admin_players/add_players"
            component={AddPlayers}
            exact
          />
          <PrivateRoute
            {...this.props}
            path="/admin_players/add_players/:id"
            component={AddPlayers}
            exact
          />
        </Switch>
      </Layout>
    );
  }
}

export default App;
