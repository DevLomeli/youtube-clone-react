import "./SearchPage.css";
import React, { useContext, useEffect } from "react";

import SearchVideoContext from "../../contexts/SearchVideoContext";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import youtubeAPI from "../../apis/youtubeAPI";
const SearchPage = ({ match }) => {
  const { videos, setVideos } = useContext(SearchVideoContext);
  const { searchTerm } = match.params;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await youtubeAPI.get("/search", {
        params: {
          q: searchTerm,
          part: "snippet",
          maxResult: 10,
          type: "video",
        },
      });

      setVideos(res.data.items);
    };
    fetchVideos();
  }, [searchTerm, setVideos]);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
        channel="Lomeli Dev"
        verified
        subs="660k"
        noOfVideos={382}
        description="You can find awesome coding videos"
      />
      <hr />
      {!videos
        ? "type someting in the searchbar"
        : videos.map((video) => {
            return (
              <VideoRow
                key={video.id.videoId}
                views="1.4M"
                subs="659K"
                description={video.snippet.description}
                timestamp="59 seconds ago"
                channel={video.snippet.channelTitle}
                title={video.snippet.title}
                image={video.snippet.thumbnails.default.url}
                videoId={video.id.videoId}
              />
            );
          })}
    </div>
  );
};

export default SearchPage;
