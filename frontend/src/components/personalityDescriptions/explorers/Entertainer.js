import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { CgArrowUpR } from 'react-icons/cg';

const Entertainer = () => {
    return (
        <Fragment>
            <h1 className="mb-3">Entertainer</h1>
 
            <p>If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer personality type. Entertainers get caught up in the excitement of the moment, and want everyone else to feel that way, too. No other personality type is as generous with their time and energy as Entertainers when it comes to encouraging others, and no other personality type does it with such irresistible style.</p>
            <p>Entertainers love the spotlight, and all the world’s a stage. Many famous people with the Entertainer personality type are indeed actors, but they love putting on a show for their friends too, chatting with a unique and earthy wit, soaking up attention and making every outing feel a bit like a party. Utterly social, Entertainers enjoy the simplest things, and there’s no greater joy for them than just having fun with a good group of friends.</p>
            <p>It’s not just talk either – Entertainers have the strongest aesthetic sense of any personality type. From grooming and outfits to a well-appointed home, Entertainer personalities have an eye for fashion. Knowing what’s attractive the moment they see it, Entertainers aren’t afraid to change their surroundings to reflect their personal style. Entertainers are naturally curious, exploring new designs and styles with ease.</p>
            <p>Though it may not always seem like it, Entertainers know that it’s not all about them – they are observant, and very sensitive to others’ emotions. People with this personality type are often the first to help someone talk out a challenging problem, happily providing emotional support and practical advice. However, if the problem is about them, Entertainers are more likely to avoid a conflict altogether than to address it head-on. Entertainers usually love a little drama and passion, but not so much when they are the focus of the criticisms it can bring.</p>
            <p>The biggest challenge Entertainers face is that they are often so focused on immediate pleasures that they neglect the duties and responsibilities that make those luxuries possible. Complex analysis, repetitive tasks, and matching statistics to real consequences are not easy activities for Entertainers. They’d rather rely on luck or opportunity, or simply ask for help from their extensive circle of friends. It is important for Entertainers to challenge themselves to keep track of long-term things like their retirement plans or sugar intake – there won’t always be someone else around who can help to keep an eye on these things.</p>
            <p>Entertainers recognize value and quality, which on its own is a fine trait. In combination with their tendency to be poor planners though, this can cause them to live beyond their means, and credit cards are especially dangerous. More focused on leaping at opportunities than in planning out long-term goals, Entertainers may find that their inattentiveness has made some activities unaffordable.</p>
            <p>Entertainers are welcome wherever there’s a need for laughter, playfulness, and a volunteer to try something new and fun – and there’s no greater joy for Entertainer personalities than to bring everyone else along for the ride. Entertainers can chat for hours, sometimes about anything but the topic they meant to talk about, and share their loved ones’ emotions through good times and bad. If they can just remember to keep their ducks in a row, they’ll always be ready to dive into all the new and exciting things the world has to offer, friends in tow.</p>

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

export default Entertainer
