import React, { useState } from "react";
import "./Story.css";
import { useDispatch, useSelector } from "react-redux";
import { postStory } from "../../../redux/actions/storyActions";
import StoryReel from "./StoryReel";
import { Input } from "@material-ui/core";

const Story = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("picture", picture);
    formData.append("user_UUID",user._id);
    dispatch(postStory(formData));
  };
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className="story">
        <div className="story__card">
          <Input
            type="file"
            // className="story__input"
            onChange={onChangePicture}
          />
          <button onClick={handleSubmit} className="story__button">
            +
          </button>
          <img className="playerProfilePic_home_tile sampleImg" src={imgData} />
        </div>
        <StoryReel />
      </div>
    </div>
  );
};

export default Story;
