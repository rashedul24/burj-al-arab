import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.from ||'/home'

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri)
          });
    }

    return (
        <div  className='text-center'>
            <h1 >Please Login</h1>
            <button onClick={handleGoogleLogIn}  className='btn btn-primary' >Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;