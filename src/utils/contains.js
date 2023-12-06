const GOOGLE_API_KEY="AIzaSyDosLkl5uuHwAF32hBOLJFmIHlPFAhNP8c";

export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;


export const YOUTUBE_COMMENT_API="https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&maxResults=50&videoId="

export const YOUTUBE_SEARCH_API="https://www.googleapis.com/youtube/v3/search?key="+GOOGLE_API_KEY+"&part=id,snippet&maxResults=50"