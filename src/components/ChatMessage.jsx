import React from 'react'
import Avatar from 'react-avatar'

function ChatMessage({ item }) {
    return (
        <div className='flex gap-3 py-1'>
            <div className="">
                <Avatar src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' size='30' round={true} />
            </div>
            <div className="font-bold">
                {item.userName} :
            </div>
            <div className="">
                {item.message}
            </div>

        </div>
    )
}

export default ChatMessage