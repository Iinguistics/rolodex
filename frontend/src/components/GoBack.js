import React from 'react'
import { Link } from 'react-router-dom';

const GoBack = () => {
    return (
        <Link to="/"><button type="button" className="btn btn-dark mb-4">Go Back</button></Link>
    )
}

export default GoBack
