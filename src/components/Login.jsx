import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch("http://localhost:3001/foodie/loginUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: credentials.email,
                    password: credentials.password
                }
            )
        });
        const json = await response.json();
        console.log(json.success);

        if (!json.success) {
            alert("Enter valid credentials");
        }
        if (json.success) {
            alert("You are logged in successfully")
            setCredentials({ email: "", password: "" });
            navigate('/');
            localStorage.setItem('authToken', json.authToken);
            console.log(json.authToken);
        }

    }

    const onChangeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">

            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={credentials.email}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input type='password' className='form-control' name="password" id='password' value={credentials.password} onChange={onChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 10 }}>
                    <Link to='/signup' style={{ color: 'black', textDecoration: 'none' }}>Sign Up</Link>
                </button>

            </form>
        </div>
    )
};

export default Login;