import React from 'react';
import { Router } from '@reach/router';
import { Home } from './routes';

const Dashboard = () => <h1> Dashboard </h1>;

const App = () => (
  <Router>
    <Home path="/" />
    <Dashboard path="/dashboard" />
  </Router>
);

export default App;
