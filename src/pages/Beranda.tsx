import '../App.css'
import { useState } from 'react';
import moment from 'moment';
import Header from '../components/general/Header';
import Drawer from '../components/general/Drawer';
import { FaChevronRight } from "react-icons/fa";
import ScrollAnimC2 from '../components/animated/scroll/ScrollAnimC2';
import ScrollAnimC3 from '../components/animated/scroll/ScrollAnimC3';
import ScrollAnimC4 from '../components/animated/scroll/ScrollAnimC4';
import ScrollAnimC6 from '../components/animated/scroll/ScrollAnimC6';
import Footer from '../components/general/Footer';

export default function Beranda() {

  const jam = moment().format('HH')

  function time () {
    if (jam >= '03' && jam < '11') {
    return <p>Morgen!</p>
    } if (jam >= '11' && jam < '15')  {
      return <p>Tag!</p>
    } if (jam >= '15' && jam < '19') {
      return <p>Abend!</p>
    } else {
      return <p>Nacht!</p>
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="">

    {/* Container 1 */}
      <div className={`container1 ${isOpen ? 'open' : ''}`} id='c1'>
      <Header />
      <div className="grid grid-cols-2 mt-32 ms-52">
        <div className="">
          <h6 className='text-8xl text-start font-normal animate-slideUp text-[#E3CCB2]'>Guten</h6>
          <h6 className='text-9xl text-start font-semibold animate-slideUp text-[#E3CCB2]'>{time()}</h6>
          
          <div className="mt-10 border-amber-700 border-r-4 border-b-4 bg-amber-500 animate-fadeIn w-80 h-12">
            <p className='text-start mt-1 ms-6 text-2xl font-bold animate-slideinLeft' id='mergeText'>
              I am Dimas Aulia Putra
            </p>
            <p className='text-start mt-1 ms-6 text-2xl font-bold animate-slideinRight' id='mergeText'>
              I am Dimas Aulia Putra
            </p>
          </div>
        </div>
        <div className="animate-slideinRight pic1">
          {/* <img src={Me1} className="-z-50 overflow-hidden absolute top-[50px] bg-gradient-to-br from-[#242424] to-black" alt="" /> */}
        </div>
      </div>
      </div>


    {/* Container 2 */}
      <div className="container mt-32 mx-auto" id='c2'>
        <ScrollAnimC2 />
      </div>


    {/* Container 3 */}
      <div className="container mt-32 mx-auto" id='c3'>
        <ScrollAnimC3 />
      </div>


    {/* Container 4 */}
      <div className="container-flex mt-52 mb-40 mx-auto" id='c4'>
        <ScrollAnimC4 />
      </div>


    {/* Container 6 */}
      <div className="container-flex mt-52 mb-40 mx-auto" id='c6'>
        <ScrollAnimC6 />
      </div>


    {/* Footer */}
      <div className="container-flex mt-52 mb-40 mx-auto h-40" id='footer'>
        <Footer />
      </div>


      {/* Drawer */}
      <button onClick={toggleDrawer} className={`toggle-btn transition duration-500 hover:animate-pulse ${isOpen ? 'open opacity-20' : ''}`}>
        <FaChevronRight className="text-white" size={32} />
      </button>
      <Drawer oppen={isOpen} />
      {/* /Drawer */}

    </div>
    </>
  )
}
