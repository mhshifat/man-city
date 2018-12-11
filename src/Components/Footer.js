import React, { Component } from "react";
import { Link } from "react-router-dom";
import manLogo from "../Resources/images/logos/manchester_city_logo.png";

class Footer extends Component {
  render() {
    return (
      <footer className="bck_blue">
        <div className="footer_logo">
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
        <div className="footer_discl">
          Manchester City 2018.All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
