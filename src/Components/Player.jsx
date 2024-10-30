import React from 'react';

const Player = ({ videoSrc }) => {
  return (
    <div>
      <video src={videoSrc} controls autoPlay />
    </div>
  );
};

export default Player;


//?----------------------------------------------------

