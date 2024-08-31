import React from 'react'
import "./PublishBtn.scss";

function PublishBtn({ handleFormSubmit, title, description}) {
  const handlePublishClick = async () =>{
    if (title && description){
      try{
        await handleFormSubmit({title, description});
        alert("Your video has successfully been submitted")
      }catch(error){
        console.error("Error publishing video", error)
      }
    }

    
  }
  return (
    <section className="btns">
        <button className="btns__publish" onClick={handlePublishClick}>PUBLISH</button>
        <button className="btns__cancel">CANCEL</button>
    </section>
  )
}

export default PublishBtn