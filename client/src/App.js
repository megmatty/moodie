import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home/Home';
import Addnew from './containers/Addnew/Addnew';
import Dashboard from './containers/dashboard/Dashboard';
import Profile from './containers/profile/Profile';


const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link><br />
      <Link to="/addnew">Add New Entry</Link><br />
      <Link to="/dashboard">Dashboard</Link><br />
      <Link to="/profile">Profile</Link><br />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/addnew" component={Addnew} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/profile" component={Profile} />
    </main>
  </div>
)

export default App
