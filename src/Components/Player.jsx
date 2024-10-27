import React from 'react'

const Player = ({ videoSrc }) => {
  return (
    <div>
      <video src={videoSrc} controls autoPlay></video>
    </div>
  );
};
export default Player

//?----------------------------------------------------

