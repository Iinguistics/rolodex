import React, {  useEffect } from 'react'

const ProfileSettingScreen = ({ userInfo, history }) => {




   useEffect(()=>{

    if(!userInfo){
        history.push('/login');
    }
   }, [])


    return (
        <div className="my-5">
            settings screen
        </div>
    )
}

export default ProfileSettingScreen
