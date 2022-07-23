import { Avatar, Input } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStatus } from "../../../redux/actions/statusActions";
import "./MessageSender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [statusText, setStatusText] = useState("");

  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user.user)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(statusText)
    const myForm = new FormData();
    myForm.set("text", statusText);
    myForm.set("uuid", user._id);
    myForm.set("user_name", user.name);
 
    dispatch(addStatus(myForm));
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={""} />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={statusText}
            onChange={(e) => setStatusText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-primary "
            style={{
              borderRadius: "999px",
            }}
            type="submit"
          >
            Post Status
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageSender;
