
import { Link } from "react-router-dom"
import introInfo from "../db/introData.json"
const Intro = () => {
    return (
        <div className="bg-[url('https://rainbowit.net/html/doob/assets/images/bg/bg-image-22.jpg')] h-[auto] md:h-[90vh] bg-center bg-fixed">
            <div className="container mx-auto px-4 h-[100%] flex items-center py-8 md:py-0">
                <div className="md:w-1/2 md:py-8">
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">{introInfo.label}
                        <p className="text-[#E64197] pt-3">{introInfo.name}</p>
                    </h1>
                    <p className="text-gray-400 my-8 text-[16px]">{introInfo.text}</p>
                    <div className="flex gap-5 flex-col sm:flex-row w-2/3 md:w-full">
                        <Link className="sm:w-[180px] h-[50px] border border-gray-400 hover:border-[#FB5343] flex justify-center items-center font-semibold rounded-md text-white hover:bg-[#FB5343] transition-all-300" to="/">Click For Hire Me</Link>
                        <Link className="h-[50px] sm:w-[180px] flex justify-center items-center rounded-md bg-[#FB5343] font-semibold hover:bg-[#d55145] text-white" to="/">About Me</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro