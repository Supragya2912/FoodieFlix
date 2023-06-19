// 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/foodie/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json.success);

    if (!json.success) {
      alert('Enter valid credentials');
    }
    if (json.success) {
      alert('You are logged in successfully');
      setCredentials({ email: '', password: '' });
      navigate('/');
      localStorage.setItem('authToken', json.authToken);
      console.log(json.authToken);
    }
  };

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '35px', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChangeHandler}
            style={{ width: '100%' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChangeHandler}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
          Submit
        </button>
        <div style={{marginTop: 2}}>
        <p>New User?</p>
        </div>
        
        <button className="btn btn-secondary" style={{ width: '100%' }}>
          <Link to="/signup" style={{ color: 'black', textDecoration: 'none' }}>
            Sign Up
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
