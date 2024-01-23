import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import NetCore from '../../svg/NetCore';
import Tailwind from '../../svg/Tailwind';
import MUI from '../../svg/MUI';

export default function ScrollAnimC5() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPosition = 3000;

            setIsVisible(scrollY >= triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);
    

    return (
        <Element name='scrollAnimC5' className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
            <h6 className='text-6xl text-center font-bold text-white mb-20'>I Also Speak <span className='text-amber-500'>Foreign Language</span></h6>
            <div className="border-2 border-amber-500 py-20 mx-5">
                <div className="grid grid-cols-2">
                    <div className="col">
                        <h4 className='text-3xl text-start ms-20 mt-5'>My English</h4>
                        <h4 className='text-3xl text-start ms-20 mt-32'>Mein Deutsche</h4>
                    </div>
                    <div className="">
                        <h4 className='text-3xl text-start mt-5'>Speaking:</h4>
                        <h4 className='text-3xl text-start mt-5'>Writing:</h4>
                        <h4 className='text-3xl text-start mt-20'>Sprach:</h4>
                        <h4 className='text-3xl text-start mt-5'>Antworten:</h4>
                    </div>
                </div>
            </div>
        </Element>
    )
}