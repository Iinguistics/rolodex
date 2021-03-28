import React, { useState, Fragment } from 'react';
import { Jumbotron, Card, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Architect from '../personalityDescriptions/analysts/Architect';
import Logician from '../personalityDescriptions/analysts/Logician';
import Commander from '../personalityDescriptions/analysts/Commander';
import Debater from '../personalityDescriptions/analysts/Debater';

const Analysts = () => {
    const [architectDescription, setArchitectDescription] = useState(false);
    const [logicianDescription, setLogicianDescription] = useState(false);
    const [commanderDescription, setCommanderDescription] = useState(false);
    const [debaterDescription, setDebaterDescription] = useState(false);




    return (
        <Fragment>
        <Element name="analysts">
           <Jumbotron className="card-jumbo-bg">
           <h1>Analysts</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Architect</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">INTJ</Card.Title>
                    <Card.Text >
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
                    <small className="text-muted">Elon Musk, Michelle Obama, Vladimir Putin</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Logician</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">INTP</Card.Title>
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
                    <small className="text-muted">Bill Gates, Albert Einstein, Isaac Newton</small>
                    </Card.Footer>
                </Card>

                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Commander</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ENTJ</Card.Title>
                    <Card.Text>
                        Bold, imaginative & strong-willed leaders, always finding a way, or making one themselves.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="commander" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setCommanderDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-primary btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Steve Jobs, Gordon Ramsay, Franklin D. Roosevelt</small>
                    </Card.Footer>
                </Card>
                
               
                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Debater</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ENTP</Card.Title>
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
                    <input type="submit" value="Full Description" className="btn-primary btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Mark Twain, Tom Hanks, Thomas Edison</small>
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
        <Element name="commander" className="my-5 full-description" >
           {commanderDescription && <Commander />}
        </Element>
        <Element name="debater" className="my-5 full-description" >
           {debaterDescription && <Debater />}
        </Element>

        </Fragment>
    )
}

export default Analysts
