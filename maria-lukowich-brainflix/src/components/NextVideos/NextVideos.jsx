import './NextVideos.scss';

function NextVideos(){
    return(
        <>
         <ul className="next-videos">
          <li className="next-videos__item">
            <img className="next-videos__img"></img>
            <h3 className="next-videos__title"></h3>
            <h3 className="next-videos__creator"></h3>
          </li>
        </ul>
        </>
    )
}

export default NextVideos;