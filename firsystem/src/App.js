import Header from "./components/Header";
import File from "./components/File";
import Home from "./components/Home";
import UpdateStatus from "./components/UpdateStatus";
import ViewFirs from "./components/ViewFirs";
import ViewStats from "./components/ViewStats";
import ViewStatus from "./components/ViewStatus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/file">
                <File />
              </Route>
              <Route exact path="/viewstatus">
                <ViewStatus />
              </Route>
              <Route exact path="/viewstats">
                <ViewStats />
              </Route>
              <Route exact path="/viewfirs">
                <ViewFirs />
              </Route>
              <Route exact path="/updatestatus">
                <UpdateStatus />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
