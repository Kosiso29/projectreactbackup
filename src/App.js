import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Reports from './Pages/Reports';
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
            <Products />
          </Route>
          <Route path="/staff" exact>
            <Reports />
          </Route>
          <Route path="/pharmacy" exact>
            <Pharmacy />
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
