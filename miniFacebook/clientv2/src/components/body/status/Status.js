import React, { useEffect, useState } from 'react'
// import { addStatus } from '../../../redux/actions/statusActions';
import "./Status.css"
import { useDispatch, useSelector } from "react-redux";
import StatusList from './StatusList';
import { addStatus, getStatus } from '../../../redux/actions/statusActions';

function statusList(){
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.status);

    useEffect(() => {
        dispatch(getStatus());
    }, [dispatch])
  
    return (
      <div>
          <div className='container'>
              {status?.map((singleStatus) => (
                  <div class="card p-3 bg-white">
                      <div class="  ">
                          <div class="d-flex right p-2">
                          <small class="font-weight-bold block">{singleStatus.text}</small>
                              
                          </div>
                          <div class="p-2">
                              
                              <span>
                                  <h6 class="font-weight-bold text-dark block">
                                      -{singleStatus.user_name}
                                  </h6>{" "}
                              </span>
                          </div>

                          <small>{singleStatus.created_at}</small>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

const Status = () => {
  /*  const [status, setStatus] = useState({
     statusText: "",
   }) */
  const [statusText, setStatusText] = useState("");
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user.user)

  const submitStatus = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("text", statusText);
    myForm.set("uuid", user._id);
    myForm.set("user_name", user.name);
    // console.log(statusText)
    // console.log(user._id)
    
    dispatch(addStatus(myForm));

  }
  /* const statusDataChange = (e) => {
    setStatus({ ...status, [e.target.name]: e.target.value });
  } */
  return (
    <div>
      <div className='container mt-4 pt-4'>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label"
          >What do you have in mind?
          </label>
          <textarea
            name='text'
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            value={statusText}
            onChange={(e) => setStatusText(e.target.value)}
          >

          </textarea>
          <button
            type='submit'
            className='btn btn-primary container post mt-4'
            onClick={submitStatus}
          >
            Post
          </button>        </div>

      </div>
      {statusList}
      {/* <StatusList /> */}
    </div>
  )
}

export default Status