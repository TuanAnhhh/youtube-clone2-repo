import axios from 'axios'
const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params: {
        // key: process.env.REACT_YOUTUBE_API_KEY
        key: "AIzaSyCiU1nyQm0rbTtG93M1WN7ggPL_vDQnDsk"
    }
})
export default request;
