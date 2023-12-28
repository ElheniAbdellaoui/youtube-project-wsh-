import React from "react";

const video = {
  vidURL: "https://www.youtube.com/embed/7nfchMw0gB0",
  title: "Messi Crazy Skills And Goals - Danza Kuduro",
  hash: "#messi #dribbling #song",
};

const VideoNav = () => {
  return (
    <div>
      <iframe
        src={video.vidURL}
        frameborder="0"
        width="853"
        height="480"
      ></iframe>
      <h6 className="hash">{video.hash} </h6>
      <h3 className="title">{video.title} </h3>
    </div>
  );
};

export default VideoNav;
