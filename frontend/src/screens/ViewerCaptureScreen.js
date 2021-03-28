import React, { useEffect } from 'react';
import CaptureChart from '../components/CaptureChart';
import GoBack from '../components/GoBack';



const ViewerCaptureScreen = ({ userInfo, history }) => {

    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }
    }, []);



    return (
        <div className="my-5 container">
            <GoBack />
            <h1>Captures</h1>

          <CaptureChart userInfo={userInfo} />
        </div>
    )
}

export default ViewerCaptureScreen
