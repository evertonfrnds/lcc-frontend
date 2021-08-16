import React from "react";
import { Route, Switch } from "react-router";
import Header from "../../shared/components/Header";
import Navigation from "../../shared/components/Navigation";
import Products from "../Products";


function Home() {
  return <div>Home</div>
}
const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="switch">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Root;
