import React, { useState } from 'react';
import tmi from 'tmi.js';


const TMI = ({ channel }) => {
    const [message, setMessage] = useState("");

    const client = new tmi.Client({
        connection: { reconnect: true, secure: true },
        channels: [ channel ],
    });
    
    client.connect();

    client.on('message', (channel, tags, message, self) => {
        setMessage(`${tags['display-name']}: ${message}`)         
    });

    
    const renderMessage = ()=>{
        return <p className="text-light m-auto ">{ message }</p>
    }
    

    return (
        <div className="my-5 bg-dark w-75 p-4 p-md-5 border border-info rounded">
           {renderMessage()}
        </div>
    )
}

export default TMI
