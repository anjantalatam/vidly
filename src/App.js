import "./App.css";
import React from "react";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
function App() {
  return (
    <>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/register' component={RegisterForm}></Route>
          <Route path='/movies/:id' component={MovieForm}></Route>
          <Route path='/movies' component={Movies}></Route>
          <Route path='/customers' component={Customers}></Route>
          <Route path='/rentals' component={Rentals}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </>
  );
}

export default App;
