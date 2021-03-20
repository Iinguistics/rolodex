import React from 'react'

const GoBack = () => {
    return (
        <input className="btn-primary btn my-5" type="submit" value="Go Back" onClick={()=> window.history.back()}/>
    )
}

export default GoBack
