// import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog';
import Link from './Components/Links';
import Pages from './Components/Pages';
import Home from './Components/Home';
import { Route , BrowserRouter   as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
        <Route exact path='/'>
             <Home />
          </Route>
          <Route path='/blog'>
               <Blog />
          </Route>
          <Route path='/link'>
              <Link />
          </Route>
          <Route path="/pages">
              <Pages />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
