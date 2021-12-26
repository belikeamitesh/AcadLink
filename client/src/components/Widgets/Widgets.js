import React from 'react';
import './Widgets.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>AcadLink News</h2>
        <InfoOutlinedIcon />
      </div>
      {newsArticle(
        'Amitesh Kumar from IIIT Guwahati Bags the highest package in CSE department.'
      )}
      {newsArticle(
        'IIT Kanpur student bags the highest pacakge in India',
        'Top news - 3126 readers'
      )}
      {newsArticle(
        'Prateek shares his experience of how he got into google',
        'Top news - 2926 readers'
      )}
      {newsArticle(
        'Rituaparna shows his projects which helped him land into his dream job',
        'Top news - 4231 readers'
      )}

      {/* <img src="" alt="ad"/> */}
    </div>
  );
}

export default Widgets;
