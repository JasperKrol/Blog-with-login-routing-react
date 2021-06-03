import {Link, useHistory} from 'react-router-dom';
import React, {useState} from "react";

function Login(props) {
    console.log(props)

    const history = useHistory();

    function handleClick() {
        if (email === "111" && password === "111") {
            console.log("INGELOGD!");
            props.toggleIsAuthenticated(true);
            history.push("/blog-overzicht");
        } else {
            console.log("Helaas");
        }

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <>
            <div>
                <label htmlFor="email">email
                    <input type="email" value={email} onChange={(event => setEmail(event.target.value))}/></label>
                <label htmlFor="password">password
                    <input type="password" value={password} onChange={(event => setPassword(event.target.value))}/></label>
            </div>
            <button
                type="button"
                onClick={handleClick}

            >Login
            </button>
        </>

    )
}

export default Login