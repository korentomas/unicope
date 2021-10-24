import { Helmet } from "react-helmet";
import { ScrollView } from "@cantonjs/react-scroll-view";
import React from "react";
import ReactDOM from "react-dom";
import { NavigationBar } from "./components/navibar";
import { Stars } from "./components/stars";
import { Home } from "./components/home";
import "./module.scss";

function App() {
  var page = "home";
  return (
    <div>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <ScrollView style={{ height: "100vh" }}>
        <div
          styles={{
            overflowY: "scroll",
            display: "none",
            whiteSpace: "nowrap"
          }}
        >
          <NavigationBar />
          <Stars />
          <Home />
        </div>
      </ScrollView>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
