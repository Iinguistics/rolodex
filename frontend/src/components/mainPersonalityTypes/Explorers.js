import React, { useState, Fragment } from 'react';
import { Jumbotron, Card, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Defender from '../personalityDescriptions/sentinels/Defender';
import Executive from '../personalityDescriptions/sentinels/Executive';
import Consul from '../personalityDescriptions/sentinels/Consul';
import Virtuoso from '../personalityDescriptions/explorers/Virtuoso';


const Explorers = () => {
    const [virtuosoDescription, setVirtuosoDescription] = useState(false);
    const [adventurerDescription, setAdventurerDescription] = useState(false);
    const [executiveDescription, setExecutiveDescription] = useState(false);
    const [consulDescription, setConsulDescription] = useState(false);



    return (
        <Fragment>
        <Element name="explorers">
           <Jumbotron className="card border-warning">
           <h1>Explorers</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Virtuoso</Card.Header>
                    <Card.Body>
                    <Card.Title>ISTP</Card.Title>
                    <Card.Text>
                     Bold & practical experimenters, masters of all kinds of tools.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="virtuoso" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setVirtuosoDescription(true)}
                    className="ml-3"
                    > 
                    <input type="submit" value="Full Description" className="btn-warning btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Bear Grylls, Clint Eastwood, Milla Jovovich</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Adventurer</Card.Header>
                    <Card.Body>
                    <Card.Title>ISFP</Card.Title>
                    <Card.Text>
                      Flexible & charming artists, always ready to explore & experience new things.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="adventurer" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setAdventurerDescription(true)}
                    className="ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-warning btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Lana Del Rey, Kevin Costner, Britney Spears</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Executive</Card.Header>
                    <Card.Body>
                    <Card.Title>ESTJ</Card.Title>
                    <Card.Text>
                        Excellent administrators, unsurpassed at managing things or people.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="executive" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setExecutiveDescription(true)}
                    className="ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-warning btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Lyndon B. Johnson, James Monroe, Laura Linney</small>
                    </Card.Footer>
                </Card>
                
               
                <Card className="personality-description-cards" text="light" >
                    <Card.Header>Consul</Card.Header>
                    <Card.Body>
                    <Card.Title>ESFJ</Card.Title>
                    <Card.Text>
                       Extraordinarily caring, social & popular people, always eager to help.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="consul" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setConsulDescription(true)}
                    className="ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-warning btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                </CardDeck>
          </Jumbotron>
        </Element>


        <Element name="virtuoso" className="my-5 full-description" >
           {virtuosoDescription && <Virtuoso />}
        </Element>
        <Element name="defender" className="my-5 full-description" >
           {adventurerDescription && <Defender />}
        </Element>
        <Element name="executive" className="my-5 full-description" >
           {executiveDescription && <Executive />}
        </Element>
        <Element name="consul" className="my-5 full-description" >
           {consulDescription && <Consul />}
        </Element>
       

        </Fragment>
    )
}

export default Explorers
