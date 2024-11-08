import React from 'react'
import BtnList from './BtnList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

function Feed() {
    const open = useSelector(store => store.hamburger.open)
    return (
        <div className='ml-6'>
            <div className={`overflow-x-scroll ${open ? "w-[83vw]" : "w-[91vw]"} `}><BtnList /></div>
            <div className="w-full h-4 bg-white relative -mt-4 "></div>

            <VideoContainer />
        </div>
    )
}

export default Feed