import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Entrepreneur = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Entrepreneur</h1>
 
            <p>Entrepreneurs always have an impact on their immediate surroundings – the best way to spot them at a party is to look for the whirling eddy of people flitting about them as they move from group to group. Laughing and entertaining with a blunt and earthy humor, Entrepreneur personalities love to be the center of attention. If an audience member is asked to come on stage, Entrepreneurs volunteer – or volunteer a shy friend.</p>
            <p>Theory, abstract concepts and plodding discussions about global issues and their implications don’t keep Entrepreneurs interested for long. Entrepreneurs keep their conversation energetic, with a good dose of intelligence, but they like to talk about what is – or better yet, to just go out and do it. Entrepreneurs leap before they look, fixing their mistakes as they go, rather than sitting idle, preparing contingencies and escape clauses.</p>
            <p>Entrepreneurs are the likeliest personality type to make a lifestyle of risky behavior. They live in the moment and dive into the action – they are the eye of the storm. People with the Entrepreneur personality type enjoy drama, passion, and pleasure, not for emotional thrills, but because it’s so stimulating to their logical minds. They are forced to make critical decisions based on factual, immediate reality in a process of rapid-fire rational stimulus response.</p>
            <p>This makes school and other highly organized environments a challenge for Entrepreneurs. It certainly isn’t because they aren’t smart, and they can do well, but the regimented, lecturing approach of formal education is just so far from the hands-on learning that Entrepreneurs enjoy. It takes a great deal of maturity to see this process as a necessary means to an end, something that creates more exciting opportunities.</p>
            <p>Also challenging is that to Entrepreneurs, it makes more sense to use their own moral compass than someone else’s. Rules were made to be broken. This is a sentiment few high school instructors or corporate supervisors are likely to share, and can earn Entrepreneur personalities a certain reputation. But if they minimize the trouble-making, harness their energy, and focus through the boring stuff, Entrepreneurs are a force to be reckoned with.</p>
            <p>With perhaps the most perceptive, unfiltered view of any type, Entrepreneurs have a unique skill in noticing small changes. Whether a shift in facial expression, a new clothing style, or a broken habit, people with this personality type pick up on hidden thoughts and motives where most types would be lucky to pick up anything specific at all. Entrepreneurs use these observations immediately, calling out the change and asking questions, often with little regard for sensitivity. Entrepreneurs should remember that not everyone wants their secrets and decisions broadcast.</p>
            <p>If Entrepreneurs aren’t careful though, they may get too caught in the moment, take things too far, and run roughshod over more sensitive people, or forget to take care of their own health and safety. Making up only four percent of the population, there are just enough Entrepreneurs out there to keep things spicy and competitive, and not so many as to cause a systemic risk.</p>
            <p>Entrepreneurs are full of passion and energy, complemented by a rational, if sometimes distracted, mind. Inspiring, convincing and colorful, they are natural group leaders, pulling everyone along the path less traveled, bringing life and excitement everywhere they go. Putting these qualities to a constructive and rewarding end is Entrepreneurs’ true challenge.</p>

            <Link 
                     activeClass="active" to="explorers" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Entrepreneur
