import './App.css';
import Dashboard from './Containers/dashboard';
import Pages from './Containers/pages'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <Router> 
      <Switch>
        <Route path="/:id">
          <Pages/>
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
