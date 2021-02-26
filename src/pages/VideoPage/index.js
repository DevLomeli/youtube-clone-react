import "./videoPage.css";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/actions";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import VideosContainer from "../../components/VideosContainer";

const VideoPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mounted");
    dispatch(setLoading);
  }, [dispatch]);

  const { videoId } = match.params;
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
            <h4 className="videoDescription__title">React interview</h4>
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
          </div>
        </div>
        <div className="videoPage__secondColumn">
          <VideosContainer />
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
