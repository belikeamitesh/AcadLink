import React, { useState, useEffect } from 'react';
import './Feed.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import InputOption from './InputOption';
import Post from './Post';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from 'react-flip-move';
import { Button } from '@material-ui/core';

export default function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        // console.log(response);
        const myPatients = response.data;
        console.log(myPatients);
        setPosts(myPatients);
      } catch (err) {
        console.log(err);
      }
    };
    getPatients();
  }, []);

  const getPatients = async (id) => {
    try {
      console.log(id);
      const response = await axios.post(``);
      console.log(response);
      // const newp =patients.filter(patient => id!== patient.id);
      // setPatients(newp);
    } catch (err) {
      console.log(err);
    }
  };

  const sendPost = (e) => {
    e.preventDefault();
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
         <Link to="/update"> <Button variant="contained">Post Something?</Button> </Link>
         <Button variant="contained">Choose a University:</Button>
         <select name="universities" id="universities">
           <option value="IITG">IIT Guwahati</option>
           <option value="IITK">IIT Kanpur</option>
          </select>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#F5987E"
          />
        </div>
      </div>
      <hr />

      {/* Posts */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.author.name}
            email={post['author']['email']}
            description={post['author']['branch']}
            achievement={post['achievement']}
            experience={post['exp']}
            status={post['status']}
            university={post['author']['university']}
            photoUrl={post['author']['profile']}
          />
        ))}
      </FlipMove>
    </div>
  );
}
