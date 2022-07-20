import React, { Component, useState } from 'react'
import "./Story.css"
import reynaPic from '../../../assets/reyna.jpg'
import { useDispatch, useSelector } from 'react-redux'
import FileUploader from './FileUploader'
import { postStory } from '../../../redux/actions/storyActions'

const Story =()=> {
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user.user)
  
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  
    const handleSubmit =(e) =>{
      e.preventDefault()
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", selectedFile)
      dispatch(postStory(formData));
    }
    return (
      <div>
        <div className='container story '>
          <div className='row'>
            <div class="card mine text-white col-md-4 bgPic">
              <div class="card-img"></div>
              <div class="card-img-overlay center-dot">
                <input type="file" />
                <button class="dot" >
                  <h2 style={{ "color": "#2e4b88" }} >+</h2>
                </button>
                <h6 class="card-title" style={{ "margin-top": "8.5rem;" }}></h6>
              </div>
            </div>
            <div className='card mine bg-dark text-white col-md-2' style={{ backgroundImage: `url(${reynaPic}) no-repeat center center fixed` }}>
              <img src={reynaPic} />
              <div class="card-img-overlay">
                <p class="card-text">Last updated 3 mins ago</p>
                <div class="card-img"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form>
            {/* <input 
              type='file'
              value={selectedFile}
              onChange={(e)=> setSelectedFile(e.target.files[0])}  
            /> */}

            <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
            <button onClick={handleSubmit} className='btn btn-primary' >Post Story</button>
          </form>

        </div>

      </div>
    )
  }

export default Story;