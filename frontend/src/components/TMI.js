import React, { useState, useEffect } from 'react';
import tmi from 'tmi.js';


const TMI = ({ channel }) => {
    const [message, setMessage] = useState("");
    const [tag, setTag] = useState("");

    const fetchChat = ()=>{
        const client = new tmi.Client({
            connection: { reconnect: true, secure: true },
            channels: [ channel ],
        });
        
        client.connect();
    
        client.on('message', (channel, tags, message, self) => {
            setTag(tags['display-name']);
            setMessage(message);   
            //console.log('ran');
        });
    }


    useEffect(()=>{
        fetchChat();

    },[])
    
    // not putting in useEffect could cause the app to crash?
    // const client = new tmi.Client({
    //     connection: { reconnect: true, secure: true },
    //     channels: [ channel ],
    // });
    
    // client.connect();

    // client.on('message', (channel, tags, message, self) => {
    //     setTag(tags['display-name']);
    //     setMessage(message);   
    // });

    
    const renderMessage = ()=>{
        return (
            <>
         <p className="text-info d-inline">{tag}: {' '}</p> <p className="text-light m-auto d-inline">{message}</p>
           </>
        )
    }
    

    return (
        <div className="my-5 bg-dark w-75 p-4 p-md-5 border border-info rounded">
           {renderMessage()}
        </div>
    )
}

export default TMI
