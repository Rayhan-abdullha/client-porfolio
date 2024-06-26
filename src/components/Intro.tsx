import { Link } from "react-router-dom"
import introInfo from "../db/introData.json"
import { useEffect } from "react";
import AOS from 'aos'
const Intro = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="bg-[url('https://rainbowit.net/html/doob/assets/images/bg/bg-image-22.jpg')] h-auto sm:h-[80vh] bg-center bg-fixed">
            <div className="container mx-auto px-5 sm:px-12 h-[100%] flex items-center py-8 md:py-0">
                <div className="xl:w-1/2 py-[100px] sm:py-8">
                    <h1 data-aos="fade-right" className="text-white text-5xl md:text-[83px] font-bold">{introInfo.label}
                        <p className="my-color pt-3">{introInfo.name}</p>
                    </h1>
                    <p className="text-[#acacac] my-8 text-[20px] w-full sm:w-1/2 xl:w-full">{introInfo.text}</p>
                    <div className="flex gap-5 flex-col sm:flex-row w-2/3 md:w-full">
                        <Link className="hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 sm:w-[180px] h-[50px] border border-gray-400 flex justify-center items-center font-semibold rounded-md text-white transition duration-300 ease-in-out" to="/">Click For Hire Me</Link>
                        <Link className="my-btn-bg h-[50px] sm:w-[180px] flex justify-center items-center rounded-md font-semibold text-white" to="/">About Me
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 w-[18px] font-bold feather feather-arrow-right text-[14px]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
