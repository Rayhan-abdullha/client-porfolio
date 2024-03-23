import SkillProgress from './SkillsProgress'
import { skills, projectCompleted } from '../db/workExprience.json'
import { Link } from 'react-router-dom'
function Expriences() {
    return (
        <div className='px-4 max-w-[800px] mx-auto pt-[120px] pb-5 md:pb-[60px] '>
            <h2 className="text-center md:text-start text-3xl font-medium border-b border-gray-20 pb-5 mb-12">My Working Experience.</h2>
            <div className='flex flex-col items-center md:flex-row md:items-start gap-5 bg-[#F5F8FA] p-10'>
                <img className='w-1/3' src={projectCompleted.logo} alt="notfound" />
                <div className='w-full md:text-start'>
                    <p className='my-color text-[18px] font-medium'>{projectCompleted.count}</p>
                    <h3 className='my-7 font-bold text-4xl'>{projectCompleted.label}</h3>
                    <Link className="hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 sm:w-[180px] h-[50px] border border-gray-400 flex justify-center items-center font-semibold rounded-md text-lg transition-all-300" to="/">View More Details</Link>

                </div>
            </div>

            <div className='my-[60px]'>
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