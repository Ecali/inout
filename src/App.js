import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";

import BootstrapLinks from './components/BootstrapLinks'
import Navigation from './components/Navigation'
import Add from './components/Add'
import Home from './components/Honme'
import Login from './components/Login'
import All from './components/All'
function App() {
  return (
    <div className="App">
     <BootstrapLinks />
     <Router>
      <Navigation />
      <Switch>
        <Route path={'/home'} component={Home} />
        <Route path={'/add'} component={Add} />
        <Route path={'/all'} component={All} />
        <Route path={'/login'} component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
