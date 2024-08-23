import "./VideoDescription.scss";
import views_img from '../../assets/Icons/views.svg';
import likes_img from '../../assets/Icons/likes.svg';

function VideoDescription({ title, channel, timestamp, views, likes, description}) {
  return (
    <section className="video-details">
    <h1 className="video-details__title">{title}</h1>

    <div className="video-details__info">
      <div className="video-details__info-left">
        <p className="video-details__channel">By {channel}</p>
        <p className="video-details__timestamp">{new Date(timestamp).toLocaleDateString()}</p>
      </div>
      </div>

      <section className="video-details__description">
        <p className="video-details__description-text">{description}</p>
      </section>

      <div className="video-details__info">
      <div className="video-details__info-wrapper" >
            <div className="video-details__info-views">
                <img className="video-details__views-img" src={views_img} alt="views"></img>
                <p className="video-player__views">{views}</p>
            </div>
            <div className="video-details__info-likes">
                <img className="video-details__likes-img" src={likes_img} alt="likes"></img>
                <p className="video-details__likes">{likes}</p>
            </div>
        </div>
        </div>
    </section>
  );
}

export default VideoDescription;
