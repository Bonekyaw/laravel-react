import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './src/Home';
import Add from './src/post/Add';
import Edit from './src/post/Edit';

const App = () => {
    return (
      <Router>
        <div className="container">
          <nav >
            <ul className="nav mt-2 mb-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add New</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/add" >
              <Add/>
            </Route>
            <Route path="/edit/:id">
              <Edit/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
