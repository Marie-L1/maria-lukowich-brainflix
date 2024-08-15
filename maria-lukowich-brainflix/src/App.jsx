import './App.css'
import { useState } from 'react';
import videoData from './Data/video-details.json'
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDecription from './components/VideoDescription/VideoDescription';
import Comments from './components/Comments/Comments';
import NextVideos from './components/NextVideos/NextVideos';

function App() {

  // useState to identify videos by their id
  const [videoPlayer, setVideoPlayer] = useState(videoData.find(
    video => video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"  // default will be the first video object in the array
  ))

  // function that handles video selection
  const handleNextVideoClick = (videoId) => {
    const selectedVideo = videoData.find(video => video.id === videoId);
    setVideoPlayer(selectedVideo);
  }

  return (
    <>
      <Header />
      <VideoPlayer 
      video={videoPlayer.video}
      poster={videoPlayer.image} 
      duration={videoPlayer.duration}
      title={videoPlayer.title}
      channel={videoPlayer.channel}
      timestamp={videoPlayer.timestamp}
      views={videoPlayer.views}
      likes={videoPlayer.likes}
      />
      <VideoDecription />
      <Comments />
      <NextVideos videos={videoData.filter(video => video.id !== videoPlayer.id)}
        nextVideoClick={handleNextVideoClick} />
    </>
  )
}

export default App
