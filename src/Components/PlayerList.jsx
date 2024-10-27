import React from 'react'

const PlayerList = ({ data, runVideo }) => {
  // console.log(data, "data from PlayerList")
  
  const { thumbnailUrl, title, views, duration } = data;

  return (
    <div className="video-item" onClick={() => runVideo(data)}>
      <figure>
        <img src={thumbnailUrl} alt={title} />
      </figure>
      <div className="video-item-content">
        <h1>{title.slice(0,15)}</h1>
        <p> Views: {views}</p>
        <p>Duration : {duration}</p>
      </div>
    </div>
  );
};
export default PlayerList

//?=-----------------------------------------------------------

