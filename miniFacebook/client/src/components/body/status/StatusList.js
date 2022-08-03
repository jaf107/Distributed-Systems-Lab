import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatus } from "../../../redux/actions/statusActions";
import Post from "./Post";
import "./Status.css";
const StatusList = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.status);
  // const { user } = useSelector((state) => state.user.user);
  const user  = useSelector((state) => state.user.user)

  // console.log(user);
  useEffect(() => {
    dispatch(getStatus(user._id));
  }, [dispatch]);

  return (
    <div>
      <div>
        {status?.map((singleStatus) => (
          <div>
            <Post
              profilePic={""}
              message={singleStatus.text}
              timestamp={singleStatus.createdAt}
              username={singleStatus.user_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusList;
