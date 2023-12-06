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
function calculateViews(total){
  let num=total/1000000;

  if(num>=1) return  (Math.round(num * 10) / 10)+"M";

  num=total/1000;
  return  (Math.round(num * 10) / 10)+"K"

}


export default function SmallVideoCard({info}) {
    const{snippet,statistics}=info;
    const{channelTitle,title,thumbnails,publishedAt}=snippet;

    const originalDate = new Date(publishedAt);
   const timediff=dateDiff(originalDate);
   let Views=calculateViews(statistics.viewCount);
  return (
    < div className="flex h-25 p-2 w-[400px]">
       
      <img className="rounded-lg h-24 w-40" alt="thumbnail" src={thumbnails.high.url}/>
      <ul className="ml-2 ">
        
      <li className="font-semibold text-sm mt-2">{title.substring(0,60)}{((title.length>60)?"....":"")}</li>
        <li className="text-xs font-semibold">{channelTitle}</li>
        <li className="text-xs font-medium">{Views} views    {'\u25CF'}   {timediff}ago</li>
      </ul>
      
    </div>
  )
}
