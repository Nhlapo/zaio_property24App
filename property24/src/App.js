import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from "./Register/Footer"
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/layout/Home'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/Home' component={Home} />

          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />

          </Switch>

        
          <div className="App">
            <Footer />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;