import { useTheme } from "../context/ThemeContext"
import timeline from '../db/timeline.json'
const TimelineSection = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className={`container overflow-hidden sm:mx-auto px-5 sm:px-12 rounded-md p-10 ${isDarkMode ? 'bg-[#0F0F11]' : 'bg-[#F5F8FA]'}`}>
            <ol className="items-center grid gap-5 md:grid-cols-4">
                {
                    timeline.map((item, index: number) => (
                        <li className="relative mb-6 sm:mb-0 text-center" key={item.id}>
                            <h3 data-aos="flip-up" className={`${isDarkMode ? 'text-white' : 'text-black'} text-[20px] font-medium`}>{item.title}</h3>
                            <div className="flex items-center justify-center">
                                <div className={`my-5 flex justify-center items-center self-center doted w-7 h-7 ${isDarkMode ? 'bg-[#1E1E1E]' : 'bg-[#d8d8d8]'} rounded-full`}>
                                    <div className={`${index !== 3 && 'timeline-dot'} md:before:absolute ${isDarkMode ? 'before:bg-[#1e1e1e]' : 'before:bg-[#d8d8d8]'} w-3 h-3 bg-[#059dff] rounded-full`}></div>
                                </div>
                            </div>
                            <p data-aos="flip-up" className={`text-[17px] ${!isDarkMode ? 'text-[#65676b]' : 'text-gray-400'} px-10`}>{item.des}</p>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
};

export default TimelineSection;


