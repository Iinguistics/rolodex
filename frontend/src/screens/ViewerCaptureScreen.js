import React, { useEffect } from 'react';
import CaptureChart from '../components/CaptureChart';
import GoBack from '../components/GoBack';
import ScrollToTop from '../components/ScrollToTop';


const ViewerCaptureScreen = ({ userInfo, history }) => {

    useEffect(()=>{
        if(!userInfo){
         history.push('/login');
        }
    }, [userInfo, history]);

    useEffect(()=>{
        ScrollToTop();
    }, [])



    return (
        <div className="my-5 container">
            <GoBack />
            <h1>Captures</h1>
          <CaptureChart userInfo={userInfo} history={history} />
        </div>
    )
}

export default ViewerCaptureScreen
