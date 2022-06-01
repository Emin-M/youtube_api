import React from "react";

const VideoItem = ({ video, setVideo }) => {
  return (
    <div onClick={() => setVideo(video)} className="videoItem mt-4">
      <img
        className="me-1"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
      />
      <p className="mt-2 ms-1">{video.snippet.title}</p>
    </div>
  );
};

export default VideoItem;
