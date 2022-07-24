import React from "react";
import MessageSender from "../status/MessageSender";
import StatusList from "../status/StatusList";
import Story from "../story/Story";
import StoryReel from "../story/StoryReel";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_top">
        <Story/>
        {/* <StoryReel /> */}
      </div>
      <div className="feed_middle">
        <MessageSender />
      </div>
      <div className="feed_bottom">
        <StatusList />
      </div>
    </div>
  );
};

export default Feed;
