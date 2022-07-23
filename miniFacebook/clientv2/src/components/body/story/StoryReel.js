import React, { useEffect } from "react";
import SingleStory from "./SingleStory";
import Shrek from "../../../assets/shrek.jpg";
import Pic from "../../../assets/jaf.jpeg";
import reynaPic from "../../../assets/reyna.jpg";

import "./StoryReel.css";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../../redux/actions/storyActions";

const StoryReel = () => {
  const dispatch = useDispatch();
  const { story } = useSelector((state) => state.story);
  // console.log(story);
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <div className="storyReel">
      {story?.map((singleStory) => (
        <SingleStory image={story.storyUUID} profileSrc={''} title={story.name}/>
      ))}
      
      {/* <SingleStory image={Shrek} profileSrc={Pic} title="Jafar Mahin" />
      <SingleStory image={Pic} profileSrc={Pic} title="Jafar Mahin" />
      <SingleStory image={reynaPic} profileSrc={Pic} title="Jafar Mahin" /> */}
    </div>
  );
};

export default StoryReel;
