import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-reveal";

import firebase from "../firebase";

class Matches extends Component {
  state = {
    matches: []
  };

  componentDidMount = () => {
    firebase
      .database()
      .ref("matches")
      .limitToLast(6)
      .once("value")
      .then(snap => {
        const matches = [];
        snap.forEach(match => {
          matches.unshift({
            id: match.key,
            ...match.val()
          });
        });
        this.setState({
          matches
        });
      });
  };

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <div className="match_block">
                  <div className="match_date">
                    {match.final
                      ? match.date
                      : `Match not played yet: ${match.date}`}
                  </div>
                  <div className="match_wrapper">
                    <div className="match_top">
                      <div className="left">
                        <div
                          className="icon"
                          style={{
                            background: `url("/images/team_icons/${
                              match.localThmb
                            }.png")`
                          }}
                        />
                        <div className="team_name">{match.local}</div>
                      </div>
                      <div className="right">
                        {match.final ? match.resultLocal : "-"}
                      </div>
                    </div>
                    <div className="match_bottom">
                      <div className="left">
                        <div
                          className="icon"
                          style={{
                            background: `url("/images/team_icons/${
                              match.awayThmb
                            }.png")`
                          }}
                        />
                        <div className="team_name">{match.away}</div>
                      </div>
                      <div className="right">
                        {match.final ? match.resultAway : "-"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches_wrapper">
        <div className="container">
          <div
            style={{
              background: "#0e1731",
              fontSize: 50,
              color: "#fff",
              padding: "5px 10px",
              display: "inline-block",
              fontFamily: "Righteous"
            }}
          >
            Matches
          </div>
          <div className="home_matches">
            {this.showMatches(this.state.matches)}
          </div>
          <Link to="/team">
            <div
              style={{
                background: "#fff",
                fontSize: 22,
                color: "#0e1731",
                padding: "5px 10px",
                display: "inline-block",
                fontFamily: "Righteous"
              }}
            >
              See more matches
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Matches;
