import { FaMailBulk, FaPhone, FaHome } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="border-t-2 border-amber-500 py-20 mx-5">
            <div className="grid grid-cols-2">
                <div className="">
                    <h4 className="text-lg text-start ms-10 font-bold">My Greetings</h4>
                    <div className="border-t-2 w-32 ms-10 mb-5 mt-2 border-amber-500"></div>
                    <h4 className="text-md text-start ms-10">
                        I am Dimas Aulia Putra, nice to know you, 
                        <br />
                        if you like my portfolio, please let me know :)
                    </h4>
                </div>
                <div className="">
                    <h4 className="text-lg text-start ms-10 font-bold">Contact</h4>
                    <div className="border-t-2 w-32 ms-10 mb-5 mt-2 border-amber-500"></div>
                    <div className="flex ms-10">
                        <FaHome /> 
                        <h4 className="text-md text-start ms-10">
                            Cakung Barat, Jakarta Timur, Indonesia
                        </h4>
                    </div>
                    <div className="flex ms-10 mt-5">
                        <FaMailBulk /> 
                        <h4 className="text-md text-start ms-10">
                            nevariogamer12@gmail.com
                        </h4>
                    </div>
                    <div className="flex ms-10 mt-5">
                        <FaPhone />
                        <h4 className="text-md text-start ms-10">
                            +62 818-0343-4675
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}