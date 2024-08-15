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
    </>
  );
}

export default Comments;
