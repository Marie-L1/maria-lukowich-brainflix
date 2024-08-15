import './Comments.scss';

function Comments(){
    return(
        <>
        <ul className="comments-list">
            <li className="comments-list__item">
              <img className="comments-list__profile-img"></img>
              <h3 className="comments-list__name"></h3>
              <p className="comments-list__content"></p>
              <h3 className="comment-list__date"></h3>
            </li>
          </ul>
        </>
    )
}

export default Comments;