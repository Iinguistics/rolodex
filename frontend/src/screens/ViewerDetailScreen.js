import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Card } from 'react-bootstrap';
import { FaPencilAlt, FaEdit } from 'react-icons/fa';
import GoBack from '../components/GoBack';
import { AiFillStar } from 'react-icons/ai';
import Loader from '../components/bootstrapHelpers/Loader';

const ViewerDetailScreen = ({ userInfo, match, history }) => {
    const [rating, setRating] = useState(Number);
    const [viewer, setViewer] = useState({});
    const [fetchViewerError, setFetchViewerError] = useState("");
    const [loading, setLoading] = useState(true);


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
                setLoading(false);

            }catch(error){
                setFetchViewerError(error.message);
                setLoading(false);
            }
        

        }else{
            setRating(viewer.rating);
        }

    }

    useEffect(()=>{

        if(!userInfo){
         history.push('/login');
        }
            
         fetchViewer();
            
    },[viewer, history, match.params.id])


    const renderStars = ()=>{
        if(rating === 0){
            return;
        }else if(rating === 1){
            return <AiFillStar />
        }
        else if(rating === 2){
            return (
                <>
             <AiFillStar /><AiFillStar /> 
               </>
            )
        }
        else if(rating === 3){
            return (
                <>
             <AiFillStar /><AiFillStar /><AiFillStar /> 
               </>
            )
        }
        else if(rating === 4){
            return (
                <>
             <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
               </>
            )
        }
        else if(rating === 5){
            return (
                <>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> 
               </>
            )
        }
    }


    return (
            <div className="my-5">
                { loading && <Loader /> }
                <GoBack /><br />
                <Link to={`/profile/viewer/edit/${viewer._id}`} className="btn-info btn mb-4">
                    Edit Details <FaEdit className="ml-1"/>
                </Link>
                {fetchViewerError}
             <h2>{viewer.name} Details</h2>

             <Table striped bordered hover responsive variant="dark" className="my-3">
            
            <tbody>
                <tr>
                <td>Username</td>
                <td>{viewer.name}</td>
                </tr>

                <tr>
                <td>Rating</td>
                <td>{viewer.rating} {renderStars()}</td>
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

            <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Notes <FaPencilAlt className="ml-1"/></Card.Header>
                    <Card.Body>
                    <Card.Text>
                     {viewer.notes}
                    </Card.Text>
                    </Card.Body>
            </Card>
             
            </div>
            
    )
}

export default ViewerDetailScreen
