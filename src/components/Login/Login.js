import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div  className='text-center'>
            <h1 >Please Login</h1>
            <button className='btn btn-primary' >Google Sign In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;