
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/foodie/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.response) {
      alert('Enter valid credentials');
    } else {
      alert('You have been added successfully');
      setCredentials({ name: '', email: '', password: '', geolocation: '' });
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await fetch('http://localhost:5000/foodie/createUser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         name: credentials.name,
  //         email: credentials.email,
  //         password: credentials.password,
  //         location: credentials.geolocation,
  //       }),
  //     });
  
  //     const json = await response.json();
  //     console.log(json);
  
  //     if (json.response) {
  //       alert('Enter valid credentials');
  //     } else {
  //       alert('You have been added successfully');
  //       setCredentials({ name: '', email: '', password: '', geolocation: '' });
  //     }
  //   } catch (error) {
  //     // Handle the error here
  //     console.error('An error occurred:', error);
  //     // Additional error handling logic if needed
  //   }
  // };
  

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '35px', border: '1px solid #ccc', borderRadius: '5px', padding: '20px'}}>
      <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChangeHandler}
            style={{ width: '100%' }}
          />
        </div>

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

        <div className="form-group">
          <label htmlFor="geolocation" className="form-label">
            Geolocation
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            id="geolocation"
            value={credentials.geolocation}
            onChange={onChangeHandler}
            style={{ width: '100%' }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '10px' }}
        >
          Submit
        </button>
        <button className="btn btn-secondary" style={{ width: '100%', marginTop: '10px' }}>
          <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SignUp;


//ramesh123
//rameshkumar@gmail.com