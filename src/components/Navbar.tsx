import { useEffect, useState } from 'react';
import { navbar, logo } from '../db/navbarData.json'
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(1025)
    const [showNav, setShowNav] = useState<boolean>(false)

    const { isDarkMode, toggleTheme } = useTheme();

    function handleNav() {
        setShowNav(prev => !prev)
    }

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [isDarkMode, toggleTheme]);
    return (
        <>
            <div className={`overlay ${showNav && innerWidth <= 1025 ? 'block' : 'hidden'}`}></div>
            <div className="bg-[#0F0F11] py-[10px] border-b border-gray-900 h-[80px] flex items-center sticky top-0 z-10">
                <div className='container mx-auto px-5 sm:px-12 flex items-center gap-2 justify-between'>
                    <div className='flex gap-10 items-center'>
                        <div className="logo">
                            <img className='w-[120px]' src={logo.url} alt="notfound-logo" />
                        </div>
                        <nav className={`w-[50%] h-full fixed lg:static top-0 left-0 bg-white lg:bg-inherit z-[999] translate-x-[-100%] lg:translate-x-0 ${showNav && 'translate-x-[0] transition-transform'}`}>
                            <ul className={`flex gap-7 flex-col lg:flex-row p-5 lg:p-0`}>
                                <div className={`close bg-white flex justify-end ${showNav && innerWidth <= 1025 ? 'block' : 'hidden'}`}>
                                    <svg onClick={() => setShowNav(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                                {
                                    navbar.map(menu => (
                                        <li key={menu.id}>
                                            <Link className='text-[#acacac] text-[17px] hover:text-blue-400 capitalize font-semibold' to={menu.ref}>{menu.item}</Link>
                                        </li>
                                    ))
                                }
                                <li className='block sm:hidden'>
                                    <Link className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-semibold" to="/">Buy Now</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="right-section flex gap-5 items-center">
                        <Link className="hidden sm:block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-semibold" to="/">Buy Now</Link>
                        <svg onClick={handleNav} className="lg:hidden rounded-full text-white feather feather-menu cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        <div className="bg-[#FB5343] p-2 rounded-full">
                            {

                                !isDarkMode ? <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white cursor-pointer feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> :
                                    <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white cursor-pointer feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar