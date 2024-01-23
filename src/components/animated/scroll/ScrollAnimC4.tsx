import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import NetCore from '../../svg/NetCore';
import Tailwind from '../../svg/Tailwind';
import MUI from '../../svg/MUI';

export default function ScrollAnimC4() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPosition = 2000;

            setIsVisible(scrollY >= triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);
    

    return (
        <Element name='scrollAnimC2' className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
            <h6 className='text-6xl text-center font-bold text-amber-500 mb-20'>My <span className='text-white'>Armament</span></h6>
            <div className="border-2 border-amber-500 py-20 mx-5">
            <div className="grid grid-cols-3">
                <div className="mx-auto hover:animate-pulse" id='reactLogo'>
                    <FaReact color="cyan" size={120} />
                    <h4 className='text-2xl mt-5'>React JS/TS</h4>
                </div>
                <div className="mx-auto hover:animate-pulse" id='nodeLogo'>
                    <FaNodeJs color="#509941" size={120} />
                    <h4 className='text-2xl mt-5'>Node JS</h4>
                </div>
                <div className="mx-auto hover:animate-pulse">
                    <NetCore width={120} height={120} fillColor='purple' />
                    <h4 className='text-2xl mt-5 me-1'>.Net Web API</h4>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-44">
                <div className="mx-auto hover:animate-pulse" id='reactLogo'>
                    <MUI height={120} width={120} />
                    <h4 className='text-2xl mt-5'>Material UI</h4>
                </div>
                <div className="mx-auto hover:animate-pulse">
                    <Tailwind width={120} height={120} fillColor='#3EBFF8' />
                    <h4 className='text-2xl mt-5 me-1'>Tailwind CSS</h4>
                </div>
            </div>
            </div>
        </Element>
    )
}