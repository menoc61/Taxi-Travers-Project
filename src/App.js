import React from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import{Home,Trade} from "./components/index";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Trade" component={Trade} />
      <Route exact path="/Landing" component={LandingPage} />
    </Switch>
  );
}

export default App;
