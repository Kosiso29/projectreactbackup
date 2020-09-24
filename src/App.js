import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Staff from './Pages/Staff';
import Pharmacy from './Pages/Pharmacy';
import Signup from './Pages/Signin';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/projectreact" >
            <Signup />
          </Route>
          <Switch>
            
          {/* <Route path='/' exact component={Home} />
          <Route path='/patients' exact component={Products} />
          <Route path='/staff' exact component={Reports} />
          <Route path='/pharmacy' exact component={Pharmacy} /> */}
          
          <Route path="/patients" exact>
          <Navbar />
            <Patients />
          </Route>
          <Route path="/staff" exact>
          <Navbar />
            <Staff />
          </Route>
          <Route path="/pharmacy" exact>
          <Navbar />
            <Pharmacy />
          </Route>
          <Route exact path="/dashboard">
          <Navbar />
            <Dashboard />
          </Route>
        </Switch>
        </Switch>
      </Router>
    </>
  );
}

export default App;
