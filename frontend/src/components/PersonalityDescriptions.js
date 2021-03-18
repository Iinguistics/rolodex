import React from 'react';
import Analysts from '../components/mainPersonalityTypes/Analysts';
import Diplomats from '../components/mainPersonalityTypes/Diplomats';
import Sentinels from '../components/mainPersonalityTypes/Sentinels';
import Explorers from '../components/mainPersonalityTypes/Explorers';

const PersonalityDescriptions = () => {
 

    return (
        <div className="container my-5">
           <Analysts />
           <Diplomats />
           <Sentinels />
           <Explorers />
        </div>
    )
}

export default PersonalityDescriptions
