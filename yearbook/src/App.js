import './App.css';
import Dashboard from './Containers/dashboard';
import Page from './Containers/pages'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <Router> 
      <Switch>
        <Route path="/:page">
          <Page/>
        </Route>
        <Route path='/'>
          <Dashboard />        
        </Route>
      </Switch>
      </Router>
    </div>

  );
}

export default App;
