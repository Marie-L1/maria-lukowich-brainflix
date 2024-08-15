import './NextVideos.scss';

function NextVideos({ videos, nextVideoClick}){
    return(
        <>
        <h3 className="list-title">NEXT VIDEOS</h3>
         <ul className="next-videos">
            {videos.map(video => (
                <li
                key={video.id}
                className="next-videos__item"
                onClick={() => nextVideoClick(video.id)}
                >
                <img 
                className="next-videos__img"
                src={video.image}
                alt={video.title}
                />
                <div className="next-videos__text">
                    <h3 className="next-videos__title">{video.title}</h3>
                    <h3 className="next-videos__creator">{video.channel}</h3>
                </div>
          </li>
        ))}
        </ul>
    </>
    );

}

export default NextVideos;