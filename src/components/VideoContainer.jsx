import axios from 'axios'
import React, { useEffect } from 'react'
import { API_KEY, YOUTUBE_VIDEO_API } from '../constants/youtube'
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../redux/hamburgerSlice';


function VideoContainer() {
  // whenever we call API (Network call), we must have to use useEffect hook, it's a must to do that

  const {video,category} = useSelector(store=>store.hamburger)
  const dispatch = useDispatch();
  
  // fetching all video bydefault
  const fetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error)
    }
  };

  // fetching video by category
  const fetchVideoByCategory =async ()=>{
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      console.log(res.data.items)
      dispatch(setHomeVideo(res?.data?.items));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (category==="All") {
      
      fetchingYoutubeVideo();
    }
    else{

      fetchVideoByCategory(category);
    }
    // fetchingYoutubeChannel();
  }, [category])

  return (
    <div className='grid grid-cols-3 overflow-y-scroll h-[90vh] mt-7' >

      {
        video.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id} >
              <VideoCart key={item.id} item={item} />
            </Link>

          )
        })
      }
    </div>
  )
}

export default VideoContainer