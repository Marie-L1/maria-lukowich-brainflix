import './App.css'
import { useState } from 'react';
import videoData from './assets/Data/video-details.json'
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDecription from './components/VideoDescription/VideoDescription';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';

function App() {

  // useState to identify videos by their id
  const [videoPlayer, setVideoPlayer] = useState(videoData.find(
    video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
  ))

  return (
    <>
      <Header />
      <VideoPlayer video={videoPlayer.video} poster={videoPlayer.image} duration={videoPlayer.duration} />
      <VideoDecription />
      <Comments />
      <NextVideos />
    </>
  )
}

export default App
