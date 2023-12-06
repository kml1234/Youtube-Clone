import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import SuggestVideos from './SuggestVideos';
import CommentConatiner from './CommentContainer';
import { toggleMenu } from '../utils/appSlice';
import { toggleConatiner } from '../utils/ButtonSlice';
import LiveChatContainer from './LiveChatContainer';



export default function WatchPage() {
    let [searchParams, setSearchParams] = useSearchParams();
    const isContainerOpen=useSelector((store)=>store.Butt.isContainerOpen);
    


    const dispatch=useDispatch();
    useEffect(()=>{
             dispatch(closeMenu());
             dispatch(toggleConatiner());
             return () =>{
              dispatch(toggleConatiner());
             }
             
    },[]);
  return (
    <div className="flex">
    <div className="px-5 ml-16 rounded-full my-20">
     <iframe  className ="rounded-lg" width="930" height="520"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>

      </iframe>
      
      <div  className='mt-4 bg-slate-100'>
           <button className="px-4 text-lg text-white   bg-black rounded-3xl snap-center ...">Subscribe</button>
           <button className="px-4 text-lg text-black  ml-96 bg-gray-200 rounded-xl snap-center ...">Like</button>
           <button className="px-4 text-lg text-black  ml-12 bg-gray-200 rounded-xl snap-center ...">Share</button>
           <button className="px-4 text-lg text-black  ml-12 bg-gray-200 rounded-xl snap-center ...">Clip</button>
        </div>
      <div>
        <h1 className="font-medium text-xl p-2 w-[900px]">Comment</h1>
        <div className="flex">
        <img
          className="w-10 h-10 mt-2"
           src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
           alt="comment_people"
         />
          <div>
            <h1 className="ml-3 mt-3  font-normal">Add a comment...</h1>
          <div className=" ml-4 mt-1 h-[0.5px] w-[870px] bg-gray-200" ></div>
          </div>
        </div>
        
        
        <CommentConatiner />
        
         </div>
      
    </div >
        <div className="flex-col">
        
         <div className="mt-20">
             <SuggestVideos/>
         </div>
         </div>
    </div>
  )
}


