import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Menu} />
      </div>
    </Router>


  );
}

export default App;
