import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function Home() {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Home;