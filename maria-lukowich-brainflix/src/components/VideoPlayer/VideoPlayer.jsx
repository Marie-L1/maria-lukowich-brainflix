import "./VideoPlayer.scss";

function VideoPlayer(){
    return (
      <section className="video-player">
        <video className="video-player__video"></video>
        <h1 className="video-player__title">The Future of Artifical Intelligence</h1>
        <div className="video-player__info">
            <p>By</p>
            <p>Timestamp</p>
            <p>Views</p>
            <p>likes</p>
        </div>
      </section>
    );
}

export default VideoPlayer;