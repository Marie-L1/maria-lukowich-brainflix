import "./CommentsList.scss";

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).format(date);
  };

function CommentsList({comments}){
    return(
        <ul className="comments-list">
            {comments.map((comment, index) =>
            <li key={index} className="comments-list__item">
                <img className="comments-list__profile-img" alt="blank profile image"></img>
                <h3 className="comments-list__name">{comment.name}</h3>
                <p className="comments-list__content">{comment.comment}</p>
                <h3 className="comment-list__date">{formatTimestamp(comment.timestamp)}</h3>
            </li>)}
      </ul>
    )
}
export default CommentsList;