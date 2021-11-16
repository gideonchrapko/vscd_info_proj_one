import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Home from './Components/Home';
import Credits from './Components/Credits';
import Donations from './Components/Donations';
import Recommendations from './Components/Recommendations';
import Sources from './Components/Sources';
import Crimeline from './Components/Timeline/Crimeline';
import NavBar from './Components/Navigation/NavBar';
import Background from './Components/Background';

import Twitter from './Assets/Twitt.svg'
import Instagram from './Assets/Insta.svg'
import Facebook from './Assets/Faceb.svg'

import "./App.css";

function App() {
  return (
    <div className="BG_container">
      <div style={{ position: "relative", zIndex: "2" }}>
        <Router>
          <NavBar />
          <Route 
            render={({ location }) => (
              <AnimatePresence initial={true} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route path="/" exact render={() => <Home />} />
                  <Route path="/Crimeline" render={() => <Crimeline />} />
                  <Route path="/Credits" render={() => <Credits />} />
                  <Route path="/Donations" render={() => <Donations />} />
                  <Route path="/Recommendations" render={() => <Recommendations />} />
                  <Route path="/Sources" render={() => <Sources />} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </Router>
      </div>
      <Background />
    </div>
  );
}

export default App;
