import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../../redux/actions/statusActions';
import "./Status.css"
const StatusList = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.status);

    useEffect(() => {
        dispatch(getStatus());
    }, [dispatch])
    // console.log(status);
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

export default StatusList