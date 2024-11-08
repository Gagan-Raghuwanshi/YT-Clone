import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/chatSlice';
import { generateRandomMessage, generateRandomName } from '../redux/helper';

function Chat() {

  const dispatch = useDispatch();
  const message = useSelector(store => store.chat.message);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setMessage({
        userName: generateRandomName(),
        message: generateRandomMessage(16)
      }))
    }, 1000)
    return (() => {
      clearInterval(timer);
    })
  }, [])


  return (
    <div>
      {
        message.map((item, index) => {
          return (
            <ChatMessage key={index} item={item} />
          )
        })
      }
    </div>
  )
}

export default Chat