import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UploadPage.scss"
import Hero from "../../components/UploadHero/Hero"
import UploadInput from "../../components/UploadInput/UploadInput"

const API_URL = import.meta.env.VITE_API_URL;

function UploadPage(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate(); // Hook for navigation


     // Set the document title when the components mount
     useEffect(() => {
        document.title = "Upload Video - BrainFlix";
    }, []);

   const handleFormSubmit = async (formData) => {
    try{
        const response = await axios.post(`${API_URL}/upload`, {
            title: formData.title,
            description: formData.description,
    });
    alert("Video successfully uploaded")
    console.log(response.data)

    // redirect to the homepage
    navigate("/")
    }catch(error){
        console.error("Error uploading video", error)
    }
   }

    return(
        <>
        <article>
        <Hero />
        <UploadInput 
             title={title}
             description={description}
             setTitle={setTitle}
             setDescription={setDescription}
             handleFormSubmit={handleFormSubmit}
             />
        </article>
        </>
    )
}

export default UploadPage