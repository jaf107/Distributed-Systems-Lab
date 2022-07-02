import React, { useState } from 'react'
import { addStatus } from '../../actions/statusActions';
import "./Status.css"

const Status = () => {
  const [status, setStatus] = useState({
    text: "",
  })
  const { text } = status;

  const submitStatus = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("text", text);
    // console.log(text)
    dispatchEvent(addStatus(myForm));
    
  }
  const statusDataChange = (e) => {
    setStatus({ ...status, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <div className='container mt-4 pt-4'>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">What do you have in mind?</label>
          <textarea
            name='text'
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            value={text}
            onChange={statusDataChange}
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
    </div>
  )
}

export default Status