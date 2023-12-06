import React, { useEffect, useState } from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/contains";

import { Link } from 'react-router-dom';
import SmallVideoCard from './SmallVideoCard';

export default function SuggestVideos() {
        const[videos,setvideos]=useState([]);
        useEffect(()=>{
                getVideos();
        },[]);

        const getVideos=async ()=>{
            const data=await fetch(YOUTUBE_VIDEOS_API);
            const json=await data.json();
            
            setvideos(json.items);
        }
  return (
    <div>
      {
        videos.map((video)=>{
            return <Link to={"/watch?v="+video.id} key={video.id}> <SmallVideoCard   info={video} /> </Link>
         })
      }
    </div>
  )
}
