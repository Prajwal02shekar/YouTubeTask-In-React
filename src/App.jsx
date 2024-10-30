import React, { useState } from 'react';
import VIDEO from './Video.json';
import VideoContainer from './Components/VideoContainer';
import './App.css';
// import PClogo from './assets/PClogo.jpg';
// import logo from './assets/logo2.jpg';
import Header from './Components/Header';


const App = () => {
  const [state, setState] = useState(VIDEO);
  const [play, setPlay] = useState(state[0]);

  const runVideo = (video) => {
    setPlay(video.videoUrl);
  };

  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <Header/>
        </div>
      </div>
      <VideoContainer state={state} play={play} runVideo={runVideo} />
    </div>
  );
};

export default App;

//? ----------------------------------------------------
