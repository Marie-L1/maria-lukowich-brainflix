import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import VideoDescription from '../../components/VideoDescription/VideoDescription.jsx';
import AddComments from '../../components/AddComments/AddComments.jsx';
import CommentsList from '../../components/CommentsList/CommentsList.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

function Home() {

  const apiKey = "386a3636-1369-4ba2-a0a8-17b796d2aa27";
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const { id } = useParams(); // GET the video id from the url
  console.log("The video id:", id);
  const navigate = useNavigate();
  
  const [videoList, setVideolist] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});


  // set the default if there is no id in the url
  useEffect(() => {
    const fetchVideos = async () => {
      try{
        // fetch the list of videos
        const response = await axios.get(`${baseURL}/videos/?api_key=${apiKey}`);
        console.log(response.data)
        setVideolist(response.data)

        // set the current video based on the video id
        if (id){
          const currentVideo = await axios.get(`${baseURL}/videos/${id}?api_key=${apiKey}`);
          setCurrentVideo(currentVideo.data);
        } else if (response.data.length > 0){
          setCurrentVideo(response.data[0]);
        }

        
      }catch(error){
        console.error("Error fetching video", error)
      }
    };
    fetchVideos();
  }, [id, apiKey, baseURL])  // only runs if the id changes

  const handleVideoSelection = (videoId) => {
    navigate(`/video/${videoId}`)
  }

  return (
    <>
      <VideoPlayer 
      video={currentVideo.video}
      poster={currentVideo.image} 
      title={currentVideo.title}
      channel={currentVideo.channel}
      timestamp={currentVideo.timestamp}
      views={currentVideo.views}
      likes={currentVideo.likes}
      />
      <VideoDescription description={currentVideo.description} />

      <AddComments comments={currentVideo.comments} />
      <CommentsList comments={currentVideo.comments} />

      <NextVideos videos={videoList.filter(video => video.id !== currentVideo.id)}
      nextVideoClick={(videoId) => setCurrentVideo(videoList.find(video => video.id === videoId))} 
      />
    </>
  );
}

export default Home;