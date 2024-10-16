import "./Home.scss";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';
import VideoDescription from '../../components/VideoDescription/VideoDescription.jsx';
import AddComments from '../../components/AddComments/AddComments.jsx';
import CommentsList from '../../components/CommentsList/CommentsList.jsx';
import NextVideos from '../../components/NextVideos/NextVideos.jsx';

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
  const { id } = useParams(); // GET the video id from the URL
  const navigate = useNavigate();

  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  // Set the document title when the components mount
  useEffect(() => {
    document.title = "Home - BrainFlix";
  }, []);

  // Fetch the list of videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${API_URL}/videos/`);
        setVideoList(response.data);

        // If there's no id in the URL and videoList has data, set the first video as current
        if (!id && response.data.length > 0) {
          navigate(`/videos/${response.data[0].id}`, { replace: true });
        }
        } catch (error) {
        console.error("Error fetching videos", error);
      }
    };

    fetchVideos();
  }, [id, navigate]);


  // Fetch the current video when the id changes
  useEffect(() => {
    const fetchCurrentVideo = async () => {
      if (id) {
        try {
          const response = await axios.get(`${API_URL}/videos/${id}`);
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

  // Handle new comments
  const handleNewComment = async (commentContent) => {
    try{
      const response = await axios.post(`${API_URL}/videos/${id}`, {
        comment: commentContent,
      })

      // update the current video's comment section with the new comment (on top)
      setCurrentVideo({...currentVideo, comments: [response.data, ...currentVideo.comments]});
    }catch(error){
      console.error("Error posting comment", error)
    }
  }

  return (
    <div>
      {currentVideo && (
        <div>
          <VideoPlayer 
            video={currentVideo.video}
            poster={currentVideo.image} 
          /> 
          <div className="home-flex">
            <div className="home-flex__detailsComments">
              <VideoDescription 
                videoDetails={currentVideo}
                //   {
                //   description: currentVideo.description,
                //   title: currentVideo.title,
                //   channel: currentVideo.channel,
                //   timestamp: currentVideo.timestamp,
                //   views: currentVideo.views,
                //   likes: currentVideo.likes
                // }
              />
              <AddComments comments={currentVideo.comments} handleNewComment={handleNewComment} />
              <CommentsList comments={currentVideo.comments} />
            </div>
            <div className="home-flex__nextVideo">
              <NextVideos 
                videos={videoList.filter(video => video.id !== (currentVideo?.id || ''))}
                nextVideoClick={handleVideoSelection} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;