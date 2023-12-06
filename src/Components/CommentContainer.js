import React, { useState, useEffect, useTransition } from 'react'
import Comment from './Comment'
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENT_API } from '../utils/contains';
export default function CommentConatiner() {
  let [searchParams, setSearchParams] = useSearchParams();
  

  const [comments, setcomments] = useState([]);
  const [hascomment,sethascomment]=useState(false);

  useEffect(() => {
    getComments();

  }, [searchParams.get("v")]);

  const getComments = async () => {
    
    const data = await fetch(YOUTUBE_COMMENT_API + searchParams.get("v"));
          
    
    const json = await data.json();
    
    if(!json.error){
      sethascomment(true);
      setcomments(json.items);
    }

    
    
    

  }
  

  return (
    
    <div>
      {  
        (hascomment===true) && comments.map((comment) => {
          return <Comment key={comment.id} info={comment} />
        })
      }
    

     </div>
    
    
  )
}
