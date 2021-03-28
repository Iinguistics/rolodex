import React, { useState, Fragment } from 'react';
import { Jumbotron, Card, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Advocate from '../personalityDescriptions/diplomats/Advocate';
import Mediator from '../personalityDescriptions/diplomats/Mediator';
import Protagonist from '../personalityDescriptions/diplomats/Protagonist';
import Campaigner from '../personalityDescriptions/diplomats/Campaigner';


const Diplomats = () => {
    const [advocateDescription, setAdvocateDescription] = useState(false);
    const [mediatorDescription, setMediatorDescription] = useState(false);
    const [protagonistDescription, setProtagonistDescription] = useState(false);
    const [campaignerDescription, setCampaignerDescription] = useState(false);



    return (
        <Fragment>
        <Element name="diplomats">
           <Jumbotron className="card-jumbo-bg">
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
                    <Card.Header>Campaigner</Card.Header>
                    <Card.Body>
                    <Card.Title>ENFP</Card.Title>
                    <Card.Text>
                        Enthusiastic, creative & sociable free spirits, who can always find a reason to smile.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="campaigner" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setCampaignerDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-success btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Robin Williams, Will Smith, Meg Ryan</small>
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
        <Element name="campaigner" className="my-5 full-description" >
           {campaignerDescription && <Campaigner />}
        </Element>

        </Fragment>
    )
}

export default Diplomats
