import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const firstPartData = [
  { title: "Home", icon: HomeIcon, path: "/" },
  { title: "Trending", icon: WhatshotIcon, path: "/trending" },
  { title: "Subscriptions", icon: SubscriptionsIcon, path: "/subscriptions" },
];

export const secondPartData = [
  { title: "Library", icon: VideoLibraryIcon, path: "/library" },
  { title: "History", icon: HistoryIcon, path: "/history" },
  { title: "Watch Later", icon: WatchLaterIcon, path: "/watch_later" },
  {
    title: "Liked videos",
    icon: ThumbUpAltOutlinedIcon,
    path: "/liked_videos",
  },
  { title: "Profile", icon: AccountCircleIcon, path: "/login" }
];
