import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';



const SearchBox = ({ history })=>{
      const [keyword, setKeyword] = useState("");


      const submitHandler = (e)=>{
          e.preventDefault();
          if(keyword.trim()){
              history.push(`profile/search/${keyword}`);
          }else{
              history.push('/profile');
          }
      }



    return(
        <Form onSubmit={submitHandler} inline>
           <Form.Control type="text" name="q" onChange={(e)=> setKeyword(e.target.value)}
            placeholder="Search" className="mr-sm-2">
           </Form.Control>
           <Button type="submit" variant="outline-primary" className="p-2 btn-sm mt-2 mt-md-0">Search Viewers</Button>
        </Form>
    )
}


export default SearchBox