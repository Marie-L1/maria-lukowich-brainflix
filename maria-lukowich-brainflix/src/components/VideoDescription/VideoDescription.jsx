import "./VideoDescription";

function VideoDecription({description}) {
  return (
    <>
      <section className="video-description">
        <p className="video-description__text">{description}</p>
      </section>
    </>
  );
}

export default VideoDecription;
