import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import manLogo from "../Resources/images/logos/manchester_city_logo.png";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          background: "#98c5e9",
          padding: "10px 0",
          boxShadow: "none",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <Link to="/" className="link_logo">
                <div
                  className="img_cover"
                  style={{
                    width: 70,
                    height: 70,
                    background: `url(${manLogo}) no-repeat`
                  }}
                />
              </Link>
            </div>
          </div>
          <Link to="/team">
            <Button color="inherit">The Team</Button>
          </Link>
          <Link to="/matches">
            <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
