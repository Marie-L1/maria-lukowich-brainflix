import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import VideoDescription from '../../components/VideoDescription/VideoDescription.jsx';
import AddComments from '../../components/AddComments/AddComments.jsx';
import CommentsList from '../../components/CommentsList/CommentsList.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

const apiKey = "386a3636-1369-4ba2-a0a8-17b796d2aa27";
const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";

function Home() {
  const { id } = useParams(); // GET the video ID from the URL
  const navigate = useNavigate();

  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Fetch the list of videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${baseURL}/videos/?api_key=${apiKey}`);
        setVideoList(response.data);

        // If there's no ID in the URL and videoList has data, set the first video as current
        if (!id && response.data.length > 0) {
          navigate(`video/${response.data[0].id}`, {replace: true})
        }
        } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, [id, navigate]); // Depend on `id` to refetch data if needed


  // Fetch the current video when ID changes
  useEffect(() => {
    const fetchCurrentVideo = async () => {
      if (id) {
        try {
          const response = await axios.get(`${baseURL}/videos/${id}?api_key=${apiKey}`);
          setCurrentVideo(response.data);
        } catch (error) {
          console.error("Error fetching current video", error);
        }
      }
    };

    fetchCurrentVideo();
  }, [id]);


  // Handle video selection
  const handleVideoSelection = (videoId) => {
    navigate(`/videos/${videoId}`);
  };

  return (
    <>
      {currentVideo && (
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
        </>
      )}
      <NextVideos 
        videos={videoList.filter(video => video.id !== (currentVideo?.id || ''))}
        nextVideoClick={handleVideoSelection} 
      />
    </>
  );
}

export default Home;