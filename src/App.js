import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Topmenu from "./components/Topmenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogOverzicht from "./pages/Blog-overzicht";
import Blogposts from "./pages/Blogposts";


function App() {


    
    
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    // console.log(posts);
  return (
    <Router>
        <Topmenu
            isAuthenticated={isAuthenticated}
            toggleIsAuthenticated={toggleIsAuthenticated}/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route  path="/login">
                <Login
                    isAuthenticated={isAuthenticated}
                    toggleIsAuthenticated={toggleIsAuthenticated}
                />
            </Route>


            <Route  path="/blog-overzicht">
                {isAuthenticated ? <BlogOverzicht/> : <Redirect to="/login"/>}
            </Route>

            <Route  path="/blogposts/:id">
                {isAuthenticated ? <Blogposts/> : <Redirect to="/login"/> }
            </Route>



        </Switch>
    </Router>
  );
}

export default App;
