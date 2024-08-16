import "./Comments.scss";
import mohan from "../../assets/Images/Mohan-muruge.jpg";

function Comments() {
  return (
    <>
      <section className="comments">
        <h4 className="comments__length">3 Comments</h4>
        <form className="comments__new-comment">
          <img className="comments__main-img" src={mohan} alt="mohan-muruge"></img>
          <div className="comments__wrapper">
            <label class="comments__join-convo">JOIN THE CONVERSATION</label>
            <textarea className="comments__textarea" placeholder="Add a new comment"></textarea>
            <button className="comments__add-btn">COMMENT</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Comments;
