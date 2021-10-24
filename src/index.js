import { Helmet } from "react-helmet";
import { ScrollView } from "@cantonjs/react-scroll-view";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { NavigationBar } from "./components/navibar";
import { Stars } from "./components/stars";
import { Home } from "./components/home";
import { Contact } from "./components/contact";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";

import "./module.scss";

const Header = props => {
  const { location } = props;
  return <NavigationBar />;
};

const HeaderWithRouter = withRouter(Header);

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <ScrollView style={{ height: "100vh" }}>
        <div
          styles={{
            height: "10px",
            overflowY: "scroll",
            display: "none",
            whiteSpace: "nowrap"
          }}
        >
          <Router>
            <Fragment>
              <HeaderWithRouter />
              <Stars />
              <Route path="/" exact component={Home} />

              <Route path="/contacto" exact component={Contact} />
            </Fragment>
          </Router>
        </div>
      </ScrollView>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
