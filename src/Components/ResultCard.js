import React from 'react'

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
    return minutesDifference + " minutes ";
   
}

export default function ResultCard({info}) {
    const{snippet}=info;
    //console.log(info);
    const{channelTitle,title,thumbnails,publishedAt,description}=snippet;

    const originalDate = new Date(publishedAt);
   const timediff=dateDiff(originalDate);
  return (
    < div className="flex h-25 p-2 w-[1000px]">
       
      <img className="rounded-lg h-56 w-[380px]" alt="thumbnail" src={thumbnails.medium.url}/>
      <ul className="ml-2 ">
        
      <li className="font-semibold text-lg mt-2">{title.substring(0,100)}{((title.length>100)?"....":"")}</li>
      <li className="text-xs font-medium">{'\u25CF'}   {timediff}ago</li>
        <li className="text-xs mt-3 font-semibold">{channelTitle}</li>
       
        <li className="text-xs mt-6 font-semibold">{description}</li>

      </ul>
      
    </div>
  )
}

