import "./videoPage.css";
import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VideoItem from "../VideosContainer/VideoItem";

const VideoPage = ({ match }) => {
  const { videoId } = match.params;
  return (
    <div className="videoPage">
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
            <h4>React interview</h4>
            <div className="videoPage__videoSubdescription">
              <p>97.109 views • Date: Dic 16, 2020</p>
              <div className="videoPage__actions">
                <button>
                  <ThumbUpAltIcon />
                  <p>4324</p>
                </button>
                <button>
                  <ThumbDownAltIcon />
                  <p>48</p>
                </button>
                <button>
                  <ReplyIcon />
                  <p>compartir</p>
                </button>
                <button>
                  <PlaylistAddIcon />
                  <p>guardar</p>
                </button>
                <button>
                  <MoreHorizIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="videoPage__secondColumn">
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
        <VideoItem
          title="Become a Web Developer in 10 minutes"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4"
          channel="Lomeli Dev"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg"
        />
      </div>
    </div>
  );
};

export default VideoPage;
