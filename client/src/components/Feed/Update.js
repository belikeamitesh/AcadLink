import './Update.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ManAvatar from '../logo.png';
// import Button from 'react-bootstrap/Button';
import { Button } from '@material-ui/core';
import { useState } from 'react';

export default function Update() {
  const [exp, setExp] = useState('');
  const [achievements, setAchievements] = useState('');
  const [status, setStatus] = useState('');

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const kek = {
      achievement: achievements,
      exp: exp,
      status: status,
    };
    console.log(kek);
    fetch('https://acadlink.herokuapp.com/api/posts', {
      method: 'POST',
      body: JSON.stringify(kek),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
        `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        console.log('posted');
        window.location.reload();
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
            <label className="control-label" htmlFor="name">
              Your Achievements
            </label>
            <br />
            <textarea
              type="text"
              className="form-control"
              id="name"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
            />
          </div>
          <br />

          <div className="form-group">
            <label className="control-label" htmlFor="projects">
              Your Experience/Projects
            </label>
            <br />
            <textarea
              type="text"
              className="form-control"
              id="name"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </div>
          <br />
          <label className="control-label" htmlFor="status">
            Your Status
          </label>
          <br />
          <textarea
            type="text"
            className="form-control"
            id="name"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
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
