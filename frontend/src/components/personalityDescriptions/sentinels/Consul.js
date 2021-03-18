import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Consul = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Consul</h1>
 
            <p>People who share the Consul personality type are, for lack of a better word, popular – which makes sense, given that it is also a very common personality type, making up twelve percent of the population. In high school, Consuls are the cheerleaders and the quarterbacks, setting the tone, taking the spotlight and leading their teams forward to victory and fame. Later in life, Consuls continue to enjoy supporting their friends and loved ones, organizing social gatherings and doing their best to make sure everyone is happy.</p>
            <p>Discussing scientific theories or debating European politics isn’t likely to capture Consuls’ interest for too long. Consuls are more concerned with fashion and their appearance, their social status and the standings of other people. Practical matters and gossip are their bread and butter, but Consuls do their best to use their powers for good.</p>
            <p>Consuls are altruists, and they take seriously their responsibility to help and to do the right thing. Unlike their Diplomat relatives however, people with the Consul personality type will base their moral compass on established traditions and laws, upholding authority and rules, rather than drawing their morality from philosophy or mysticism. It’s important for Consuls to remember though, that people come from many backgrounds and perspectives, and what may seem right to them isn’t always an absolute truth.</p>
            <p>Consuls love to be of service, enjoying any role that allows them to participate in a meaningful way, so long as they know that they are valued and appreciated. This is especially apparent at home, and Consuls make loyal and devoted partners and parents. Consul personalities respect hierarchy, and do their best to position themselves with some authority, at home and at work, which allows them to keep things clear, stable and organized for everyone.</p>
            <p>Supportive and outgoing, Consuls can always be spotted at a party – they’re the ones finding time to chat and laugh with everyone! But their devotion goes further than just breezing through because they have to. Consuls truly enjoy hearing about their friends’ relationships and activities, remembering little details and always standing ready to talk things out with warmth and sensitivity. If things aren’t going right, or there’s tension in the room, Consuls pick up on it and to try to restore harmony and stability to the group.</p>
            <p>Being pretty conflict-averse, Consuls spend a lot of their energy establishing social order, and prefer plans and organized events to open-ended activities or spontaneous get-togethers. People with this personality type put a lot of effort into the activities they’ve arranged, and it’s easy for Consuls’ feelings to be hurt if their ideas are rejected, or if people just aren’t interested. Again, it’s important for Consuls to remember that everyone is coming from a different place, and that disinterest isn’t a comment about them or the activity they’ve organized – it’s just not their thing.</p>
            <p>Coming to terms with their sensitivity is Consuls’ biggest challenge – people are going to disagree and they’re going to criticize, and while it hurts, it’s just a part of life. The best thing for Consuls to do is to do what they do best: be a role model, take care of what they have the power to take care of, and enjoy that so many people do appreciate the efforts they make.</p>

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

export default Consul
