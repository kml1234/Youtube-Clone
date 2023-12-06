import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/contains';
import { Link } from 'react-router-dom';
import ResultCard from './ResultCard';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';
function ResultPage() {
    const { searchQuery } = useParams();
    const[videos,setvideos]=useState([]);
    
    const dispatch = useDispatch();
 
    
    useEffect(()=>{
      dispatch(openMenu());
      getVideos();
      return ()=>{
        setvideos([]);
       }
    },[searchQuery])
    const getVideos=async ()=>{
      const data=await fetch(`${YOUTUBE_SEARCH_API}&q=${searchQuery}`);
      const json=await data.json();
      
      
      setvideos(json.items);
      
      
    }
  return (
    <div className="ml-[330px]">
      
      
      {
      videos.map((video,index)=>{
            return <Link to={"/watch?v="+video.id.videoId} key={index}> <ResultCard  info={video} /> </Link>
         })
      }
    </div>
  )
}

export default ResultPage


