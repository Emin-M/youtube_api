import React from "react";
import "./Video.css";

const VideoDetail = ({ data }) => {
  if (!data) {
    return <div className="container mt-4">Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${data?.id?.videoId}`;

  return (
    <div className="videodetail">
      <div>
        <iframe
          width="100%"
          height="430"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="video player"
          src={videoSrc}
          frameBorder="0"
        ></iframe>
        <div className="card">
          <h4 className="card-header">{data.snippet.title}</h4>
          <div className="card-body">
            <p className="card-text">{data.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
