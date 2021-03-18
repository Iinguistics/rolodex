import React from 'react';
import Analysts from '../components/mainPersonalityTypes/Analysts';
import Diplomats from '../components/mainPersonalityTypes/Diplomats';
import Sentinels from '../components/mainPersonalityTypes/Sentinels';


const PersonalityDescriptions = () => {
 

    return (
        <div className="container my-5">
           <Analysts />
           <Diplomats />
           <Sentinels />

        

        </div>
    )
}

export default PersonalityDescriptions
