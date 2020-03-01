import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import TopMenu from "./Components/TopMenu";
import Home from "./Components/Home";

interface Hello {
  compiler: string;
  framework: string;
}

export class App extends Component<Hello, {}> {
  render() {
    return (
      <Fragment>
        <TopMenu></TopMenu>
        <Home></Home>
      </Fragment>
    );
  }
}
