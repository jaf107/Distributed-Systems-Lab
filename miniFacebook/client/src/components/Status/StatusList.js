import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatus } from '../../actions/statusActions';

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
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="user d-flex flex-row align-items-center p-2">
                                <span>
                                    <h6 class="font-weight-bold text-primary">
                                        {/* {singleStatus.user_name} */}
                                    </h6>{" "}
                                    <small class="font-weight-bold">{singleStatus.text}</small>
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