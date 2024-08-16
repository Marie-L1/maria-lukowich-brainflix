import "./CommentsList.scss";
import avatar from "../../assets/Images/grey-background.png";

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
                <img src={avatar} className="comments-list__profile-img" alt="blank profile image"></img>
                <div className="comments-list__text-wrapper">
                  <h3 className="comments-list__name">{comment.name}</h3>
                  <p className="comments-list__content">{comment.comment}</p>
                </div>
                <h3 className="comments-list__date">{formatTimestamp(comment.timestamp)}</h3>
            </li>)}
      </ul>
    )
}
export default CommentsList;