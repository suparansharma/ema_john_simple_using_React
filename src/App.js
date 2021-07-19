import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SHOP from './components/SHOP/SHOP';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Nomatch from './components/Nomatch/Nomatch';


function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/shop">
        <SHOP></SHOP>
        </Route>
        <Route path="/review">
        <Review></Review>
        </Route>
        <Route path="/manage">
        <Inventory></Inventory>
        </Route>
        <Route exact path="/">
        <SHOP></SHOP>
        </Route>
        <Route path="*">
        <Nomatch></Nomatch>
        </Route>
        </Switch>
      </Router>
    
   
    </div>
  );
}

export default App;
