import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/contains";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function VideoContainer() {
  const[videos,setvideos]=useState([]);
  useEffect(()=>{
         getVideos();
         return ()=>{
          setvideos([]);
         }
  },[]);

  const getVideos=async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    
    
    
    setvideos(json.items);
  }
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  
  let classname="flex flex-wrap overflow-y-auto  bg-white ml-64 right-0 top-96";
  if(!isMenuOpen){
    classname="flex flex-wrap overflow-y-auto  bg-white ml-4 right-0 top-96"
  }
  
  
  
  return (
    <div className={classname}>
      
      {
        
        videos.map((video)=>{
          
           return <Link to={"/watch?v="+video.id} key={video.id}> <VideoCard   info={video} /> </Link>
        })
      }
      
    </div>
  )
}

export default VideoContainer


