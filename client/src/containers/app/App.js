import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home/Home';
import About from '../about/About';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../profile/Profile';


const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link><br />
      <Link to="/entry">Entries</Link><br />
      <Link to="/dashboard">Dashboard</Link><br />
      <Link to="/profile">Profile</Link><br />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/entry" component={About} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
    </main>
  </div>
)

export default App
