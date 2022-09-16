import React, { useEffect } from "react";
import SingleStory from "./SingleStory";

import "./StoryReel.css";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../../../redux/actions/storyActions";

const StoryReel = () => {
  const dispatch = useDispatch();
  const { story } = useSelector((state) => state.story);
  // console.log(story);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getStories(user._id));
  }, [dispatch, user._id]);
  return (
    <div className="storyReel">
      {story?.map((singleStory) => (
        <SingleStory
          image={`http://localhost:9000/minifacebook/${singleStory.storyUUID}`}
          profileSrc={""}
          title={singleStory.name}
        />
      ))}

    </div>
  );
};

export default StoryReel;
