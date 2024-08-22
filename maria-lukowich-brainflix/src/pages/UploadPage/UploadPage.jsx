import "./UploadPage.scss"
import Hero from "../../components/Hero/Hero"
import UploadInput from "../../components/UploadInput/UploadInput"
import PublishBtn from "../../components/PublishBtn/PublishBtn"

function UploadPage(){
    return(
        <>
        <article>
        <Hero />
        <UploadInput />
        </article>
        <PublishBtn />
        </>
    )
}

export default UploadPage