import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'

function VideoCart({ item }) {
  const [ytIcon, setYtIcon] = useState("")

  const fetchingYoutubeChannel = async () => {

    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&maxResults=50&key=AIzaSyDkcdgv8gZDNTVgG4dH-8awuq72s2iYlK8`)
      setYtIcon(res.data.items[0].snippet.thumbnails.default.url)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchingYoutubeChannel();
  })


  return (
    <>
      <div className='w-80 mt-5 cursor-pointer '>
        <div className="w-96 flex">
          <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" className='flex rounded-xl' />
        </div>
        <div className="flex mt-3">
          <div className="">
            <Avatar src={ytIcon} size={"30px"} round={true} />
          </div>
          <div className="ml-3">
            <div className="text-lg font-bold">{item.snippet.title} </div>
            <div className="text-gray-600 mt-1"> {item.snippet.channelTitle}</div>
            <div className="-mt-1 text-gray-600">{item.statistics.viewCount} Views</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCart