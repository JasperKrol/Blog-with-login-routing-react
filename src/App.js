import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Topmenu from "./components/Topmenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogOverzicht from "./pages/Blog-overzicht";
import Blogposts from "./pages/Blogposts";
import posts from './data/posts.json';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    // console.log(posts);
  return (
    <Router>
        <Topmenu/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/login">
                <Login/>
            </Route>

            <Route exact path="/blog-overzicht">
                <BlogOverzicht
                posts = {posts}
                />
            </Route>

            <Route exact path="/blogposts">
                <Blogposts/>
            </Route>


        </Switch>
    </Router>
  );
}

export default App;
