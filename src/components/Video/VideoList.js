import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, setVideo }) => {
  return (
    <div className="vudeolist ms-3 mt-0">
      {videos?.map((video, index) => (
        <VideoItems key={index} video={video} setVideo={setVideo} />
      ))}
    </div>
  );
};

export default VideoList;
