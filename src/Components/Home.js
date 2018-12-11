import React from "react";

import Hero from "./Hero";
import Matches from "./Matches";
import Players from "./Players";
import Promotion from "./Promotion";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Matches />
      <Players />
      <Promotion />
    </React.Fragment>
  );
};

export default Home;
