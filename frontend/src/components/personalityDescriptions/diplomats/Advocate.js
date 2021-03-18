import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Advocate = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Advocate</h1>
 
            <p>Advocates are the rarest personality types of all. Still, Advocates leave their mark on the world. They have a deep sense of idealism and integrity, but they aren’t idle dreamers – they take concrete steps to realize their goals and make a lasting impact.</p>
            <p>Advocates’ unique combination of personality traits makes them complex and quite versatile. For example, Advocates can speak with great passion and conviction, especially when standing up for their ideals. At other times, however, they may choose to be soft-spoken and understated, preferring to keep the peace rather than challenge others.</p>
            <p>Advocates generally strive to do what’s right – and they want to help create a world where others do the right thing as well. People with this personality type may feel called to use their strengths – including creativity, imagination, and sensitivity – to uplift others and spread compassion. Concepts like egalitarianism and karma can mean a great deal to Advocates.</p>
            <p>Advocates may see helping others as their purpose in life. They are troubled by injustice, and they typically care more about altruism than personal gain. As a result, Advocates tend to step in when they see someone facing unfairness or hardship. Many people with this personality type also aspire to fix society’s deeper problems, in the hope that unfairness and hardship can become things of the past.</p>
            <p>Advocates may be reserved, but they communicate in a way that is warm and sensitive. This emotional honesty and insight can make a powerful impression on the people around them.</p>
            <p>Advocates value deep, authentic relationships with others, and they tend to take great care with other people’s feelings. That said, these personalities also need to prioritize reconnecting with themselves. Advocates need to take some time alone now and then to decompress, recharge, and process their thoughts and feelings.</p>
            <p>At times, Advocates may focus so intently on their ideals that they don’t take care of themselves. Advocates may feel that they aren’t allowed to rest until they’ve achieved their unique vision of success, but this mindset can lead to stress and burnout. If this happens, people with this personality type may find themselves feeling uncharacteristically ill-tempered.</p>
            <p>Advocates might find themselves feeling especially stressed in the face of conflict and criticism. These personalities tend to act with the best of intentions, and it can frustrate them when others don’t appreciate this. At times, even constructive criticism may feel deeply personal or hurtful to Advocates.</p>
            <p>Many Advocates feel compelled to find a mission for their lives. When they encounter inequity or unfairness, they tend to think, “How can I fix this?” They are well-suited to support a movement to right a wrong, no matter how big or small. Advocates just need to remember that while they’re busy taking care of the world, they need to take care of themselves too.</p>

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

export default Advocate
