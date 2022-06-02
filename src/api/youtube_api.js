import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: "AIzaSyDW4H5Mj6ZCjoUxAgqMTfNIoSs4BPjleZE",
  },
});
/* key: window.env.API_KEY, */
