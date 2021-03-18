import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Architect = () => {
    return (
       <Fragment>
           <h1 className="mb-3">Architect</h1>

           <p>It can be lonely at the top. As one of the rarest personality types – and one of the most capable – Architects (INTJs) know this all too well. Rational and quick-witted, Architects may struggle to find people who can keep up with their nonstop analysis of everything around them.</p>
           <p>Architects derive much of their self-esteem from their knowledge and mental acuity. In school, people with this personality type may have been called “bookworms” or “nerds.” But rather than taking these labels as insults, many Architects embrace them. They are confident in their ability to teach themselves about – and master – any topic that interests them, whether that’s coding or capoeira or classical music.</p>
           <p>Architects can be single-minded, with little patience for frivolity, distractions, or idle gossip. That said, it would be a mistake to stereotype these personalities as dull or humorless. Many Architects are known for their irreverent wit, and beneath their serious exteriors, they often have a sharp, delightfully sarcastic sense of humor.</p>
           <p>Architects question everything. Many personality types trust the status quo, relying on conventional wisdom and other people’s expertise as they go about their lives. But ever-skeptical Architects prefer to make their own discoveries. In their quest to find better ways of doing things, they aren’t afraid to break the rules or risk disapproval – in fact, they rather enjoy it.</p>
           <p>But as anyone with this personality type would tell you, a new idea isn’t worth anything unless it actually works. Architects want to be successful, not just inventive. They bring a single-minded drive to their passion projects, applying the full force of their insight, logic, and willpower. And heaven help anyone who tries to slow them down by enforcing pointless rules or offering poorly thought-out criticism.</p>
           <p>This personality type comes with a strong independent streak. Architects don’t mind acting alone, perhaps because they don’t like waiting around for others to catch up with them. They also generally feel comfortable making decisions without asking for anyone else’s input. At times, this lone-wolf behavior can come across as insensitive, as it fails to take into consideration other people’s thoughts, desires, and plans.</p>
           <p>Architects aren’t known for being warm and fuzzy. They tend to prioritize rationality and success over politeness and pleasantries – in other words, they’d rather be right than popular. This may explain why so many fictional villains are modeled on this personality type.</p>
           <p>Because Architects value truth and depth, many common social practices – from small talk to white lies – may seem pointless or downright stupid to them. As a result, they may inadvertently come across as rude or even offensive when they’re only trying to be honest. At times, Architects may wonder if dealing with other people is even worth the frustration.</p>
           <p>But like any personality type, Architects do crave social interaction – they’d just prefer to surround themselves with people who share their values and priorities. Often, they can achieve this just by being themselves. When Architects pursue their interests, their natural confidence can draw people to them – professionally, socially, and even romantically.</p>
           <p>This personality type is full of contradictions. Architects are imaginative yet decisive, ambitious yet private, and curious yet focused. From the outside, these contradictions may seem baffling, but they make perfect sense once you understand the inner workings of the Architect mind.</p>
           <p>For Architects, life is like a giant game of chess. Relying on strategy rather than chance, they contemplate the strengths and weaknesses of each move before they make it. And they never lose faith that, with enough ingenuity and insight, they can find a way to win – no matter what challenges might arise along the way.</p>

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

export default Architect
