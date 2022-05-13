import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
import moment from "moment"
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import AUTH_ME from '../graphQL/user/querys'
import GET_MY_CONVERSATION from "../graphQL/user/querys"

const socket = socketIOClient(ENDPOINT);

const SocketProbando = () => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { me } = useSelector((state) => state.me)
  
  useEffect(() => {
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    socket.on("getMessage", data => {
      setMessages(data);
      console.log(data)
    })
    return () => { socket.disconnect(); }
  }, [socket]);

  const sendMessage = () => {
    socket.emit("chat message", message);
  }

  return (
    <div className="bg-blue-600 w-full h-screen flex flex-col items-center justify-center gap-3">
      <h1 className="text-white text-4xl">Socket.io</h1>
      <input className="border-2 border-gray-200 rounded-xl p-2"  type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
      <button className="bg-yellow-300 p-2 rounded-xl text-black font-semibold" onClick={sendMessage}> send message</button>
      <p className="text-white">
        It's {moment(response).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
      <div>
        {messages.map((message, index) => (
          <p key={index} className="text-white">{message}</p>
        ))}
      </div>
    </div>
  );
}

export default SocketProbando;