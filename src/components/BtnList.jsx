import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/hamburgerSlice';

const btnarr = [
    {
        text: "All"
    },
    {
        text: "JavaScript"
    },
    {
        text: "Live"
    },
    {
        text: "Music"
    },
    {
        text: "Mixes"
    },
    {
        text: "Data Type"
    },
    {
        text: "Rajpal Yadav"
    },
    {
        text: "Nwes"
    },
    {
        text: "Dramedy"
    },
    {
        text: "AI"
    },
    {
        text: "Thoughts"
    },
    {
        text: "C++"
    },
    {
        text: "Self-Confidence"
    },
    {
        text: "Sketch Comedy"
    },
    {
        text: "Computers"
    },
    {
        text: "Movie"
    },
    {
        text: "Game"
    },
    {
        text: "Treanding"
    },
    {
        text: "Funny"
    },
]

function BtnList() {
    const [active, setActive] = useState(btnarr[0]);
    const dispatch = useDispatch();

    const videoTag = (tag) => {
        if (active !== tag) {
            setActive(tag);
            dispatch(setCategory(tag));
        }
    }
    console.log(active);

    return (
        <div>
            <div className=' flex'>
                {
                    btnarr.map((btnarr, index) => {
                        return (
                            <div className="" key={index}>
                                <div className=" flex w-max ">
                                    <button onClick={() => { videoTag(btnarr) }} className={` ${active==btnarr ? "bg-black text-white":"bg-gray-200 text-black"} py-1 px-3 rounded-lg text-lg font-semibold mr-2`}><h1>{btnarr.text}</h1></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default BtnList