import './App.scss'
import { useState } from 'react';
import videoData from '../../video-details.json'
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import AddComments from '../../components/AddComments/AddComments';
import CommentsList from '../../components/CommentsList/CommentsList';
import NextVideos from '../../components/NextVideos/NextVideos';

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
      <VideoDescription description={videoPlayer.description} />

      <AddComments comments={videoPlayer.comments} />
      <CommentsList comments={videoPlayer.comments} />


      <NextVideos videos={videoData.filter(video => video.id !== videoPlayer.id)}
        nextVideoClick={handleNextVideoClick} />
    </>
  )
}

export default App