import React from "react";

import VideosContainer from "../../components/VideosContainer";

const data = [
  {
    title: "Become a Web Developer in 10 minutes",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channelImage:
      "https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",
    channel: "Lomeli Dev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg",
  },
  {
    title: "Become a Web Developer in 10 minutes",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channelImage:
      "https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",
    channel: "Lomeli Dev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg",
  },
  {
    title: "Become a Web Developer in 10 minutes",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channelImage:
      "https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",
    channel: "Lomeli Dev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg",
  },
  {
    title: "Become a Web Developer in 10 minutes",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channelImage:
      "https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",
    channel: "Lomeli Dev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg",
  },
  {
    title: "Become a Web Developer in 10 minutes",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channelImage:
      "https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",
    channel: "Lomeli Dev",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4iwE2Gzx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/urgx6405fk8z7ex6j3r2.jpg",
  },
];

const Home = () => {
  return (
    <section className="container">
      <VideosContainer titlePage="Recommended" videosData={data} />
    </section>
  );
};

export default Home;
