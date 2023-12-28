import React from "react";

const videos = [
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/yMUcewGoeik",
    title: "Lionel Messi ● Magic in the Air | Skills &amp; Goals Argentina ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/p1jMTBK9pZg",
    title:
      "Lionel Messi ► HEY MAMA Ft. David Guetta ● Crazy Dribbling Skills, Goals &amp; Assists | 2020/21",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/Du7hAEcv26E",
    title: "lionel Messi - ft. Don omar danza kuduro (slowed + reverb) l messi",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/8BVV32I427s",
    title: "Paulo Dybala 2023 • Danza Kuduro • Skills &amp; Goals",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/Krs7END00RQ",
    title: "Lionel Messi ► Ya Lili ● Skills &amp; Goals 2022 | HD",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3xyLi0OG48o",
    title: "Lionel Messi ● Pepas - Farruko | 2022 HD",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/84VLMIHMqMk",
    title: "Lionel Messi - Faded ● Dribbling Skills &amp; Goals 2019 (HD)",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/3ZcbQSG3iZc",
    title:
      "Lionel Messi ● Taki Taki | DJ Snake ft. Selena Gomez, Ozuna &amp; Cardi B ᴴᴰ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/VT5Eia27xKU",
    title: "Neymar Jr ► Danza Kuduro - Mix Skills and Goals - HD",
  },
];

const VideoList = () => {
  return (
    <div>
      {videos.map((el) => (
        <div style={{ display: "flex", margin: "10px" }} key={el.id}>
          <iframe width="230px" height="auto" src={el.vid}></iframe>
          <h6 width="50px">{el.title}</h6>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
