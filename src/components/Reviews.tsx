import { useTheme } from '../context/ThemeContext'
import reviews from '../db/reviews.json'
const Reviews = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className='container mx-auto px-4'>
            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>My Clients Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    reviews.map(item => (
                        <div key={item.id} className={`${isDarkMode ? 'bg-[#1B1B1B]' : 'bg-[#F5F8FA]'} rounded-lg p-10 flex flex-col text-center items-center flex-col' key={item.id`}>
                            <div className='w-[200px]'>
                                <img className='w-full rounded-full border-[5px] border-[#FF6172]' src={item.url} alt="notfound" />
                            </div>
                            <p className={`px-5 my-5 ${!isDarkMode ? "text-[#616161]" : 'text-gray-400'} `}>{item.text}</p>
                            <h3 className={`text-2xl font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{item.name}</h3>
                            <h4 className='my-color font-medium'>{item.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews