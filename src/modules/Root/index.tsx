import React from "react";
import { Switch } from "react-router";
import Header from "../../shared/components/Header";
import Navigation from "../../shared/components/Navigation";

const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="switch">
        <div className="container">
          <Switch></Switch>
        </div>
      </div>
    </div>
  );
};

export default Root;
