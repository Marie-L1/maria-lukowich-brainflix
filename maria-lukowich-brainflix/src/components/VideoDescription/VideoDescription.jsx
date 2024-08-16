import "./VideoDescription.scss";

function VideoDescription({description}) {
  return (
      <section className="video-description">
        <p className="video-description__text">{description}</p>
      </section>
  );
}

export default VideoDescription;
