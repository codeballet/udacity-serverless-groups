import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GroupsList } from './components/GroupsList'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <Route path="/" exact component={GroupsList} />
        </Router>
      </div>
    )
  }
}

export default App;
