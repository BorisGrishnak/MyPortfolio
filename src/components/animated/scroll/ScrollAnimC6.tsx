import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import VideoPlayer from '../../videoPlayer/VideoPlayer';
import Vid from '../../../assets/vid/utschool.mp4';

export default function ScrollAnimC6() {
    const [isVisible, setIsVisible] = useState(false);
    const videoSource = Vid;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPosition = 4000;

            setIsVisible(scrollY >= triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);
    

    return (
        <Element name='scrollAnimC6' className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
            <h6 className='text-6xl text-center font-bold text-white mb-20'>My Tale in <span className='text-amber-500'>UT School</span></h6>
            <div className="border-2 border-amber-500 py-20 mx-5">
                <div className="flex justify-center items-center min-h-screen">
                    <VideoPlayer src={videoSource} />
                </div>
                <div className="mt-20 ms-20 me-10">
                    <h4 className='text-2xl text-start'>
                        I was a student of UT School. Started since In-Class program from June 2023 until August 2023, and On Job Training 
                        at United Tractors Head Office precisely in Differentation and Digitalization Division from September 2023 until January 2024.
                        We're mastering in IT Programmer class, with the instructor Mr. Aditya Ramadhana. On total, there are 20 students listed.
                        We're divided at the On Job Training Program, most of us were placed at DAD Division, and the rest was placed on Kamaju, 
                        Mitra Bakti UT, Global Service Indonesia, Yayasan Karya Bakti UT, and DPP Cikarang.
                        <br />
                        <br />
                        It's like a dream i was in there, a hope from the past, my main plan. Im so glad when i received the acceptment info for
                        the 4th batch. When the On Job Training program, i've been ordered as Fullstack Web Developer with portion
                        60% of Front-End and 40% of Back-End in Command Center workstream
                        with my partners Luthfi and Fadly. We made two WebApp:
                        <br />
                        <br />
                        1. Visit Command Center
                        <br />
                        <span className='text-2xl text-start ms-10'>
                            This is our first project, a dynamic application to list and register the data that concerned on lending space of rooms for meeting.
                            This App is based on one PIC that registered his team for the event and managing of when the request was made.
                            I worked as fullstack with both React JS ( Front-End ) and .NET ( Back-End ) as my main programming language. 
                            I made some feature on Back-End and most of the feature on Front-End.
                            This app also have two side: User Side for requesting room, and Admin Side for managing the request and monitoring.
                        </span>
                        <br />
                        <br />
                        2. Open House 2023
                        <br />
                        <span className='text-2xl text-start ms-10'>
                            This project is presented for United Tractors 51st Birthday event to make a digitalization innovation for the event.
                            We're using the commuter line QR Code scan concept. This project was given in the middle of the working on the first project
                            with a week deadline. And thankfully, we did it and the app is worked properly.
                        </span>
                    </h4>
                </div>
            </div>
        </Element>
    )
}