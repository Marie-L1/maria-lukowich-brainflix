import "./CommentsList.scss";

function CommentsList(selectedVideo){
    return(
        <ul className="comments-list">
            {selectedVideo.comments.map((comment, index) =>
            <li key={index} className="comments-list__item">
                <img className="comments-list__profile-img" alt="blank profile image"></img>
                <h3 className="comments-list__name">{comment.comments.name}</h3>
                <p className="comments-list__content">{comment.comment}</p>
                <h3 className="comment-list__date">{formatTimestamp(comment.timestamp)}</h3>
            </li>)}
      </ul>
    )
}
export default CommentsList;