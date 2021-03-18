import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Row, Col, Card, Container, CardGroup, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Architect from '../components/personalityDescriptions/Architect';
import Logician from '../components/personalityDescriptions/Logician';


const PersonalityDescriptions = () => {
    const [architectDescription, setArchitectDescription] = useState(false);
    const [logicianDescription, setLogicianDescription] = useState(false);



    // const showPersonalityDesctiptions = ()=>{
    //     if(architectDescription){
    //         return <Architect />
    //     }
    // }



    






    return (
        <div className="container my-5">
           <Element name="analysts">
           <Jumbotron>
           <h1>Analysts</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Architect</Card.Header>
                    <Card.Body>
                    <Card.Title>INTJ</Card.Title>
                    <Card.Text>
                     Imaginative & strategic thinkers, with a plan for everything.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="architect" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setArchitectDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-primary btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Elon Musk, Michelle Obama, Vladimir Putin, ...</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Logician</Card.Header>
                    <Card.Body>
                    <Card.Title>INTP</Card.Title>
                    <Card.Text>
                      Innovative inventors with an unquenchable thirst for knowledge.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="logician" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setLogicianDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-primary btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Bill Gates, Albert Einstein, Isaac Newton, ...</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Commander</Card.Header>
                    <Card.Body>
                    <Card.Title>ENTJ</Card.Title>
                    <Card.Text>
                        Bold, imaginative & strong-willed leaders, always finding a way, or making one themselves.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Elon Musk, Michelle Obama, Vladimir Putin</small>
                    </Card.Footer>
                </Card>
                
               
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Debater</Card.Header>
                    <Card.Body>
                    <Card.Title>ENTP</Card.Title>
                    <Card.Text>
                        Smart & curious thinkers who cannot resist an intellectual challenge.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Elon Musk, Michelle Obama, Vladimir Putin</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
          </Jumbotron>
        </Element>



        <Element name="architect" className="my-5 full-description" >
           {architectDescription && <Architect />}
        </Element>
        <Element name="logician" className="my-5 full-description" >
           {logicianDescription && <Logician />}
        </Element>

        </div>
    )
}

export default PersonalityDescriptions
