import React, { Component } from "react";
import { Reveal } from "react-reveal";
import { Link } from "react-router-dom";

import Stripes from "../Resources/images/stripes.png";

import HomeCards from "./HomeCards";

class Players extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true
          });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div
                  style={{
                    background: "#0e1731",
                    fontSize: 100,
                    color: "#ffffff",
                    display: "inline-block",
                    marginBottom: "20px",
                    fontFamily: "Righteous"
                  }}
                >
                  Meet
                </div>
                <div />
                <div>
                  <div
                    style={{
                      background: "#0e1731",
                      fontSize: 100,
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "20px",
                      fontFamily: "Righteous"
                    }}
                  >
                    The
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      background: "#0e1731",
                      fontSize: 100,
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "20px",
                      fontFamily: "Righteous"
                    }}
                  >
                    Players
                  </div>
                </div>
                <div>
                  <Link to="/team">
                    <div
                      style={{
                        background: "#ffffff",
                        fontSize: 27,
                        color: "#0e1731",
                        padding: "5px 10px",
                        display: "inline-block",
                        fontFamily: "Righteous",
                        marginBottom: "27px",
                        border: "1px solid #0e1731"
                      }}
                    >
                      Meet them here
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Players;
