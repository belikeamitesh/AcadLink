import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
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
  const [universities, setUniversities] = useState([]);
  const [branches, setBranches] = useState([]);
  // const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  function handleSearch() {
    const univ = document.getElementById('university');
    let url = new URL('https://acadlink.herokuapp.com/api/posts/filter');
    url.searchParams.append('search', univ.value);

    fetch(url.href)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setPosts(res);
      });
    // console.log(url.href);
  }

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get('https://acadlink.herokuapp.com/api/posts');
        // console.log(response);
        const myPatients = response.data;
        console.log(myPatients);
        setPosts(myPatients);
        const { data: listData } = await axios.get(
          'https://acadlink.herokuapp.com/api/posts/filters'
        );
        setUniversities(listData.univs);
        setBranches(listData.branches);
        console.log(listData.branches);
        console.log(listData.univs);
      } catch (err) {
        console.log(err);
      }
    };
    getPatients();
  }, []);


  return (
    <div className="feed">
      <strong className="lit">Sort By : &nbsp;</strong>
      <select name="universities" id="university">
        {universities.map((x) => {
          return (
            <option className="opt" value={x}>
              {x}
            </option>
          );
        })}
        {branches.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <Link to="/update">
            <Button variant="contained">Post Something?</Button>
          </Link>
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
