import React, { useCallback, useEffect, useState } from "react";

/* API */
import youtube_api from "./api/youtube_api";

/* Components */
import Searchbar from "./components/Searchbar/Searchbar";
import VideoDetail from "./components/Video/VideoDetail";
import VideoList from "./components/Video/VideoList";

const App = () => {
  const [term, setTerm] = useState("React");
  const [data, setData] = useState();
  const [video, setVideo] = useState();

  const fetchVideos = useCallback(async () => {
    try {
      const response = await youtube_api.get("search", {
        params: {
          q: term,
        },
      });
      setData(response.data.items);
      setVideo(response.data.items[0]);
    } catch (error) {
      console.log(error.message);
    }
  }, [term]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div className="App">
      <Searchbar term={term} setTerm={setTerm} />
      <div className="videos container">
        {data ? (
          <React.Fragment>
            {<VideoDetail data={video} />}
            {<VideoList videos={data} setVideo={setVideo} />}
          </React.Fragment>
        ) : (
          <div className="spin">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
