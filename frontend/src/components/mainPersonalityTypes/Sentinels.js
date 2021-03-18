import React, { useState, useEffect, Fragment } from 'react';
import { Jumbotron, Button, Row, Col, Card, Container, CardGroup, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Mediator from '../personalityDescriptions/diplomats/Mediator';
import Protagonist from '../personalityDescriptions/diplomats/Protagonist';
import Campaigner from '../personalityDescriptions/diplomats/Campaigner';
import Logician from '../personalityDescriptions/sentinels/Logistician';
import Logistician from '../personalityDescriptions/sentinels/Logistician';
import Defender from '../personalityDescriptions/sentinels/Defender';



const Sentinels = () => {
    const [logisticianDescription, setLogisticianDescription] = useState(false);
    const [campaignerDescription, setCampaignerDescription] = useState(false);
    const [protagonistDescription, setProtagonistDescription] = useState(false);
    const [defenderDescription, setDefenderDescription] = useState(false);



    return (
        <Fragment>
        <Element name="sentinels">
           <Jumbotron className="card border-info">
           <h1>Sentinels</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Logistician</Card.Header>
                    <Card.Body>
                    <Card.Title>ISTJ</Card.Title>
                    <Card.Text>
                     Practical & fact minded individuals, whose reliability cannot be doubted.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="logistician" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setLogisticianDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">George Washington, Natalie Portman, Sting</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Defender</Card.Header>
                    <Card.Body>
                    <Card.Title>ISFJ</Card.Title>
                    <Card.Text>
                      Dedicated & warm protectors, always ready to defend their loved ones.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="defender" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setDefenderDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Beyonce, Aretha Franklin, Vin Diesel</small>
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
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
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
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Robin Williams, Will Smith, Meg Ryan</small>
                    </Card.Footer>
                </Card>
                </CardDeck>
          </Jumbotron>
        </Element>


        <Element name="logistician" className="my-5 full-description" >
           {logisticianDescription && <Logistician />}
        </Element>
        <Element name="defender" className="my-5 full-description" >
           {defenderDescription && <Defender />}
        </Element>
        <Element name="protagonist" className="my-5 full-description" >
           {protagonistDescription && <Protagonist />}
        </Element>
       

        </Fragment>
    )
}

export default Sentinels
