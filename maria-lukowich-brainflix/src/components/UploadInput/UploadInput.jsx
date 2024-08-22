import React from 'react'
import "./UploadInput.scss"

function UploadInput() {
  return (
    <section className="upload-input">
        <form className="upload-input__form">
            <div className="upload-input__title-wrapper">
                <label className="upload-input__title-label">TITLE YOUR VIDEO</label>
                <input id="videoTitle" name="videoTitle" className="upload-input__video-title" placeholder="Add a title to your video"></input>
            </div>
            <div className="upload-input__description-wrapper">
                <label className="upload-input__description-label">ADD A VIDEO DESCRIPTION</label>
                <textarea id="videoDescription" name="videoDescription" className="upload-input__video-description" placeholder="Add a description to you video"></textarea>
            </div>
        </form>
    </section>
  )
}

export default UploadInput