import { useState } from 'react'
import '../../App.css'
import Portlogo from '../../assets/portlogo.png'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
    const [overI, setOverI] = useState(false);
    const [overL, setOverL] = useState(false);

    return(
        <>
            <div className="grid grid-cols-2">
              <div className="">
                <img src={Portlogo} className="w-52 ms-20" alt="" />
              </div>
              <div className="">
                <div className="grid grid-cols-6">
                  <div className="grid col-span-4"></div>
                  <div className="">
                    <FaInstagram 
                        className='transition-opacity duration-500 z-50 animate-popping ms-auto me-9 opacity-100 hover:opacity-70' 
                        size={32}
                        onClick={() => window.open('https://www.instagram.com/yungxrisdt', '_blank')}
                        onMouseOver={() => setOverI(true)}
                        onMouseOut={() => setOverI(false)} 
                        color={overI ? '#A68259' : '#E3CCB2'}
                    />
                  </div>
                  <div className="">
                    <FaLinkedin 
                        className='transition-opacity duration-500 z-50 animate-popping me-9 opacity-100 hover:opacity-70' 
                        size={32}
                        onClick={() => window.open('https://www.linkedin.com/in/dimas-a-putra-a176ba194/', '_blank')}
                        onMouseOver={() => setOverL(true)}
                        onMouseOut={() => setOverL(false)} 
                        color={overL ? '#A68259' : '#E3CCB2'}
                    />
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}