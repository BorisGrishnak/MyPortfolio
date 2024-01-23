import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

export default function ScrollAnimC2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 100;

      setIsVisible(scrollY >= triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //     window.removeEventListener('scroll', handleScroll);
    // };
  }, []);


  return (
    <Element name='scrollAnimC2' className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
      <h6 className='text-6xl text-center font-bold text-amber-500'>Who is This <span className='text-white'>Kind of Man</span>?</h6>
      <div className="grid grid-cols-2 mt-20">
        <div className="">
          <div className={`w-[40vh] h-[70vh] left-[45vh] z-10 ${isVisible ? 'animate-slideinFadeLeft' : ''}`} 
            style={{ position: 'absolute' }} id="pic2"></div>
          <div className={`h-[70vh] w-[30vh] left-[35vh] bg-gradient-to-r from-[#cdcdcd] via-[#cdcdcd] to-black ${isVisible ? 'animate-slideinFadeRight' : ''}`} 
            style={{ position: 'absolute' }} id="bgpic2"></div>
        </div>
        <div className="">
          <p className='w-[85vh] text-start mx-auto mt-24 text-xl text-[#b6bec4]'>
            Greetings! My name is Kratos Mulligan, im a fullstack web developer mastering in React JS/TS for Front-End,
            Microsoft .Net Core API & Node JS with Prisma ORM for Back-End.
            <br />
            <br />
            Im in a passion of programming, i'd love to experience new things,
            and im interested in experiment of making programs, because that's
            risen my curiosity.
            <br />
            <br />
            I had the Hardworking ethics, i also do the Smart and Safe working ethics.
            I always remind myself about how far is my progress and
            what to do next in every morning, that i should never give up in any circumstances.
          </p>
        </div>
      </div>
    </Element>
  )
}