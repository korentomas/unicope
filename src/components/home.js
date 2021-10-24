import { Banner, ImgCard, SponsorCard } from "./cards";

import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <ImgCard />
        <SponsorCard />
      </>
    );
  }
}

export { Home };
