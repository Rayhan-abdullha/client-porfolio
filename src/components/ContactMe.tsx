import { useTheme } from '../context/ThemeContext'
import { contactForm } from '../db/contactMe.json'
const ContactMe = () => {
    const { isDarkMode } = useTheme()

    return (
        <div className='container mx-auto px-4 pb-16'>
            <h2 className={`${!isDarkMode ? 'border-[hsl(0deg 0% 41.89% / 10%])' : 'border-[hsla(0,0%,100%,0.1)]'} text-center md:text-start text-[30px] md:text-[40px] font-bold border-b pb-5 mb-12 text-[#747474]`}>Contact With Me</h2>
            <div className="mt-16 flex flex-col md:flex-row md:items-center  gap-5">
                <div className='md:w-1/2'>
                    <img className='rounded-md' src="https://rainbowit.net/html/doob/assets/images/about/contact-image.jpg" alt="notfound" />
                </div>
                <form className='md:w-1/2 flex flex-col gap-5 mt-10 md:mt-0'>
                    {
                        contactForm.map(item => (
                            <input key={item.id} className={`rounded-xl border p-5 outline-none ${isDarkMode ? 'bg-transparent border border-[hsla(0,0%,100%,0.1)]' : 'border border-[#aaaaaa]'}`} type={item.type} placeholder={item.label} />
                        ))
                    }
                    <button className='rounded-md py-3 px-5 font-medium text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 w-[200px] transition duration-300 ease-in-out' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe