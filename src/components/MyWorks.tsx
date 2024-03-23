import { useTheme } from '../context/ThemeContext'
import { recentWork } from '../db/workExprience.json'
const MyWorks = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className='container mx-auto px-4'>
            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>{recentWork.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recentWork.list.map(item => (
                        <div key={item.id} className='bg-[#F5F8FA] rounded-lg p-7 flex flex-col'>
                            <h3 className='text-2xl font-medium mb-2'>{item.title}</h3>
                            <p className='my-5 text-[#616161]'>{item.subtitle}</p>
                            <div className='w-full'>
                                <img className="w-full" src={item.url} alt="notfound" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyWorks