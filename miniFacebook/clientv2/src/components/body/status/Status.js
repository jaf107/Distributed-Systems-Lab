import React, { useState } from 'react'
// import { addStatus } from '../../../redux/actions/statusActions';
import "./Status.css"
import { useDispatch, useSelector } from "react-redux";
import StatusList from './StatusList';
import { addStatus} from '../../../redux/actions/statusActions';


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
      <StatusList />
    </div>
  )
}

export default Status