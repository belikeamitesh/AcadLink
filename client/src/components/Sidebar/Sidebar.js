import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="background"
        />
        <Avatar
          src="https://image.pngaaa.com/294/1274294-middle.png"
          className="sidebar__avatar"
        >
          Amitesh
        </Avatar>
        <h2>Amitesh Kumar</h2>
        <h4>amitesh.kumar@iiitg.ac.in</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">126</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">67</p>
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
