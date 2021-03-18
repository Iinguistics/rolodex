import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Logician = () => {

    return (
        <Fragment>
            <h1 className="mb-3">Logician</h1>
 
            <p>The Logician personality type is fairly rare, making up only three percent of the population, which is definitely a good thing for them, as there’s nothing they’d be more unhappy about than being “common”. Logicians pride themselves on their inventiveness and creativity, their unique perspective and vigorous intellect. Usually known as the philosopher, the architect, or the dreamy professor, Logicians have been responsible for many scientific discoveries throughout history.</p>
            <p>They love patterns, and spotting discrepancies between statements could almost be described as a hobby, making it a bad idea to lie to a Logician. This makes it ironic that Logicians’ word should always be taken with a grain of salt – it’s not that they are dishonest, but people with the Logician personality type tend to share thoughts that are not fully developed, using others as a sounding board for ideas and theories in a debate against themselves rather than as actual conversation partners.</p>
            <p>This may make them appear unreliable, but in reality no one is more enthusiastic and capable of spotting a problem, drilling through the endless factors and details that encompass the issue and developing a unique and viable solution than Logicians – just don’t expect punctual progress reports. People who share the Logician personality type aren’t interested in practical, day-to-day activities and maintenance, but when they find an environment where their creative genius and potential can be expressed, there is no limit to the time and energy Logicians will expend in developing an insightful and unbiased solution.</p>
            <p>They may appear to drift about in an unending daydream, but Logicians’ thought process is unceasing, and their minds buzz with ideas from the moment they wake up. This constant thinking can have the effect of making them look pensive and detached, as they are often conducting full-fledged debates in their own heads, but really Logicians are quite relaxed and friendly when they are with people they know, or who share their interests. However, this can be replaced by overwhelming shyness when Logician personalities are among unfamiliar faces, and friendly banter can quickly become combative if they believe their logical conclusions or theories are being criticized.</p>
            <p>When Logicians are particularly excited, the conversation can border on incoherence as they try to explain the daisy-chain of logical conclusions that led to the formation of their latest idea. Oftentimes, Logicians will opt to simply move on from a topic before it’s ever understood what they were trying to say, rather than try to lay things out in plain terms.</p>
            <p>The reverse can also be true when people explain their thought processes to Logicians in terms of subjectivity and feeling. Imagine an immensely complicated clockwork, taking in every fact and idea possible, processing them with a heavy dose of creative reasoning and returning the most logically sound results available – this is how the Logician mind works, and this type has little tolerance for an emotional monkey-wrench jamming their machines.</p>
            <p>Further, Logicians are unlikely to understand emotional complaints at all, and their friends won’t find a bedrock of emotional support in them. People with the Logician personality type would much rather make a series of logical suggestions for how to resolve the underlying issue, a perspective that is not always welcomed by their more sensitive companions. This will likely extend to most social conventions and goals as well, like planning dinners and getting married, as Logicians are far more concerned with originality and efficient results.</p>
            <p>The one thing that really holds Logicians back is their restless and pervasive fear of failure. Logician personalities are so prone to reassessing their own thoughts and theories, worrying that they’ve missed some critical piece of the puzzle, that they can stagnate, lost in an intangible world where their thoughts are never truly applied. Overcoming this self-doubt stands as the greatest challenge Logicians are likely to face, but the intellectual gifts – big and small – bestowed on the world when they do makes it worth the fight.</p>

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

export default Logician
