import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div  className='text-center'>
      <h1>Please Register Here</h1>
      <br />
      <form>
      <input type="email" placeholder=' Your Email'/>
      <br />
      <br />
      <input type="password" placeholder='Your Password'/>
      </form>
      <br />
      <Link to="/login">Already Registered?</Link>
      <br />
      <button className="btn btn-primary mt-2" type="submit">Submit</button>
    </div>
  );
};

export default Register;