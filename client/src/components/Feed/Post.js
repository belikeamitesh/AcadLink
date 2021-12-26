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
          <Avatar src={'https://acadlink.herokuapp.com' + photoUrl}>{name}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{university}</p>
            <p>{description}</p>
          </div>
        </div>

        <div className="post__body">
          <h4>Hi I am {name}</h4>
          <br />
          <h4 className="ach">My Achievements</h4>
          <br />
          <p>{achievement}</p>
          <br />
          <h4 className="ach">My Project/Experieces</h4>
          <br />
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
