import React from "react";
import "./UploadInput.scss";
import { Navigate } from "react-router-dom";

function UploadInput({ title, description, setTitle, setDescription, handleFormSubmit}) {
  const handleNewTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleNewDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (title && description) {
      try {
        await handleFormSubmit({ title, description });
        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Could not upload", error);
      }
    }
  };

  return (
    <>
    <section className="upload-input">
      <form className="upload-input__form" onSubmit={handleSubmit}>
        <div className="upload-input__title-wrapper">
          <label className="upload-input__title-label">TITLE YOUR VIDEO</label>
          <input
            id="videoTitle"
            name="videoTitle"
            className="upload-input__video-title"
            placeholder="Add a title to your video"
            value={title}
            onChange={handleNewTitle}
          ></input>
        </div>
        <div className="upload-input__description-wrapper">
          <label className="upload-input__description-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            id="videoDescription"
            name="videoDescription"
            className="upload-input__video-description"
            placeholder="Add a description to you video"
            value={description}
            onChange={handleNewDescription}
          />
        </div>
        <div className="btns">
          <button className="btns__publish" type="submit">PUBLISH</button>
          {/* redirect home if the user cancels */}
          <button className="btns__cancel" onClick={() => Navigate("/")}>CANCEL</button> 
        </div>
    </form>
    </section>
  </>
  );
}

export default UploadInput;
