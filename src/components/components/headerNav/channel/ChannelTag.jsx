import React from "react";
import { Button } from "react-bootstrap";
import { BiShare } from "react-icons/bi";
import { RiDownloadLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const profile = {
  Imageurl:
    "https://yt3.ggpht.com/yti/AGOGRCrB1emvjVUO6jhBB8y5cNf-_tvAlSpUA9poMBXxWg=s88-c-k-c0x00ffffff-no-rj-mo",
  ChannelName: "heniabdellaoui",
  SubNumber: "120k",
};

const ChannelTag = () => {
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <div
        style={{
          width: "370px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/*logo*/}
        <img
          src={profile.Imageurl}
          alt="logo"
          height={"40px"}
          width="auto"
          style={{ borderRadius: "100%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h5>{profile.ChannelName} </h5>
          <h6>{profile.SubNumber} </h6>
        </div>
        <Button
          style={{
            height: "35px",
            width: "120px",
            borderRadius: "40px",
            backgroundColor: "black",
          }}
          variant="secondary"
        >
          s'abonner
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Button
            style={{
              borderRadius: "40px",
              color: "white",
              backgroundColor: "black",
            }}
            variant="secondary"
          >
            {" "}
            <AiFillLike /> 14k
          </Button>
          <Button
            style={{
              borderRadius: "40px",
              color: "white",
              backgroundColor: "black",
            }}
            variant="secondary"
          >
            {" "}
            <AiFillDislike />
          </Button>
        </div>
        <Button
          style={{
            borderRadius: "40px",
            color: "white",
            backgroundColor: "black",
          }}
          variant="secondary"
        >
          <BiShare /> partager
        </Button>
        <Button
          style={{
            borderRadius: "40px",
            color: "white",
            backgroundColor: "black",
          }}
          variant="secondary"
        >
          <RiDownloadLine /> télécharger
        </Button>
        <Button
          style={{
            borderRadius: "40px",
            color: "white",
            backgroundColor: "black",
          }}
          variant="secondary"
        >
          <BsThreeDots />
        </Button>
      </div>
    </div>
  );
};

export default ChannelTag;
