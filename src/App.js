import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import Headnav from './components/Headnav'
import './App.css';
import Homepage from './pages/Homepage';
import Graphic from './pages/Graphic';
import SuperMap from './pages/SuperMap';

function App() {
  return (
    <div>
      {/* <Mapp/> */}
      <Router>
          <Headnav/>
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
      </Router>
    </div>
  );
}

export default App;
