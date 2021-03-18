import React, { useState, useEffect, Fragment } from 'react';
import { Jumbotron, Button, Row, Col, Card, Container, CardGroup, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Debater from '../personalityDescriptions/analysts/Debater';
import Advocate from '../personalityDescriptions/diplomats/Advocate';
import Mediator from '../personalityDescriptions/diplomats/Mediator';
import Protagonist from '../personalityDescriptions/diplomats/Protagonist';


const Diplomats = () => {
    const [advocateDescription, setAdvocateDescription] = useState(false);
    const [mediatorDescription, setMediatorDescription] = useState(false);
    const [protagonistDescription, setProtagonistDescription] = useState(false);
    const [debaterDescription, setDebaterDescription] = useState(false);



    return (
        <Fragment>
        <Element name="diplomats">
           <Jumbotron className="card border-success">
           <h1>Diplomats</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Advocate</Card.Header>
                    <Card.Body>
                    <Card.Title>INFJ</Card.Title>
                    <Card.Text>
                     Quite & mystical, yet very inspiring & tireless idealists.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="advocate" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setAdvocateDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-success btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Martin Luther King, Nelson Mandela, Goethe</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Mediator</Card.Header>
                    <Card.Body>
                    <Card.Title>INFP</Card.Title>
                    <Card.Text>
                      Poetic, kind & altruistic people, always eager to help a good cause.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="mediator" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setMediatorDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-success btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">William Shakespeare, Bjork, Johnny Depp</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Protagonist</Card.Header>
                    <Card.Body>
                    <Card.Title>ENJF</Card.Title>
                    <Card.Text>
                        Charismatic & inspiring leaders, able to mesmerize their listeners.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="protagonist" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setProtagonistDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-success btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Barack Obamam, Oprah Winfrey, Ben Affleck</small>
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
                    <Link 
                    activeClass="active" to="debater" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setDebaterDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-success btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Mark Twain, Tom Hanks, Thomas Edison</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
          </Jumbotron>
        </Element>


     <Element name="advocate" className="my-5 full-description" >
           {advocateDescription && <Advocate />}
        </Element>
        <Element name="mediator" className="my-5 full-description" >
           {mediatorDescription && <Mediator />}
        </Element>
        <Element name="protagonist" className="my-5 full-description" >
           {protagonistDescription && <Protagonist />}
        </Element>
        <Element name="debater" className="my-5 full-description" >
           {debaterDescription && <Debater />}
        </Element>

        </Fragment>
    )
}

export default Diplomats
