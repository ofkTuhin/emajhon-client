
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Notfound from './Components/Notfound/Notfound';
import Productdetail from './Components/Productdetails/Productdetail';
import Shipment from './Components/Shipment/Shipment';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext=createContext()


function App() {
const [logedInUser,setLoggedInUser]=useState({})
  return (
    
    <UserContext.Provider value={[logedInUser,setLoggedInUser]}>
     
      <h3>email:{logedInUser.email}</h3>
     
    <Router>
    <Header></Header>
     <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/order">
           <Order></Order>
          </Route>
          <PrivateRoute path="/inventory">
           <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
           <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
           <Login></Login>
          </Route>

          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <Productdetail></Productdetail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
    </Router>
     
    </UserContext.Provider>
  );
}

export default App;
