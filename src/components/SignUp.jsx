import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {


        e.preventDefault();
        const response = await fetch("http://localhost:3001/foodie/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.geolocation
                }
            )
            
        })
        const json = await response.json();
        console.log(json);

        if(json.response){
            alert("Enter valid credentials");
        }
        else{
            alert("You are added successfully")
            setCredentials({ name: "", email: "", password: "", geolocation: "" });
        }
    };

    const onChangeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name='name'
                        value={credentials.name}
                        onChange={onChangeHandler}
                    />
                </div>

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

                <div className='mb-3'>
                    <label htmlFor='geolocation' className='form-label'>
                        Geolocation
                    </label>
                    <input type='text' className='form-control' name="geolocation" id='geolocation' value={credentials.geolocation} onChange={onChangeHandler} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                <button className='btn btn-secondary' style={{ marginLeft: 10 }}>
                    <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
                </button>
                
            </form>
        </div>
    );
};

export default SignUp;
