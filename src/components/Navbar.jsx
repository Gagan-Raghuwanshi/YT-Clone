import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/hamburgerSlice';

function Navbar() {

    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(toggleSidebar());
    }


    return (
        <div className="">
            <div className='flex justify-between py-3 px-6 fixed z-50 bg-white w-[100%] shadow-md'>
                <div className="flex justify-between items-center ">
                    <div className="pr-5 cursor-pointer" onClick={toggleHandler}> <GiHamburgerMenu size={"24px"} /> </div>
                    <div className="w-24"><img src="https://www.royallythamproshop.com/wp-content/uploads/2017/11/YT-Logo-e1510060417884.jpg" alt="YT_Logo" /></div>
                </div>
                <div className="flex items-center w-[40%] rounded-full border-2">
                    <div className="w-full"><input type="text" placeholder='Search...' className='px-4 py-2 border-none outline-none w-full rounded-l-full' /></div>
                    <div className=" border-l-2 h-full flex items-center px-4 bg-[#F8F8F8] rounded-r-full  cursor-pointer"><IoSearchOutline size={"30px"} /></div>
                </div>
                <div className="flex items-center w-[7%] justify-between">
                    <div className="cursor-pointer"><MdOutlineVideoCall size={"24px"} /></div>
                    <div className="cursor-pointer"><IoIosNotificationsOutline size={"24px"} /></div>
                    <div className="cursor-pointer"><Avatar src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' size={"30px"} round={true} /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar