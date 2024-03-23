import { useTheme } from "../context/ThemeContext"
import timeline from '../db/timeline.json'
const TimelineSection = () => {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${isDarkMode ? 'bg-[#0F0F11]' : 'bg-[#F5F8FA]'} rounded-md p-10 container mx-auto px-5 grid grid-rows-1 md:grid-cols-4 gap-8 md:gap-0`}>
      {
        timeline.map(item => (
          <div className="flex flex-col text-center" key={item.id}>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-black'} text-[22px] font-medium`}>{item.title}</h3>
            <div className="my-5 flex justify-center items-center self-center doted w-6 h-6 bg-[#d8d8d8] rounded-full">
              <div className="innerDot w-3 h-3 bg-[#059dff] rounded-full"></div>
            </div>
            <p className="text-[#65676b] text-[17px] px-10">{item.des}</p>
          </div>
        ))
      }
    </div>
  );
};

export default TimelineSection;
