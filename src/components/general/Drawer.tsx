import '../../Drawer.css'
import { FaHome, FaUser, FaScroll, FaMagic, FaUsers } from 'react-icons/fa';
import SmoothScroll from '../animated/scroll/SmoothScroll'; 

export default function Drawer(oppen: any) {

    return (
      <div className={`drawer ${oppen.oppen ? 'open' : ''}`}>
        
        {/* Drawer content goes here */}
        <div className="drawer-content">
            <div className="mt-24">
                <SmoothScroll to="c1">
                  <button className={`bg-[#00FFFF] hover:opacity-60 hover:border-amber-500 rounded-full h-16 ${ oppen.oppen ? 'animate-slideinc1' : ''}`}>
                    <FaHome color={'#FFFFFF'} size={24} />
                  </button>
                </SmoothScroll>
                <SmoothScroll to="c2">
                  <button className={`bg-[#509941] hover:opacity-60 hover:border-amber-500 rounded-full mt-16 h-16 ${ oppen.oppen ? 'animate-slideinc2' : ''}`}>
                    <FaUser color={'#FFFFFF'} size={24} />
                  </button>
                </SmoothScroll>
                <SmoothScroll to="c3">
                  <button className={`bg-[#623697] hover:opacity-60 hover:border-amber-500 rounded-full mt-16 h-16 ${ oppen.oppen ? 'animate-slideinc3' : ''}`}>
                    <FaScroll color={'#FFFFFF'} size={24} />
                  </button>
                </SmoothScroll>
                <SmoothScroll to="c4">
                  <button className={`bg-[#00B0FF] hover:opacity-60 hover:border-amber-500 rounded-full mt-16 h-16 ${ oppen.oppen ? 'animate-slideinc4' : ''}`}>
                    <FaMagic color={'#FFFFFF'} size={24} />
                  </button>
                </SmoothScroll>
                <SmoothScroll to="c6">
                  <button className={`bg-[#00B0FF] hover:opacity-60 hover:border-amber-500 rounded-full mt-16 h-16 ${ oppen.oppen ? 'animate-slideinc4' : ''}`}>
                    <FaUsers color={'#FFFFFF'} size={24} />
                  </button>
                </SmoothScroll>
            </div>
        </div>
      </div>
    );
}