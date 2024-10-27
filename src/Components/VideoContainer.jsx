import React from 'react'
import PlayerList from './PlayerList';
import Player from './Player';

const VideoContainer = ({ state, play, runVideo }) => {
    // console.log(state, "state")
    // console.log(play, "play")
    // console.log(runVideo, "run video")

    return (
        <div className="video-container">
            <aside>
                <Player videoSrc={play} />
            </aside>
            <aside className="video-list">
                {state.map((data) => (
                    <PlayerList key={data.id} data={data} runVideo={runVideo} />
                ))}
            </aside>
        </div>
    );

}

export default VideoContainer

