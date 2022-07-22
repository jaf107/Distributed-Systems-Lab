import React, { useState } from "react";
import "./Story.css";
import reynaPic from "../../../assets/reyna.jpg";
import { useDispatch, useSelector } from "react-redux";
import { postStory } from "../../../redux/actions/storyActions";

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
      <div className="container story ">
        <div>
          <input id="profilePic" type="file" onChange={onChangePicture} />

          <button onClick={handleSubmit} className="btn btn-primary">
            Post Story
          </button>
          <img className="playerProfilePic_home_tile" src={imgData} />
        </div>
      </div>
    </div>
  );
};

export default Story;
