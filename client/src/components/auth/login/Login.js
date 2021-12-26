import './login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ManAvatar from '../../logo.png';
// import Button from 'react-bootstrap/Button';
import { Button } from '@material-ui/core';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const kek = {
      email,
      password,
    };

    fetch('https://acadlink.herokuapp.com/api/users/login', {
      method: 'POST',
      body: JSON.stringify(kek),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setIsError(true);
      });
  };
  return (
    <div className="contain2">
      <div className="p">
        <div className="form-div2">
          <div>
            <img
              className="avatar"
              alt="avator"
              src={ManAvatar}
              style={{ height: '90px', width: '110px' }}
            />
          </div>
          <br />
          <h1>Sign In </h1>
          <br />
          <div className="form-group">
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                Email
              </label>
              <br />
              <input
                type="email"
                className="form-control2"
                id="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                Password
              </label>
              <br />
              <input
                type="text"
                className="form-control2"
                id="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <br />
        </div>
        <br />

        {isError && (
          <small className="mt-4 d-inline-block text-danger">
            Something went wrong. Please try again later.
          </small>
        )}
        <Link to="/" className="m">
          <Button
            type="submit"
            className="btn mt-4"
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </Link>

        <Link to="/signup" className="n">
          <Button type="submit" variant="contained" className="btn mt-4">
            Sign Up?
          </Button>
        </Link>
      </div>
    </div>
  );
}
