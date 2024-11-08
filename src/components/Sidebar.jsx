import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Sidebar() {

    const sidebaritem = [
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        },
        {
            icon: <GoHomeFill size={"24px"} />,
            text: "Home"
        },
        {
            icon: <SiYoutubeshorts size={"24px"} />,
            text: "Short"
        },
        {
            icon: <MdSubscriptions size={"24px"} />,
            text: "subscription"
        }

    ]
    const open = useSelector(store => store.hamburger.open)


    console.log(open)
    return (
        <div className='flex flex-col  overflow-y-scroll h-[90vh] overflow-x-hidden pr-5'>
            {
                sidebaritem.map((item, index) => {
                    return (
                        <Link to={"/"} key={index}>
                            <div className="flex  mx-6 mb-3  gap-7 items-center cursor-pointer" >
                                <div className="">{item.icon}</div>
                                <div className={`text-lg font-semibold ${open ? "" : 'hidden'}`}>{item.text} </div>
                            </div>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default Sidebar