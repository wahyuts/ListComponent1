import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import './App.css';
import Homepage from './pages/Homepage';
import Graphic from './pages/Graphic';
import SuperMap from './pages/SuperMap';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
              path="/"
              exact
              component={Homepage}
          />
          <Route
              path="/Graph"
              component={Graphic}
          />
          <Route
              path="/Map"
              component={SuperMap}
          />
          <Route
              exact
              path="/sign_in"
              component={LoginPage}
          />
          <Route
              exact
              path="/sign_up"
              component={RegisterPage}
          />
          {/* <Route exact path="/my-account-page">
              <LoginPage/>
          </Route> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
