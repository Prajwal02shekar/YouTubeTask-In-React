import React, { useState } from 'react'
import VIDEO from './Video.json'
import VideoContainer from './Components/VideoContainer'
import "./App.css";

const App = () => {
  const [state, setState] = useState(VIDEO);
  const [play, setPlay] = useState(state[0]);

  

  const runVideo = (video) => {
    setPlay(video.videoUrl);
  };

  return (
    <div>
      <VideoContainer state={state} play={play} runVideo={runVideo} />
    </div>
  );
};

export default App

//? ----------------------------------------------------
