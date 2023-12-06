import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //Early return pattern
   if(!isMenuOpen) return null;
  
  
  
  
 
  return ( 
     <div className="fixed left-0 top-14 flex-col  h-screen bg-white w-[250px] "> 
      
      <ul className="ml-2">
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" h-12 w-16" src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt="home" />
              <div className="mt-3 text-md font-semibold" >Home</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" ml-4 mt-3 h-6 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLvbqcJIYmkc8rtGDch9P8u3yP4fy1gijL30s_S4wRw&s.png" alt="home" />
              <div className="mt-3 ml-4 text-md font-semibold" >Shorts</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="ml-4  mt-4 h-6 w-8" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Subscriptions</div>
            </li>
       </ul>
       <div className="mt-6 ml-4 h-[0.5px] bg-gray-200" ></div>
       <ul className="ml-2">
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="mt-4 ml-4 h-4 w-6" src="https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png" alt="home" />
              <div className="mt-3 ml-4 text-md font-semibold" >Library</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" ml-4 mt-5 h-4 w-6" src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >History</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="ml-3  mt-4 h-6 w-8" src="https://static.thenounproject.com/png/1261644-200.png" alt="home" />
              <div className="mt-4 ml-3 text-md font-semibold" >Your Videos</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="mt-5 ml-4 h-4 w-6" src="https://static.thenounproject.com/png/106663-200.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Watch Later</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" ml-4 mt-5 h-4 w-6" src="https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Liked Video</div>
            </li>
       </ul>
       <div className="mt-6 ml-4 h-[0.5px] bg-gray-200" ></div>
       <div className="mt-4 ml-4 text-md font-medium" >Explore</div>
       <ul className="ml-2">
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="mt-4 ml-4 h-4 w-6" src="https://cdn-icons-png.flaticon.com/512/1710/1710130.png" alt="home" />
              <div className="mt-3 ml-4 text-md font-semibold" >Trending</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" ml-4 mt-5 h-4 w-6" src="https://e7.pngegg.com/pngimages/880/341/png-clipart-business-award-youtube-art-competition-scoring-rating-sport-logo.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Sports</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="ml-3  mt-4 h-6 w-8" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/video_live_streaming_mobile_platform_streaming_social_media_website_icon_197306.png" alt="home" />
              <div className="mt-4 ml-3 text-md font-semibold" >Live</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className="mt-5 ml-4 h-4 w-6" src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-gaming-4627159-3853350.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Gaming</div>
            </li>
            <li className="flex w-52 rounded-full bg-gray-50">
              <img className=" ml-4 mt-5 h-4 w-6" src="https://w7.pngwing.com/pngs/456/202/png-transparent-podcast-radio-others-logo-radio-station-edit-icon-thumbnail.png" alt="home" />
              <div className="mt-4 ml-4 text-md font-semibold" >Podcast</div>
            </li>
       </ul>


     
    </div>
  )
}

export default Sidebar
