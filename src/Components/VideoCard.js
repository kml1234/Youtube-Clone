// import React from 'react'
// import { useSelector } from 'react-redux'

// function dateDiff(date) {
//   let currDate = new Date();
//   const date1 = new Date(currDate);
//   const date2 = new Date(date);
  
//   const monthsDifference = (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
//   if(monthsDifference>0) return monthsDifference+" month ";
//   const daysDifference = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
//   if(daysDifference>0) return daysDifference+" days ";
  
//   const hoursDifference = Math.floor((date1 - date2) / (1000 * 60 * 60));
//   if(hoursDifference>0) return hoursDifference+" hours ";

//   const minutesDifference = Math.floor((date1 - date2) / (1000 * 60));
//   return minutesDifference + " minutes ";
 
// }

// function calculateViews(total){
//   let num=total/1000000;

//   if(num>=1) return  (Math.round(num * 10) / 10)+"M";

//   num=total/1000;
//   return  (Math.round(num * 10) / 10)+"K"

// }
// function VideoCard({info}) {
    
//     const{snippet,statistics}=info;
//     const{channelTitle,title,thumbnails,publishedAt}=snippet;
//     const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
   
//     let classname="p-3 m-2 h-90 w-[395px] shadow-lg rounded-lg"
//     let classname2="rounded-lg h-64 w-[380px]";
//     if(!isMenuOpen){
//       classname="p-3 m-2 h-80 w-[355px] shadow-lg rounded-lg";
//       classname2="rounded-lg h-56 w-[345px]"
//     }
   
//    const originalDate = new Date(publishedAt);
//    const timediff=dateDiff(originalDate);

//    let Views=calculateViews(statistics.viewCount);
//   return (
//      <div className={classname}>
   
//       <img className={classname2} alt="thumbnail" src={thumbnails.high.url}/>
//       <ul >
//        <li className="font-semibold  text-sm mt-2">{title.substring(0,70)}{((title.length>70)?"....":"")}</li>
//         <li className="text-xs font-semibold">{channelTitle}</li>
//         <li className="text-xs font-medium">{Views} views    {'\u25CF'}   {timediff}ago</li>
//       </ul>
//     </div>
//   )
// }

// export default VideoCard


import React from 'react';
import { useSelector } from 'react-redux';

function dateDiff(date) {
  let currDate = new Date();
  const date1 = new Date(currDate);
  const date2 = new Date(date);

  const monthsDifference = (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
  if (monthsDifference > 0) return monthsDifference + " month ";
  const daysDifference = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
  if (daysDifference > 0) return daysDifference + " days ";

  const hoursDifference = Math.floor((date1 - date2) / (1000 * 60 * 60));
  if (hoursDifference > 0) return hoursDifference + " hours ";

  const minutesDifference = Math.floor((date1 - date2) / (1000 * 60));
  return minutesDifference + " minutes ";
}

function calculateViews(total) {
  let num = total / 1000000;

  if (num >= 1) return (Math.round(num * 10) / 10) + "M";

  num = total / 1000;
  return (Math.round(num * 10) / 10) + "K";
}

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let classname = "p-3 m-2 h-90 w-[395px] shadow-lg rounded-lg";
  let classname2 = "rounded-lg h-64 w-[380px]";
  if (!isMenuOpen) {
    classname = "p-3 m-2 h-80 w-[345px] shadow-lg rounded-lg";
    classname2 = "rounded-lg h-56 w-[330px]";
  }

  const originalDate = new Date(publishedAt);
  const timediff = dateDiff(originalDate);

  let Views = calculateViews(statistics.viewCount);

  return (
    <div className={classname}>
      <img className={classname2} alt="thumbnail" src={thumbnails.high.url} />
      <ul>
        <li className="font-semibold text-sm mt-2">{title.substring(0, 70)}{((title.length > 70) ? "...." : "")}</li>
        <li className="text-xs font-semibold">{channelTitle}</li>
        <li className="text-xs font-medium">{Views} views {'\u25CF'} {timediff} ago</li>
      </ul>
    </div>
  );
}

export default VideoCard;

