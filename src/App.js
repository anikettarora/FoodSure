import './App.css';
import Home from './screens/Home';
// router dom is imported for no reloads
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';

//cannot return multiple div only one div can be returned in this
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}></Route>
          <Route exact path = "/login" element = {<Login/>}></Route>
          <Route exact path = "/createuser" element = {<Signup/>}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;
