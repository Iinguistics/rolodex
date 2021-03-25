import React from 'react'
import CaptureChart from '../components/CaptureChart';
import GoBack from '../components/GoBack';



const ViewerCaptureScreen = ({ userInfo, history }) => {



    return (
        <div className="my-5 container">
            <GoBack />
            <h1>Captures</h1>

          <CaptureChart userInfo={userInfo} history={history}/>
        </div>
    )
}

export default ViewerCaptureScreen
