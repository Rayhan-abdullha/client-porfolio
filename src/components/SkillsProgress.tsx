import { useTheme } from "../context/ThemeContext";

interface PropTypes {
  title: string,
  progress: string,
  color: string
}

const SkillProgress = ({ title, progress, color }: PropTypes) => {
  const { isDarkMode } = useTheme()
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} font-medium mb-2`}>{title}</span>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
      <div className="bg-gray-200 rounded-full mt-2">
        <div
          data-aos="zoom-in-right"
          style={{ backgroundColor: `${color}`, width: `${progress}%` }}
          className={`text-xs leading-none py-[3px] rounded-full transition-all duration-1000`}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
