import './App.css'
import Header from './components/Header'
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/detail/:id'>
            <Detail/>  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
