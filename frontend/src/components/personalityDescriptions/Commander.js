import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Commander = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Commander</h1>
 
            <p>Commanders are natural-born leaders. People with this personality type embody the gifts of charisma and confidence, and project authority in a way that draws crowds together behind a common goal. However, Commanders are also characterized by an often ruthless level of rationality, using their drive, determination and sharp minds to achieve whatever end they’ve set for themselves. Perhaps it is best that they make up only three percent of the population, lest they overwhelm the more timid and sensitive personality types that make up much of the rest of the world – but we have Commanders to thank for many of the businesses and institutions we take for granted every day.</p>
            <p>If there’s anything Commanders love, it’s a good challenge, big or small, and they firmly believe that given enough time and resources, they can achieve any goal. This quality makes people with the Commander personality type brilliant entrepreneurs, and their ability to think strategically and hold a long-term focus while executing each step of their plans with determination and precision makes them powerful business leaders. This determination is often a self-fulfilling prophecy, as Commanders push their goals through with sheer willpower where others might give up and move on, and their Extraverted (E) nature means they are likely to push everyone else right along with them, achieving spectacular results in the process.</p>
            <p>At the negotiating table, be it in a corporate environment or buying a car, Commanders are dominant, relentless, and unforgiving. This isn’t because they are coldhearted or vicious per se – it’s more that Commander personalities genuinely enjoy the challenge, the battle of wits, the repartee that comes from this environment, and if the other side can’t keep up, that’s no reason for Commanders to fold on their own core tenet of ultimate victory.</p>
            <p>If there’s anyone Commanders respect, it’s someone who is able to stand up to them intellectually, who is able to act with a precision and quality equal to their own. Commander personalities have a particular skill in recognizing the talents of others, and this helps in both their team-building efforts (since no one, no matter how brilliant, can do everything alone), and to keep Commanders from displaying too much arrogance and condescension. However, they also have a particular skill in calling out others’ failures with a chilling degree of insensitivity, and this is where Commanders really start to run into trouble.</p>
            <p>Emotional expression isn’t the strong suit of any Analyst type, but Commanders’ distance from their emotions is especially public, and felt directly by a much broader swath of people. Especially in a professional environment, Commanders will simply crush the sensitivities of those they view as inefficient, incompetent or lazy. To people with the Commander personality type, emotional displays are displays of weakness, and it’s easy to make enemies with this approach – Commanders will do well to remember that they absolutely depend on having a functioning team, not just to achieve their goals, but for their validation and feedback as well, something Commanders are, curiously, very sensitive to.</p>
            <p>Commanders are true powerhouses, and they cultivate an image of being larger than life – and often enough they are. They need to remember though, that their stature comes not just from their own actions, but from the actions of the team that props them up, and that it’s important to recognize the contributions, talents and needs, especially from an emotional perspective, of their support network. Even if they have to adopt a "fake it ‘til you make it" mentality, if Commanders are able to combine an emotionally healthy focus alongside their many strengths, they will be rewarded with deep, satisfying relationships and all the challenging victories they can handle.</p>

            <Link 
                     activeClass="active" to="analysts" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Commander
