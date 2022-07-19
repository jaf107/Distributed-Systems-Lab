import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addStatus } from '../../../redux/actions/statusActions';
const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        statusList: state.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addStatus: dispatch(addStatus(formData))
    }
}
class StatusV1 extends Component {
    
    render() {
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
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusV1);