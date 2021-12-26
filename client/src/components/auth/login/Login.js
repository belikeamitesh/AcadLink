import './Update.css';
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

    fetch('http://localhost:5000/api/users/login', {
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
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setIsError(true);
      });
  };
  return (
    <div className="contain">
      <div className="p">
        <div className="form-div">
          <div>
            <img
              className="avatar"
              alt="avator"
              src={ManAvatar}
              style={{ height: '90px', width: '110px' }}
            />
          </div>
          <br />
          <div className="form-group">
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                email
              </label>
              <br />
              <input
                type="email"
                className="form-control"
                id="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="name">
                Password
              </label>
              <br />
              <input
                type="text"
                className="form-control"
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

        <Link to="/" className="n">
          <Button type="submit" variant="contained" className="btn mt-4">
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
