import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../constants/youtube';
import Avatar from 'react-avatar';
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/chatSlice';


function Watch() {
    const [singleVideo, setSingleVideo] = useState("");
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    //dispatch reducer
    const sendMessage = () => {
        dispatch(
            setMessage({
                userName: "gaganraghuwanshi",
                message: input
            })
        )
        setInput("")
        console.log(input)
    }

    // network calling
    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`)
            console.log(res)
            setSingleVideo(res?.data?.items?.[0]?.snippet?.title)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleVideo();
    }, [])
    return (
        <div className='w-full h-screen ml-4 flex'>
            <div className=" w-[900px]">
                <iframe
                    width="900"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
                <div className="font-bold text-lg mt-2">
                    {singleVideo}
                </div>
                <div className=" flex justify-between mt-2">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <div className="cursor-pointer"><Avatar src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' size={"30px"} round={true} /></div>
                            <div className="ml-3">
                                <div className="font-bold text-lg cursor-pointer">Channel name</div>
                                <div className="-mt-1 text-sm">3K Subscriber</div>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#ebebeb] hover:bg-[#DDDDDD] px-4 py-2 rounded-full cursor-pointer gap-1">
                            <div className=" "><FaBell size={20} /> </div>
                            <div className="">Subscribed</div>
                            <div className=""><IoIosArrowDown size={22} /></div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center  bg-[#ebebeb] hover:bg-[#DDDDDD] px-4 py-2 rounded-full cursor-pointer gap-2">
                            <div className=""><BiLike size={22} /></div>
                            <div className="">Like</div>
                            <div className=" flex border-l-2 pl-1 border-gray-400 "><BiDislike size={22} /> </div>
                        </div>
                        <div className="flex items-center  bg-[#ebebeb] hover:bg-[#DDDDDD] px-4 py-2 rounded-full cursor-pointer gap-1">
                            <div className=""><RiShareForwardLine size={22} /></div>
                            <div className="">Share</div>
                        </div>
                        <div className="flex items-center  bg-[#ebebeb] hover:bg-[#DDDDDD] px-4 py-2 rounded-full cursor-pointer gap-1">
                            <div className=""><LiaDownloadSolid size={22} /></div>
                            <div className="">Download</div>
                        </div>
                        <div className=" bg-[#ebebeb] hover:bg-[#DDDDDD] px-3 py-2 rounded-full cursor-pointer "><IoIosMore size={22} /></div>
                    </div>
                </div>
            </div>
            <div className="flex w-[50%] justify-center h-[87%] ">
                <div className="  w-[65%] border rounded-lg ">
                    <div className="flex items-center justify-between border-b-2 py-2 px-5 rounded-t-lg">
                        <div className="flex items-center gap-1 ">
                            <div className="">Top chat</div>
                            <div className=""><IoIosArrowDown size={22} /></div>
                        </div>
                        <div className=" ">
                            <IoMdMore size={22} />
                        </div>
                    </div>
                    <div className="px-5">
                        This is Chat box...
                    </div>

                    <div className=" px-5 overflow-y-auto flex flex-col-reverse h-[65%] border-b-2">
                        <div className="">
                            <LiveChat />
                        </div>
                    </div>
                    <div className="px-5 border-b-2">
                        <div className="flex gap-4 mt-3">
                            <div className="cursor-pointer pt-1">
                                <Avatar src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' size={"30px"} round={true} />
                            </div>
                            <div className="w-full">
                                <div className="">@gaganraghuwanshi</div>
                                <div className=" mt-2 border-b-2 border-y-blue-400">
                                    <input type="text" value={input} placeholder='Send message...' onChange={(e) => {
                                        setInput(e.target.value)
                                    }} className='w-[100%] border-none outline-none pr-4' />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-5 text-red-600">
                            <div className=""><RxCross1 size={20} /></div>
                            <div className="">Error try again  </div>
                        </div>
                        <div className="flex justify-between items-center py-4 ">
                            <div className=""><BsEmojiSmile size={24} /></div>
                            <div className="flex gap-3 items-center">
                                <div className="">16/200</div>
                                <div className="cursor-pointer"><AiOutlineSend onClick={sendMessage} size={24} /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-3 justify-center text-lg font-bold">
                        Hide chat
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watch