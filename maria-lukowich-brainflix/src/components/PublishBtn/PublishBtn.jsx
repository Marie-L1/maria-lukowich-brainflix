import React from 'react'
import "./PublishBtn.scss";

function PublishBtn() {
  const handlePublishClick = () =>{
    alert("Your video has successfully been submitted")
  }
  return (
    <section className="btns">
        <button className="btns__publish" onClick={handlePublishClick}>PUBLISH</button>
        <button className="btns__cancel">CANCEL</button>
    </section>
  )
}

export default PublishBtn