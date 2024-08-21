import "./CommentsList.scss";
import avatar from "../../assets/Images/grey-background.png";
import axios from "axios";

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }).format(date);
  };

function CommentsList({comments = []}){  // default is an empty array if the comments are undefined
  console.log("comments:", comments);
    return(
        <ul className="comments-list">
            {comments.map((comment) =>
            <li key={comment.id} className="comments-list__item">
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