import "./VideoPlayer.scss";
import views_img from '../../assets/Icons/views.svg';
import likes_img from '../../assets/Icons/likes.svg';

function VideoPlayer({ video, poster, title, channel, timestamp, views, likes}){
    return (
      <section className="video-player">
        <video className="video-player__video" controls poster={poster}>
          <source src={video}></source>
        </video>
        <h1 className="video-player__title">{title}</h1>
        <div className="video-player__info">
            <p className="video-player__channel">By {channel}</p>
            <p className="video-player__timestamp">{new Date(timestamp).toLocaleDateString()}</p>

            <img src={views_img} alt="views"></img>
            <p className="video-player__views">{views}</p>

            <img src={likes_img} alt="likes"></img>
            <p className="video-player__likes">{likes}</p>
        </div>
      </section>
    );
}

export default VideoPlayer;