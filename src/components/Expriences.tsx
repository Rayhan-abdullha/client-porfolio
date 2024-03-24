import SkillProgress from './SkillsProgress'
import { skills, projectCompleted } from '../db/workExprience.json'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
function Expriences() {
    const { isDarkMode } = useTheme()
    return (
        <div className='px-5 sm:px-12 max-w-[900px] mx-auto py-[60px] md:py-[120px]'>
            <div className={`flex flex-col items-center md:flex-row md:items-start gap-5 py-10 px-14 bg-gradient-to-br ${isDarkMode ? 'from-[#0F1315] to-[#101010]' : 'from-[#E9F7FD] to-[#F5F8FA]'}`}>
                <img className='self-start w-[200px] sm:w-1/4' src={projectCompleted.logo} alt="notfound" />
                <div className='w-full md:text-start'>
                    <p className='my-color text-[18px] font-medium'>{projectCompleted.count}</p>
                    <h3 className={`my-7 font-bold text-3xl md:text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{projectCompleted.label}</h3>
                    <Link className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 sm:w-[180px] h-[50px] border border-gray-400 flex justify-center items-center font-semibold rounded-md text-lg transition-all-300`} to="/">View More Details</Link>
                </div>
            </div>

            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] mt-12 md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>My Working Experience</h2>
            <div className='flex flex-col gap-10'>
                {
                    skills.map(skill => (
                        <SkillProgress key={skill.id} title={skill.title} progress={skill.progress} color={skill.color} />
                    ))
                }
            </div>
        </div>
    )
}

export default Expriences