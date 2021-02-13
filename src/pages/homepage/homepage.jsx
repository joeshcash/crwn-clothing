import React from "react";

import DirectoryContainer from "../../components/Directory/Directory.container";

import { HomePageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <HomePageContainer>
      <DirectoryContainer />
    </HomePageContainer>
  );
};

export default Homepage;
