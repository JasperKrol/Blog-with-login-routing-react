import { Link, useHistory } from 'react-router-dom';

function Login () {

    const history = useHistory();

    function handleClick() {
        history.push("/blog-overzicht");
    }

    return (
        <>
        <button
            type="button"
            onClick={handleClick}

        >Login</button>
        </>

    )
}

export default Login