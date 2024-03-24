import { useTheme } from '../context/ThemeContext'
import priceData from '../db/pricing.json'
const Price = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className="container mx-auto px-5 sm:px-12">
            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>My Pricing Plan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center h-auto lg:h-[700px]">
                {
                    priceData.map((item, index: number) => (
                        <div className={`border-[2px] ${isDarkMode ? 'border-[#51515182]' : 'border-gray-200'} px-5 py-10 ${index === 1 ? isDarkMode ? "bg-[#1E1E1E] md:flex md:flex-col md:justify-center" : "bg-[#D8D8D8] md:flex md:flex-col md:justify-center" : "md:h-fit md:self-center"} rounded-md`} key={item.id}>
                            <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-black '}`}>{item.title}</h2>
                            <div className='my-4'>
                                <sup className={`text-4xl inline-block font-medium text-[#676767]`}>$</sup>
                                <span className={`text-7xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{
                                    item.price
                                }</span>
                            </div>
                            <p className={`font-medium ${isDarkMode && index === 1 ? 'text-white' : 'text-[#676767]'} border-b ${!isDarkMode ? 'border-[#ebebeb]' : 'border-[#e5e5e521]'} mb-8 pb-8`}>{item.currency}</p>
                            <ul className='flex flex-col gap-5'>
                                {
                                    item.description.map((desc: string, index: number) => (
                                        <div className='flex justify-center gap-1' key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-[18px] ${isDarkMode ? 'text-white' : 'text-black'} feather feather-check`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            <li className={`text-[18px] ${isDarkMode ? 'text-white' : 'text-[#000000cc]'} `}>{desc}</li>
                                        </div>
                                    ))
                                }
                            </ul>
                            <button className={`mt-7 w-[180px] py-3 rounded-md ${index === 1 && 'md:mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 duration-300 text-white'} ${isDarkMode ? 'border border-[hsla(0,0%,100%,0.1)] text-white' : 'border border-[#00000024]'} text-black hover:bg-[#FF6854] hover:text-white font-semibold duration-500`}>Purchase Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Price