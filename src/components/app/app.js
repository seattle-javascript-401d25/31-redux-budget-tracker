import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <h1>Budget Tracker</h1>
            <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            <Route exact path="/">          
            </Route>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
