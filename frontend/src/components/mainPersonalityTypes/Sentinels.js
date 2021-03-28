import React, { useState, Fragment } from 'react';
import { Jumbotron, Card, CardDeck } from 'react-bootstrap';
import { Link, Element } from 'react-scroll';
import Logistician from '../personalityDescriptions/sentinels/Logistician';
import Defender from '../personalityDescriptions/sentinels/Defender';
import Executive from '../personalityDescriptions/sentinels/Executive';
import Consul from '../personalityDescriptions/sentinels/Consul';


const Sentinels = () => {
    const [logisticianDescription, setLogisticianDescription] = useState(false);
    const [defenderDescription, setDefenderDescription] = useState(false);
    const [executiveDescription, setExecutiveDescription] = useState(false);
    const [consulDescription, setConsulDescription] = useState(false);



    return (
        <Fragment>
        <Element name="sentinels">
           <Jumbotron className="card-jumbo-bg">
           <h1>Sentinels</h1>
            
           <CardDeck className="mt-5">
                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Logistician</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ISTJ</Card.Title>
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
                    <Card.Header className="text-light">Defender</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ISFJ</Card.Title>
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
                    <Card.Header className="text-light">Executive</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ESTJ</Card.Title>
                    <Card.Text>
                        Excellent administrators, unsurpassed at managing things or people.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="executive" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setExecutiveDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Lyndon B. Johnson, James Monroe, Laura Linney</small>
                    </Card.Footer>
                </Card>
                
               
                <Card className="personality-description-cards" text="light" >
                    <Card.Header className="text-light">Consul</Card.Header>
                    <Card.Body>
                    <Card.Title className="text-light">ESFJ</Card.Title>
                    <Card.Text>
                       Extraordinarily caring, social & popular people, always eager to help.
                    </Card.Text>
                    </Card.Body>
                    <Link 
                    activeClass="active" to="consul" spy={true} smooth={true} 
                    offset={-70} duration={500} delay={200} 
                    isDynamic={true} 
                    onClick={()=> setConsulDescription(true)}
                    className="text-info ml-3 "
                    > 
                    <input type="submit" value="Full Description" className="btn-info btn rounded" />
                    </Link>
                    <Card.Footer>
                    <small className="text-muted">Taylor Swift, Bill Clinton, Jennifer Garner</small>
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
        <Element name="executive" className="my-5 full-description" >
           {executiveDescription && <Executive />}
        </Element>
        <Element name="consul" className="my-5 full-description" >
           {consulDescription && <Consul />}
        </Element>
       

        </Fragment>
    )
}

export default Sentinels
