import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DMView from './containers/DMView';
import PlayerView from './containers/PlayerView';
import LoginContainer from './containers/LoginContainer';
import './App.css';

function App() {
    return (
        <Router>
            <nav className="ui pointing menu">
                <div className="header item">
                    <i className="compass icon"></i>
                    DnD Navigator
                </div>
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/dm/">DMView</Link>
                <Link className="item" to="/player/">PlayerView</Link>
            </nav>
  
            <Route path="/" exact render={() => <LoginContainer />} />
            <Route path="/dm/" render={() => <DMView campaign={""} />} />
            <Route path="/player/" render={() => <PlayerView character={""} />} />
      </Router>
  )
}

export default App;