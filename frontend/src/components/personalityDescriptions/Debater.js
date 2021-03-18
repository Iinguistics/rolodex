import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Debater = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Debater</h1>
 
            <p>No one loves the process of mental sparring more than the Debater personality type, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points. Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.</p>
            <p>Playing the devil’s advocate helps people with the Debater personality type to not only develop a better sense of others’ reasoning, but a better understanding of opposing ideas – since Debaters are the ones arguing them.</p>
            <p>This tactic shouldn’t be confused with the sort of mutual understanding Diplomat personalities seek – Debaters, like all Analyst personality types, are on a constant quest for knowledge, and what better way to gain it than to attack and defend an idea, from every angle, from every side?</p>
            <p>Taking a certain pleasure in being the underdog, Debaters enjoy the mental exercise found in questioning the prevailing mode of thought, making them irreplaceable in reworking existing systems or shaking things up and pushing them in clever new directions. However, they’ll be miserable managing the day-to-day mechanics of actually implementing their suggestions. Debater personalities love to brainstorm and think big, but they will avoid getting caught doing the “grunt work” at all costs. Debaters only make up about three percent of the population, which is just right, as it lets them create original ideas, then step back to let more numerous and fastidious personalities handle the logistics of implementation and maintenance.</p>
            <p>Debaters’ capacity for debate can be a vexing one – while often appreciated when it’s called for, it can fall painfully flat when they step on others’ toes by say, openly questioning their boss in a meeting, or picking apart everything their significant other says. This is further complicated by Debaters’ unyielding honesty, as this type doesn’t mince words and cares little about being seen as sensitive or compassionate. Likeminded types get along well enough with people with the Debater personality type, but more sensitive types, and society in general, are often conflict-averse, preferring feelings, comfort, and even white lies over unpleasant truths and hard rationality.</p>
            <p>This frustrates Debaters, and they find that their quarrelsome fun burns many bridges, oftentimes inadvertently, as they plow through others’ thresholds for having their beliefs questioned and their feelings brushed aside. Treating others as they’d be treated, Debaters have little tolerance for being coddled, and dislike when people beat around the bush, especially when asking a favor. Debater personalities find themselves respected for their vision, confidence, knowledge, and keen sense of humor, but often struggle to utilize these qualities as the basis for deeper friendships and romantic relationships.</p>
            <p>Debaters have a longer road than most in harnessing their natural abilities – their intellectual independence and free-form vision are tremendously valuable when they’re in charge, or at least have the ear of someone who is, but getting there can take a level of follow-through that Debaters struggle with.</p>
            <p>Once they’ve secured such a position, Debaters need to remember that for their ideas to come to fruition, they will always depend on others to assemble the pieces – if they’ve spent more time “winning” arguments than they have building consensus, many Debaters will find they simply don’t have the support necessary to be successful. Playing devil’s advocate so well, people with this personality type may find that the most complex and rewarding intellectual challenge is to understand a more sentimental perspective, and to argue consideration and compromise alongside logic and progress.</p>

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

export default Debater
