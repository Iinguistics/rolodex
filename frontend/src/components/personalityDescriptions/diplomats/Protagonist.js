import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Protagonist = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Protagonist</h1>
 
            <p>Protagonists are natural-born leaders, full of passion and charisma. Forming around two percent of the population, they are oftentimes our politicians, our coaches and our teachers, reaching out and inspiring others to achieve and to do good in the world. With a natural confidence that begets influence, Protagonists take a great deal of pride and joy in guiding others to work together to improve themselves and their community.</p>
            <p>People are drawn to strong personalities, and Protagonists radiate authenticity, concern and altruism, unafraid to stand up and speak when they feel something needs to be said. They find it natural and easy to communicate with others, especially in person, and their Intuitive (N) trait helps people with the Protagonist personality type to reach every mind, be it through facts and logic or raw emotion. Protagonists easily see people’s motivations and seemingly disconnected events, and are able to bring these ideas together and communicate them as a common goal with an eloquence that is nothing short of mesmerizing.</p>
            <p>The interest Protagonists have in others is genuine, almost to a fault – when they believe in someone, they can become too involved in the other person’s problems, place too much trust in them. Luckily, this trust tends to be a self-fulfilling prophecy, as Protagonists’ altruism and authenticity inspire those they care about to become better themselves. But if they aren’t careful, they can overextend their optimism, sometimes pushing others further than they’re ready or willing to go.</p>
            <p>Protagonists are vulnerable to another snare as well: they have a tremendous capacity for reflecting on and analyzing their own feelings, but if they get too caught up in another person’s plight, they can develop a sort of emotional hypochondria, seeing other people’s problems in themselves, trying to fix something in themselves that isn’t wrong. If they get to a point where they are held back by limitations someone else is experiencing, it can hinder Protagonists’ ability to see past the dilemma and be of any help at all. When this happens, it’s important for Protagonists to pull back and use that self-reflection to distinguish between what they really feel, and what is a separate issue that needs to be looked at from another perspective.</p>
            <p>People with the Protagonist personality type are passionate altruists, sometimes even to a fault, and they are unlikely to be afraid to take the slings and arrows while standing up for the people and ideas they believe in. It is no wonder that many famous Protagonists are cultural or political icons – this personality type wants to lead the way to a brighter future, whether it’s by leading a nation to prosperity, or leading their little league softball team to a hard-fought victory.</p>

            <Link 
                     activeClass="active" to="diplomats" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Protagonist
