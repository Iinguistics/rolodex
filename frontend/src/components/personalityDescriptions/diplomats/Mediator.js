import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';


const Mediator = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Mediator</h1>
 
            <p>On the outside, Mediators (INFPs) may seem quiet or even shy. But they often have vibrant, passionate inner lives. Because they make up such a small portion of the population, people with this personality type may sometimes feel misunderstood or out of step with the world. Fortunately, their caring nature can help them create and sustain deep relationships with their loved ones.</p>
            <p>Mediators value authenticity, empathy, and harmony. These personalities tend to act with the best of intentions, and they are rightly proud of this trait. That said, they may feel isolated or discouraged when other people don’t share their idealism.</p>
            <p>Many Mediators are curious about the depths of human nature, and they often make an effort to understand other people’s true feelings. This can make them capable of great empathy. It can also enable them to communicate in ways that are sensitive, original, and quite moving.</p>
            <p>Perhaps because of these strengths, Mediators tend to crave opportunities for creative self-expression. It comes as no surprise that many famous Mediators are poets, writers, and actors. People with this personality type often enjoy dreaming up all sorts of stories and possibilities.</p>
            <p>By using their imaginations in this way, Mediators can explore their inner nature and their place in the world. That said, they can have a tendency to daydream and fantasize rather than take action. If they don’t act on their dreams and ideas, Mediators are likely to end up feeling frustrated or unfulfilled.</p>
            <p>Mediators may feel directionless or stuck unless they connect with a sense of purpose for their lives. For many Mediators, this purpose has something to do with helping and uplifting others. Empathetic by nature, these personalities may feel other people’s suffering as if it were their own. This only strengthens their motivation to be of service.</p>
            <p>Although Mediators might want to help everyone, they may need to focus their attention and energy on one worthy cause at a time. Otherwise, they can become so overwhelmed by all the problems they can’t fix that they’re tempted to give up on even trying. This is a sad sight for Mediators’ friends, who often depend on their hopeful outlook.</p>
            <p>Fortunately, like flowers in the spring, Mediators’ creativity and idealism can bloom even after the darkest of seasons. Although they know the world will never be perfect, Mediators still care about making it better however they can. This quiet belief in doing the right thing may explain why these personalities so often inspire compassion, kindness, and beauty wherever they go.</p>

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

export default Mediator
