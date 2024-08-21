import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header.jsx';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import VideoDescription from '../../components/VideoDescription/VideoDescription.jsx';
import AddComments from '../../components/AddComments/AddComments.jsx';
import CommentsList from '../../components/CommentsList/CommentsList.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

function Home() {

  const apiKey = "386a3636-1369-4ba2-a0a8-17b796d2aa27";
  const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";

  const { id } = useParams(); // GET the video id from the url
  console.log("The video id:", id);
  
  const [videoList, setVideolist] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  // set the default if there is no id in the url
  useEffect(() => {
    const fetchVideos = async () => {
      try{
        const response = await axios.get(`${baseURL}/videos/?api_key=${apiKey}`);
        console.log(response.data)
        setVideolist(response.data)

        // if there is no id in the url, make the first video the default
        if (!id) {
          setCurrentVideo(response.data[0]);
        }
      }catch(error){
        console.error(error)
      }
    };
    fetchVideos();
  }, [id, apiKey, baseURL])  // only runs if the id changes

    // fetches the video details when the url id changes
    useEffect(() => {
      const fetchCurrentVideos = async () =>{
        if (id) {
          try{
            const response =await axios.get(`${baseURL}/videos/${id}?api_key=${apiKey}`);
            console.log(response.data);
            setCurrentVideo(response.data);
          } catch(error){
            console.error(error);
          }
        }
      };
      fetchCurrentVideos();
    }, [id, apiKey, baseURL])

  return (
    <>
      <VideoPlayer 
      video={currentVideo.video}
      poster={currentVideo.image} 
      duration={currentVideo.duration}
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