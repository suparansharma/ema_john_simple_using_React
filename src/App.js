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
import Productdetails from './components/Productdetails/Productdetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const UserContext = createContext();




function App() {

  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser,setLoggedInUser]}>
      <h3>Email : {loggedInUser.email}</h3>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/shop">
        <SHOP></SHOP>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/shipment">
       <Shipment></Shipment>
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
        <Route path="/product/:productKey">
        <Productdetails></Productdetails>
        </Route>
        <Route path="*">
        <Nomatch></Nomatch>
        </Route>

        <Route path="/login">
        <Login></Login>
        </Route>


       

        </Switch>
      </Router>
    
   
    </UserContext.Provider>
  );
}

export default App;
