interface PropTypes {
  skill: string,
  progress: string
}

const SkillProgress = ({ skill, progress }: PropTypes) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium mb-2">{skill}</span>
        <span className="text-sm text-gray-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full mt-2">
        <div
          className={`w-[90%] bg-blue-500 text-xs leading-none py-1 rounded-full transition-all duration-1000`}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
