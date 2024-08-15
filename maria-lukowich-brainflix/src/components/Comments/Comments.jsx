import "./Comments.scss";

function Comments() {
  return (
    <>
      <section className="comments">
        <h4>3 Comments</h4>
        <form className="comments__new-comment">
          <label>JOIN THE CONVERSATION</label>
          <input></input>
          <textarea></textarea>
          <img></img>
          <button>COMMENT</button>
        </form>
      </section>
      <ul className="comments-list">
        <li className="comments-list__item">
          <img className="comments-list__profile-img"></img>
          <h3 className="comments-list__name"></h3>
          <p className="comments-list__content"></p>
          <h3 className="comment-list__date"></h3>
        </li>
      </ul>
    </>
  );
}

export default Comments;
