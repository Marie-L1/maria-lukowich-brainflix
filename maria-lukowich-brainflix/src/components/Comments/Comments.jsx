import "./Comments.scss";


// formating the timestamps 
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
}


function Comments({comments}) {
  return (
    <>
      <section className="comments">
        <h4>3 Comments</h4>
        <form className="comments__new-comment">
          <label class="comments__join-convo">JOIN THE CONVERSATION</label>
          <textarea className="comments__textarea" placeholder="Add a new comment"></textarea>
          <img className="comments__main-img" src="../../assets/Images/Mohan-muruge.jpg" alt="mohan-muruge"></img>
          <button className="comments__add-button">COMMENT</button>
        </form>
      </section>
      <ul className="comments-list">
        <li className="comments-list__item">
          <img className="comments-list__profile-img" alt="blank profile image"></img>
          <h3 className="comments-list__name">{comments.comments.name}</h3>
          <p className="comments-list__content">{comments.comment}</p>
          <h3 className="comment-list__date">{formatTimestamp(comments.timestamp)}</h3>
        </li>
      </ul>
    </>
  );
}

export default Comments;
