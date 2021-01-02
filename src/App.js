import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Panel from "./components/Panel";

import logo from './logo.svg';
import './App.css';

class App extends Component{

  // Prevent page reload, clear input
  handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
  }

  render() {
    return(
        <div>
            <Panel />
        </div>


        // <Router>
        //
        //   <div className="container">
        //       <Switch>
        //           <Route
        //               render={props => (
        //                   <Overlay />
        //               )}
        //           />
        //
        //       </Switch>
        //       <Route
        //           render={props => (
        //               <Map />
        //           )}
        //       />
        //   </div>
        // </Router>
    );
  }
}

export default App;
