import "./UploadPage.scss"
import track from "../../assets/Images/Upload-video-preview.jpg"

function UploadPage(){
    return(
        <>
        <section className="hero">
            <h1 className="hero__title">Upload Video</h1>
            <h3 className="hero__subtitle">VIDEO THUMBNAIL</h3>
            <div className="hero__img-wrapper">
                <img className="hero__img" src={track} alt="track runner"></img>
            </div>
        </section>
        <section className="upload-input">
            <form className="upload-input__form">
                <div className="upload-input__title-wrapper">
                    <label name="upload-input__title-label">TITLE YOUR VIDEO</label>
                    <input id="videoTitle" name="videoTitle" className="upload-input__video-title" placeholder="Add a title to your video"></input>
                </div>
                <div className="upload-input__description-wrapper">
                    <label name="upload-input__description-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea id="videoDescription" name="videoDescription" className="upload-input__video-description" placeholder="Add a description to you video"></textarea>
                </div>
            </form>
        </section>
        <section className="btns">
            <button className="btns__publish">PUBLISH</button>
            <button className="btns__cancel">CANCEL</button>
        </section>
        
        </>
    )
}

export default UploadPage