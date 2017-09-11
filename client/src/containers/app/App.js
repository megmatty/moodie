import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home/Home';
import About from '../about/About';
import Dashboard from '../dashboard/Dashboard';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link><br />
      <Link to="/about-us">About</Link><br />
      <Link to="/dashboard">Dashboard</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
