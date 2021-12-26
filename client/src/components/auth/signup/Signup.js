import './signup.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ManAvatar from '../../logo.png';
// import Button from 'react-bootstrap/Button';
import { Button } from '@material-ui/core';
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');
  const [branch, setBranch] = useState('');
  const [invite, setInvite] = useState('');

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const kek = {
      name: username,
      email,
      password,
      university,
      branch,
      invite,
    };

    fetch('https://acadlink.herokuapp.com/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(kek),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log('posted');
        window.location.assign('https://acadlink.netlify.app/');
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setIsError(true);
      });
  };
  return (
    <div className="contain1">
      <div className="p">
        <div className="form-div1">
          <div>
            <img
              className="avatar"
              alt="avator"
              src={ManAvatar}
              style={{ height: '90px', width: '110px' }}
            />
          </div>
          <br />
          <h3>Sign up for AcadLink </h3>
          <br />
          <div className="form-group">
            <label className="control-label" htmlFor="name">
              Name
            </label>
            <br />
            <input
              type="text"
              className="form-control1"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="control-label" htmlFor="name">
              Email
            </label>
            <br />
            <input
              type="email"
              className="form-control1"
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
              className="form-control1"
              id="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="control-label" htmlFor="name">
              University
            </label>
            <br />
            <input
              type="text"
              className="form-control1"
              id="name"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="control-label" htmlFor="name">
              Branch
            </label>
            <br />
            <input
              type="text"
              className="form-control1"
              id="name"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="control-label" htmlFor="name">
              Invite Code (Optional)
            </label>
            <br />
            <input
              type="text"
              className="form-control1"
              id="name"
              value={invite}
              onChange={(e) => setInvite(e.target.value)}
            />
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
        <br />
        <br />
        <Link to="/login" className="n">
          <Button type="submit" variant="contained" className="btn mt-4">
            Already Have an account? Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}
