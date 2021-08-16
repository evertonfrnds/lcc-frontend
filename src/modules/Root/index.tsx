import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "../../shared/components/Header";
import Navigation from "../../shared/components/Navigation";
import Products from "../Products";
import ProductEdit from "../Products/pages/Edit";

const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="switch">
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/products" />} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductEdit} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Root;
