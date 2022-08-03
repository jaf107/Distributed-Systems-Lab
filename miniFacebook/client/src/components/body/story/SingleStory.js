import React from "react";
import { Avatar } from "@material-ui/core";
import "./SingleStory.css";

const SingleStory = ({ image, profileSrc, title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="single_story"
    >
      <Avatar src={profileSrc} className="single_story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default SingleStory;
