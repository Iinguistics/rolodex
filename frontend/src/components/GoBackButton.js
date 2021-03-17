import React from 'react';
import { Link } from 'react-router-dom';


const GoBackButton = () => {
    return (
        <Link to='/profile' className="btn-primary btn my-5">
            Go Back
        </Link>
    )
}

export default GoBackButton
