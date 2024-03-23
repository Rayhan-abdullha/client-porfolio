import SkillProgress from './SkillsProgress'
import { skills, projectCompleted } from '../db/workExprience.json'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
function Expriences() {
    const { isDarkMode } = useTheme()
    return (
        <div className='px-4 max-w-[800px] mx-auto pt-[120px] pb-5 md:pb-[60px] '>
            <div className={`flex flex-col items-center md:flex-row md:items-start gap-5 p-10 bg-gradient-to-br ${isDarkMode ? 'to-[#882b2b36] from-[#24c1d740]' : 'from-[#cfefff] to-[#fff5f5]'}`}>
                <img className='self-start w-1/3' src={projectCompleted.logo} alt="notfound" />
                <div className='w-full md:text-start'>
                    <p className='my-color text-[18px] font-medium'>{projectCompleted.count}</p>
                    <h3 className={`my-7 font-bold text-3xl md:text-4xl ${isDarkMode ? 'text-white' : 'text-black'}`}>{projectCompleted.label}</h3>
                    <Link className={`${isDarkMode ? 'text-white' : 'text-black'} hover:text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 sm:w-[180px] h-[50px] border border-gray-400 flex justify-center items-center font-semibold rounded-md text-lg transition-all-300`} to="/">View More Details</Link>
                </div>
            </div>

            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] mt-12 md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>My Working Experience</h2>
            <div className='mb-[60px]'>
                {
                    skills.map(skill => (
                        <SkillProgress key={skill.id} skill={skill.title} progress={skill.progress} />
                    ))
                }
            </div>
        </div>
    )
}

export default Expriences