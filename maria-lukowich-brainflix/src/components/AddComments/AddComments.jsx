import "./AddComments.scss";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import { useState } from "react";

function AddComments({ handleNewComment, comments }) {
  const [commentContent, setCommentContent] = useState("");

  const handleNewInput = (event) => {
    setCommentContent(event.target.value);
  };

  const handleFormSubmit = async (event) =>{
    event.preventDefault();

    if (commentContent.trim()){
      await handleNewComment(commentContent);
      setCommentContent("") // clear the textarea after submitting the comment
    }
  }


  return (
    <>
      <section className="comments">
        <h4 className="comments__length">{comments.length} Comments</h4>
        <form className="comments__new-comment" onSubmit={handleFormSubmit}>
          <img
            className="comments__main-img"
            src={mohan}
            alt="mohan-muruge"
          ></img>
          <div className="comments__wrapper">
            <label className="comments__join-convo">JOIN THE CONVERSATION</label>
            <div className="comments__textarea-comment">
              <textarea
                className="comments__textarea"
                placeholder="Add a new comment"
                value={commentContent}
                onChange={handleNewInput}
              ></textarea>
              <button type="submit" className="comments__add-btn">COMMENT</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddComments;
