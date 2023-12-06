import React, {useEffect, useState}from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import ResultPage from './ResultPage';
import { Link,useNavigate } from 'react-router-dom';
import WatchPage from './WatchPage';



export default function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setsuggestions]=useState([]);
  const [showsuggestion,setshowsuggestion]=useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());

  };
  
  useEffect(()=>{
    setshowsuggestion(true);
    getSuggestion();
    

  },[searchQuery])

  const getSuggestion= async()=>{
    const data=await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
    const json=await data.json();
   
    setsuggestions(json[1]);
  }
 
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
   
    if (
        (event?.key === "Enter" || event === "searchButton") &&
        searchQuery?.length > 0
    ) {
      setshowsuggestion(false);
        navigate(`/searchResult/${searchQuery}`);
    }
};

const setAndSearch =(query)=>{
  setSearchQuery(query);
  
  searchQueryHandler("searchButton")
  
}


  return (
    
    <div className="grid grid-flow-col p-2  mt-0 top-0  shadow-lg w-full fixed bg-white">
      <div className="flex col-span-1">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-8 mx-2 cursor-pointer"
        alt ="menu"
        src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
        <img 
        className="h-8 ml-4 cursor-pointer"
        alt="youtube-logo"
        src="https://raw.githubusercontent.com/github/explore/d744245de144b89f3e3462949e08bfc91eda7fcf/topics/youtube/youtube.png"
        />
        </a>
        <a href='/'>
        <img 
        className="h-8 cursor-pointer"
        alt="youtube-text"
        src="https://1000logos.net/wp-content/uploads/2017/05/Font-YouTube-logo.jpg"
        />
        </a>
      </div>
      
      <div className=" col-span-10 px-10">
        
        <input
        className="w-1/2 border border-gray-400 p-2 rounded-l-full "
         type="text"
         onChange={(e) => setSearchQuery(e.target.value)}
         onKeyUp={searchQueryHandler}
         placeholder="Search"
         value={searchQuery}
         onFocus={()=>setshowsuggestion(true)}
         onBlur={()=>setshowsuggestion(false)}
         
         />
        <button
         onClick={() => searchQueryHandler("searchButton")}
        
         className="border border-gray-400 rounded-r-full px-5 py-2  bg-gray-100">
         🔍
       
        </button>
        
         <ul className="pl-4  mt-1 fixed w-[500px] rounded-xl  bg-white border border-gray-100 ">
          {
             showsuggestion===true && suggestions.map((suggestion)=>{
                return <li  key={suggestion} className=" text-lg mt-1 cursor-default hover:bg-gray-100">🔍 {suggestion}  </li>
              })
          }
         </ul>
        </div>

      
      <div className="col-span-1">
        
        <img
        className="h-8 my-2"
         src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
        alt="user-icon" />
      </div>

     
       
    </div>
  )
}




