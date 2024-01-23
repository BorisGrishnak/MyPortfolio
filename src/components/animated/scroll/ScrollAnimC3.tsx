import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import  xbi1 from '../../../assets/myproj/xbi/xbi1.png';
import  xbi2 from '../../../assets/myproj/xbi/xbi2.png';
import  xbi3 from '../../../assets/myproj/xbi/xbi3.png';
import  xbi4 from '../../../assets/myproj/xbi/xbi4.png';
import  xbid1 from '../../../assets/myproj/xbi/xbid1.png';
import  xbid2 from '../../../assets/myproj/xbi/xbid2.png';
import  xbid3 from '../../../assets/myproj/xbi/xbid3.png';
import  ccvisit1 from '../../../assets/myproj/ccvisit/ccvisit1.png';
import  ccvisit2 from '../../../assets/myproj/ccvisit/ccvisit2.png';
import  ccvisit3 from '../../../assets/myproj/ccvisit/ccvisit3.png';
import  ccvisit4 from '../../../assets/myproj/ccvisit/ccvisit4.png';
import  ccvisit5 from '../../../assets/myproj/ccvisit/ccvisit5.png';
import  ccvisit6 from '../../../assets/myproj/ccvisit/ccvisit6.png';
import  ccvisit7 from '../../../assets/myproj/ccvisit/ccvisit7.png';
import CarouselC3 from '../../carousel/CarouselC3';
import StepperC3 from '../../stepper/StepperC3';

const ScrollAnimC3: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const [konten, setKonten] = useState(1);

    const xbi = [xbi1, xbi2, xbi3, xbi4, xbid1, xbid2, xbid3];
    const totalStepsXbi = xbi.length;

    const ccvisit = [ccvisit1, ccvisit2, ccvisit3, ccvisit4, ccvisit5, ccvisit6, ccvisit7];
    const totalStepsCcv = ccvisit.length;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPosition = 900;

            setIsVisible(scrollY >= triggerPosition);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);
    
    function handleClick1 () {
      setKonten(1);
    }
    function handleClick2 () {
      setKonten(2);
    }

    const handleSlideChange = (index: number) => {
      setCurrentStep(index);
    }

    function kontenView() {
      switch (konten) {
        case 1:
          return (
            <div className="">
              <h6 className='text-6xl text-center font-bold mb-20 text-amber-500'><span className='text-white'>Look at My </span>Cuisine Plate</h6>
              <h5 className='text-2xl text-center font-bold mb-10 text-white'>XSR Brotherhood Indonesia WebApp (OnGoing)</h5>
              <CarouselC3 images={xbi} isVisible={isVisible} onValueChange={handleSlideChange} />
              <div className="">
                <button className={`bg-amber-600 rounded-full h-10 w-12 relative bottom-[400px] left-[90vh] ${isVisible ? 'animate-slideinB1' : ''}`} onClick={handleClick1}>
                  <span className='text-sm'>1</span>
                </button>
              </div>
              <div className="">
                <button className={`bg-amber-600 rounded-full h-10 w-12 mt-3 relative bottom-[400px] left-[90vh] ${isVisible ? 'animate-slideinB2' : ''}`} onClick={handleClick2}>
                  <span className='text-sm'>2</span>
                </button>
              </div>
              <StepperC3 currentStep={currentStep} totalSteps={totalStepsXbi} />
            </div>
          );
          break;
        case 2:
          return (
            <div className="">
              <h6 className='text-6xl text-center font-bold mb-20 text-amber-500'><span className='text-white'>Look at My </span>Cuisine Plate</h6>
              <h5 className='text-2xl text-center font-bold mb-10 text-white'>Command Center Visit WebApp</h5>
              <CarouselC3 images={ccvisit} isVisible={isVisible} onValueChange={handleSlideChange} />
              <div className="">
                <button className={`bg-amber-600 rounded-full h-10 w-12 relative bottom-[400px] left-[90vh] ${isVisible ? 'animate-slideinB1' : ''}`} onClick={handleClick1}>
                  <span className='text-sm'>1</span>
                </button>
              </div>
              <div className="">
                <button className={`bg-amber-600 rounded-full h-10 w-12 mt-3 relative bottom-[400px] left-[90vh] ${isVisible ? 'animate-slideinB2' : ''}`} onClick={handleClick2}>
                  <span className='text-sm'>2</span>
                </button>
              </div>
              <StepperC3 currentStep={currentStep} totalSteps={totalStepsCcv} />
            </div>
          );
          break;
          
        default:
          break;
      }
    }

    return (
        <Element name='scrollAnimC3' className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
          {kontenView()}
        </Element>
    )
}

export default ScrollAnimC3;