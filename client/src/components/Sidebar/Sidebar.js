import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './Sidebar.css';

import axios from 'axios';

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [classn, setClassn] = useState('');
  const [profile, setProfile] = useState('');
  const [invite, setInvite] = useState('');
  const [inviteCount, setInviteCount] = useState('');

  axios
    .get('https://acadlink.herokuapp.com/api/users/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      const { data } = res;
      setEmail(data.email);
      setName(data.name);
      setUniversity(data.university);
      setClassn(data.branch);
      setProfile(data.profile);
      setInvite(data.inviteCode);
      setInviteCount(data.inviteCounts);
      // data.invitedBy.name?setInvitedBy(data.invitedBy.name):setInvitedBy('None');
    });
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="background"
        />
        <Avatar
          src={'https://acadlink.herokuapp.com' + profile}
          className="sidebar__avatar"
        >
          Amitesh
        </Avatar>
        <h2>{name} </h2>
        <h4>{classn}</h4>
        <h4>{university}</h4>
        <h4>{email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Bonus Points :</p>
          <p className="sidebar__statNumber">{inviteCount * 10}</p>
        </div>

        <div className="sidebar__stat">
          <p>Profile Views</p>
          <p className="sidebar__statNumber">
            1266
          </p>
        </div>
        <div className="sidebar__stat">
          <p>Your Invite Code</p>
          <p className="sidebar__statNumber">{invite}</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('IIT Kanpur')}
        {recentItem('CSE')}
        {recentItem('IT')}
        {recentItem('Google')}
        {recentItem('Microsoft')}
        <h4>Followed Hastags</h4>
        {recentItem('Projects')}
        {recentItem('Internships')}
        {recentItem('Jobs')}
        {recentItem('College')}
        {recentItem('tech')}
      </div>
    </div>
  );
}
