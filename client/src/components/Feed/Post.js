import InputOption from './InputOption';
import React, { forwardRef } from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(
  (
    { name, email, description, achievement, experience, university, photoUrl },
    ref
  ) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={'http://localhost:5000' + photoUrl}>{name}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{university}</p>
            <p>{description}</p>
          </div>
        </div>

        <div className="post__body">
          <h3>My Achievements</h3>
          <hr />
          <p>{achievement}</p>
          <br />
          <h3>My Project/Experieces</h3>
          <hr />
          <p>{experience}</p>
          <br />
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
