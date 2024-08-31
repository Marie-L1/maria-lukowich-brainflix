import "./VideoPlayer.scss";

function VideoPlayer({ video, poster }){
    return (
      <section className="video-player">
        <div className="video-player__video-wrapper">
          <video className="video-player__video" controls poster={poster}>
            <source src={video}></source>
          </video>
        </div>
      </section>
    );
}

export default VideoPlayer;