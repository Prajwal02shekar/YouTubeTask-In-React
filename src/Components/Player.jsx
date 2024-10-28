import React from 'react'

const Player = ({ videoSrc }) => {
  console.log(videoSrc, "Player")
  return (
    <div>
      <video src={videoSrc} controls autoPlay></video>
    </div>
  );
};
export default Player

//?----------------------------------------------------

