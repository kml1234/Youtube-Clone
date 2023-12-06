import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ChatCard from './ChatCard';
function LiveChatContainer() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [chatlist,setchatlist]=useState([]);
    const [time,settime]=useState(new Date());

    useEffect(()=>{

        getchatid();

    },[])
    const getchatid = async()=>{
        const data=await fetch("https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&key=AIzaSyDosLkl5uuHwAF32hBOLJFmIHlPFAhNP8c&id=thZKOnKpLO4");
        const json =await data.json();
        if (!json.error) {
            if (!json.items.length === 0) {
              let livechatid = json.items[0].liveStreamingDetails.activeLiveChatId;
              
              getchat();
              
            }
        }
    }
    const getchat=async()=>{
        const data=await fetch("https://www.googleapis.com/youtube/v3/liveChat/messages?part=id%2C%20snippet&key=AIzaSyDosLkl5uuHwAF32hBOLJFmIHlPFAhNP8c&liveChatId=Cg0KC3RoWktPbktwTE80KicKGFVDSXZhWW1YbjkxMFFNZGVtQkczdjFwURILdGhaS09uS3BMTzQ");
        const json =await data.json();
        if (!json.error) {
            if (!json.items.length === 0) {
                setchatlist(json.items);
            //   for (var i = 0; i < json.items.length; i++) {
            //     console.log(json.items[i].snippet.displayMessage);
            //   }
            }
        }
    }
  return (
    <div className=" flex flex-col container">
      {
        chatlist.map((chat)=>{
            return <ChatCard info={chat}/>
           // return <h1 className="ml-20"> hello</h1>
        })
      }
    </div>
  )
}

export default LiveChatContainer








