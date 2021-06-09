import React from 'react';
import {NavLink, useHistory} from "react-router-dom"

function Topmenu(props) {
    const history = useHistory();

    function logOutClick () {
        props.toggleIsAuthenticated(false)
        history.push("/")
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    {!props.isAuthenticated && (
                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                    )}
                    {props.isAuthenticated && (
                        <>
                            <li>
                                <NavLink to="/blog-overzicht" activeClassName="active-link">Blog overzicht</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogposts" activeClassName="active-link">Blogposts</NavLink>
                            </li>

                    <li>
                        <button
                            type="button"
                            onClick={logOutClick}

                        >logout</button>
                    </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Topmenu