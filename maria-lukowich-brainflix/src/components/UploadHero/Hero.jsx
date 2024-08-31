import React from 'react'
import "./Hero.scss"
import track from "../../assets/Images/Upload-video-preview.jpg"

function Hero() {
  return (
    <section className="hero">
        <h1 className="hero__title">Upload Video</h1>
        <h3 className="hero__subtitle">VIDEO THUMBNAIL</h3>
        <div className="hero__img-wrapper">
          <img className="hero__img" src={track} alt="track runner"></img>
        </div>
    </section>
  )
}

export default Hero