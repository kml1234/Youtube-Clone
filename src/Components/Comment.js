import React, { useEffect } from 'react'

function dateDiff(date) {
    let currDate = new Date();
    const date1 = new Date(currDate);
    const date2 = new Date(date);
    
    const monthsDifference = (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
    if(monthsDifference>0) return monthsDifference+" month ";
    const daysDifference = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
    if(daysDifference>0) return daysDifference+" days ";
    
    const hoursDifference = Math.floor((date1 - date2) / (1000 * 60 * 60));
    if(hoursDifference>0) return hoursDifference+" hours ";
  
    const minutesDifference = Math.floor((date1 - date2) / (1000 * 60));
    return minutesDifference+1 + " minutes ";
   
}


function Comment({info}) {
    //console.log(info);
     const{snippet}=info.snippet.topLevelComment;

     const{authorDisplayName,textDisplay,updatedAt,likeCount,authorProfileImageUrl}=snippet;
    
     const originalDate = new Date(updatedAt);
     const timediff=dateDiff(originalDate);
    
  return (
    
      <div className="flex my-8 w-[900px]">
          <div>
          <img
          className="w-8 h-8 rounded-full"
           src={authorProfileImageUrl}
           alt="comment_people"
            />
            </div>
            <div>
                <div className="flex">
                  <h2 className="font-medium text-sm ml-3"> @{authorDisplayName}   </h2>
                  <h2 className="ml-3 mt-1 text-xs font-normal" >{timediff} ago</h2>
               </div>
            <h2 className="ml-3 text-sm font-normal"> {textDisplay}</h2>
            <div className="flex">
            <img className="ml-3 mt-2 h-4 w-6" src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png" alt="like" />
            <h2 className=" ml-1 mt-1 font-thin text-sm">{((likeCount+1)/1000)>=1?(Math.round((((likeCount+1)/1000)*10)/10)+"K"):(likeCount+1)}</h2>
            <img className="ml-3 mt-2 h-4 w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX838fNcgciGyvQrhfoXNGiQh91ZBFtygy9GmOUKv2deACC6cBw9_U-8fEuaFWpet-Y4k&usqp=CAU" alt="dislike" />
            </div>
            </div>
        </div>
    
  )
}

export default Comment













