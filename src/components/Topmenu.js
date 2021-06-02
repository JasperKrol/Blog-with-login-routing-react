import React from 'react';
import { NavLink } from "react-router-dom"

function Topmenu () {
    return(
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog-overzicht" activeClassName="active-link">Blog overzicht</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Topmenu