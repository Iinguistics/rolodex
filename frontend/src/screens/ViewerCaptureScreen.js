import React from 'react'
import CaptureChart from '../components/CaptureChart';



const ViewerCaptureScreen = ({ userInfo, history }) => {



    return (
        <div className="my-5 container">
            <h1>Captures</h1>

          <CaptureChart userInfo={userInfo} history={history}/>
        </div>
    )
}

export default ViewerCaptureScreen
