import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoBackButton from '../components/GoBackButton';
import { Table } from 'react-bootstrap';


const ViewerDetailScreen = ({ userInfo, match, history }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(Number);
    const [followingSince, setFollowingSince] = useState("");
    const [personalityType, setPersonalityType] = useState("");
    const [location, setLocation] = useState("");
    const [age, setAge] = useState("");
    const [notes, setNotes] = useState("");
    const [viewer, setViewer] = useState({});
    const [fetchViewerError, setFetchViewerError] = useState("");
    const [loading, setLoading] = useState(false);



    const fetchViewer = async()=>{
        
        if(!viewer.name || viewer._id !== match.params.id){
            try{
                const config = {
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${userInfo.token}`
                    }
                }
                const { data } = await axios.get(`/api/viewers/${match.params.id}`, config)

                setViewer(data);


            }catch(error){
                setFetchViewerError(error.message);
            }
        

        }else{
            setName(viewer.name);
            setRating(viewer.rating);
            setFollowingSince(viewer.followingSince);
            setPersonalityType(viewer.personalityType);
            setLocation(viewer.location);
            setAge(viewer.age);
            setNotes(viewer.notes);
        }

    }

    useEffect(()=>{

        if(!userInfo){
         history.push('/login');
        }
            
         fetchViewer();
            
    },[viewer, history, match.params.id])

   console.log(viewer.followingSince)



    return (
            <div className="my-5">
                <GoBackButton />
             <h2>{viewer.name} Details</h2>

             <Table striped bordered hover responsive variant="dark" className="my-3">
            
            <tbody>
                <tr>
                <td>Username</td>
                <td>{viewer.name}</td>
                </tr>

                <tr>
                <td>Rating</td>
                <td>{viewer.rating}</td>
                </tr>

                <tr>
                <td>Following Since</td>
                <td>{viewer.followingSince}</td>
                </tr>

                <tr>
                <td>Personality Type</td>
                <td>{viewer.personalityType}</td>
                </tr>

                <tr>
                <td>Location</td>
                <td>{viewer.location}</td>
                </tr>

                <tr>
                <td>Age</td>
                <td>{viewer.age}</td>
                </tr>
               
            </tbody>
            </Table>

         
             
            </div>
            
    )
}

export default ViewerDetailScreen
