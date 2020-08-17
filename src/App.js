import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import { useStateValue } from './Context/StateContext';
import { auth } from './Component/FirebaseConfig/firebase';


function App() {

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          payload: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);
  console.log("User >>>>", user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
