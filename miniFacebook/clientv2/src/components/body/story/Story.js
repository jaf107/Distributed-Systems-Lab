import React, { Component } from 'react'
import "./Story.css"
import reynaPic from '../../../assets/reyna.jpg'

class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <div className='container story '>
          <div className='row'>
            <div class="card mine text-white col-md-2 bgPic">
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
          <input type='file' onChange={this.handleChange} />
          <img src={this.state.file} style={{
            height: "100%",
            width: "100%"
          }}></img>
        </div>

      </div>
    )
  }
}
export default Story;