import "./videoPage.css";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetch_video } from "../../redux/actions";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import VideosContainer from "../../components/VideosContainer";

const VideoPage = ({ match }) => {
  
  const { videoId } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_video(videoId));
  }, [dispatch, videoId]);

  const { videoSelected, loading, videos } = useSelector(
    (state) => state.videos
  );

  const renderDescription = () => {
    if (!loading && videoSelected) {
      const { title } = videoSelected.snippet;
      return (
        <>
          <h4 className="videoDescription__title">{title}</h4>
          <div className="videoDescription__description">
            <p>97.109 views • Date: Dic 16, 2020</p>
            <div className="videoDescription__actions">
              <button className="videoDescription__action">
                <ThumbUpAltIcon />
                <p>4324</p>
              </button>
              <button className="videoDescription__action">
                <ThumbDownAltIcon />
                <p>48</p>
              </button>
              <button className="videoDescription__action">
                <ReplyIcon />
                <p>compartir</p>
              </button>
              <button className="videoDescription__action">
                <PlaylistAddIcon />
                <p>guardar</p>
              </button>
              <button className="videoDescription__action">
                <MoreHorizIcon />
              </button>
            </div>
          </div>
        </>
      );
    }
    return <p>loading...</p>;
  };

  const renderVideoRelated = () => {
    if (!loading && videos) {
      return (
        <VideosContainer
          titlePage="Related"
          videosData={videos}
          loading={loading}
        />
      );
    }
    return null;
  };

  return (
    <section className="videoPage">
      <div className="videoPage__videoContent">
        <div className="videoPage__firstColumn">
          <div className="videoPage__videoWrapper">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="video player"
              className="videoPage__video"
            ></iframe>
          </div>
          <div className="videoPage__videoDescription">
            {renderDescription()}
          </div>
        </div>
        <div className="videoPage__secondColumn">{renderVideoRelated()}</div>
      </div>
    </section>
  );
};

export default VideoPage;
