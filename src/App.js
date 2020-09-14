import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Patients from './Pages/Patients';
import Staff from './Pages/Staff';
import Pharmacy from './Pages/Pharmacy';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} />
          <Route path='/patients' exact component={Products} />
          <Route path='/staff' exact component={Reports} />
          <Route path='/pharmacy' exact component={Pharmacy} /> */}
          
          <Route path="/patients" exact>
            <Patients />
          </Route>
          <Route path="/staff" exact>
            <Staff />
          </Route>
          <Route path="/pharmacy" exact>
            <Pharmacy />
          </Route>
          <Route exact path="/projectreact">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
