import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Campaigner = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Campaigner</h1>
 
            <p>The Campaigner personality is a true free spirit. They are often the life of the party, but unlike types in the Explorer Role group, Campaigners are less interested in the sheer excitement and pleasure of the moment than they are in enjoying the social and emotional connections they make with others. Charming, independent, energetic and compassionate, the 7% of the population that they comprise can certainly be felt in any crowd.</p>
            <p>More than just sociable people-pleasers though, Campaigners, like all their Diplomat cousins, are shaped by their Intuitive (N) quality, allowing them to read between the lines with curiosity and energy. They tend to see life as a big, complex puzzle where everything is connected – but unlike Analyst personality types, who tend to see that puzzle as a series of systemic machinations, Campaigners see it through a prism of emotion, compassion and mysticism, and are always looking for a deeper meaning.</p>
            <p>Many other types are likely to find these qualities irresistible, and if they’ve found a cause that sparks their imagination, Campaigners will bring an energy that oftentimes thrusts them into the spotlight, held up by their peers as a leader and a guru – but this isn’t always where independence-loving Campaigners want to be. Worse still if they find themselves beset by the administrative tasks and routine maintenance that can accompany a leadership position. Campaigners’ self-esteem is dependent on their ability to come up with original solutions, and they need to know that they have the freedom to be innovative – they can quickly lose patience or become dejected if they get trapped in a boring role.</p>
            <p>Luckily, Campaigners know how to relax, and they are perfectly capable of switching from a passionate, driven idealist in the workplace to that imaginative and enthusiastic free spirit on the dance floor, often with a suddenness that can surprise even their closest friends. Being in the mix also gives them a chance to connect emotionally with others, giving them cherished insight into what motivates their friends and colleagues. They believe that everyone should take the time to recognize and express their feelings, and their empathy and sociability make that a natural conversation topic.</p>
            <p>The Campaigner personality type needs to be careful, however – if they rely too much on their intuition, assume or anticipate too much about a friend’s motivations, they can misread the signals and frustrate plans that a more straightforward approach would have made simple. This kind of social stress is the bugbear that keeps harmony-focused Diplomats awake at night. Campaigners are very emotional and sensitive, and when they step on someone’s toes, they both feel it.</p>
            <p>Campaigners will spend a lot of time exploring social relationships, feelings and ideas before they find something that really rings true. But when they finally do find their place in the world, their imagination, empathy and courage are likely to produce incredible results.</p>

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

export default Campaigner
