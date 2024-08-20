import "./UploadPage.scss"

function UploadPage(){
    return(
        <>
        <section className="hero">
            <h1 className="hero__title">Upload Video</h1>
            <h3 className="hero__subtitle">VIDEO THUMBNAIL</h3>
            <img className="hero__img"></img>
        </section>
        <section className="upload-input">
            <form className="upload-input__form">
                <input name="videoTitle" className="upload-input__video-title"></input>
                <textarea name="videoDescription" className="upload-input__video-description"></textarea>
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