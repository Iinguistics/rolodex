import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Defender = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Defender</h1>
 
            <p>The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type, Defenders are often receptive to change and new ideas. As with so many things, people with the Defender personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are.</p>
            <p>There’s hardly a better type to make up such a large proportion of the population, nearly 13%. Combining the best of tradition and the desire to do good, Defenders are found in lines of work with a sense of history behind them, such as medicine, academics and charitable social work.</p>
            <p>Defender personalities (especially Turbulent ones) are often meticulous to the point of perfectionism, and though they procrastinate, they can always be relied on to get the job done on time. Defenders take their responsibilities personally, consistently going above and beyond, doing everything they can to exceed expectations and delight others, at work and at home.</p>
            <p>The challenge for Defenders is ensuring that what they do is noticed. They have a tendency to underplay their accomplishments, and while their kindness is often respected, more cynical and selfish people are likely to take advantage of Defenders’ dedication and humbleness by pushing work onto them and then taking the credit. Defenders need to know when to say no and stand up for themselves if they are to maintain their confidence and enthusiasm.</p>
            <p>Naturally social, an odd quality for Introverts, Defenders utilize excellent memories not to retain data and trivia, but to remember people, and details about their lives. When it comes to gift-giving, Defenders have no equal, using their imagination and natural sensitivity to express their generosity in ways that touch the hearts of their recipients. While this is certainly true of their coworkers, whom people with the Defender personality type often consider their personal friends, it is in family that their expressions of affection fully bloom.</p>
            <p>Defender personalities are a wonderful group, rarely sitting idle while a worthy cause remains unfinished. Defenders’ ability to connect with others on an intimate level is unrivaled among Introverts, and the joy they experience in using those connections to maintain a supportive, happy family is a gift for everyone involved. They may never be truly comfortable in the spotlight, and may feel guilty taking due credit for team efforts, but if they can ensure that their efforts are recognized, Defenders are likely to feel a level of satisfaction in what they do that many other personality types can only dream of.</p>

            <Link 
                     activeClass="active" to="sentinels" spy={true} smooth={true} 
                     offset={-50} duration={500} delay={200} 
                     isDynamic={true} 
                     >
                     <CgArrowUpR className="h1 up-arrow"/> 
          </Link>
        </Fragment>
    )
}

export default Defender
