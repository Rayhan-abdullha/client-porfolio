import { useEffect, useState } from 'react';
import { navbar, logo } from '../db/navbarData.json'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(1025)
    const [showNav, setShowNav] = useState<boolean>(false)

    function handleNav() {
        setShowNav(prev => !prev)
    }

    useEffect(() => {
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <>
            <div className={`overlay ${showNav && innerWidth <= 768 ? 'block' : 'hidden'}`}></div>
            <div className="bg-[#0F0F11] py-[10px] border-b border-gray-900 h-[80px] flex items-center ">
                <div className='container mx-auto px-3 flex items-center gap-2 justify-between lg:justify-normal'>
                    <div className="logo lg:w-1/5">
                        <img className='w-[120px]' src={logo.url} alt="notfound-logo" />
                    </div>
                    <nav className={`w-[50%] lg:w-3/5 h-full fixed lg:static top-0 left-0 bg-white lg:bg-inherit z-[999] translate-x-[-100%] lg:translate-x-0 ${showNav && 'translate-x-[0] transition-transform'}`}>
                        <ul className={`flex gap-4 flex-col lg:flex-row p-5 lg:p-0`}>

                            <div className={`close bg-white flex justify-end ${showNav && innerWidth <= 1025 ? 'block' : 'hidden'}`}>
                                <svg onClick={() => setShowNav(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>

                            {
                                navbar.map(menu => (
                                    <li key={menu.id}>
                                        <Link className='text-[#acacac] text-[20px] capitalize font-semibold' to={'/'}>{menu.item}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="right-section lg:w-1/2 flex gap-5 lg:flex-auto items-center">
                        <Link className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-semibold" to="/">Buy Now</Link>
                        <svg onClick={handleNav} className="lg:hidden text-white feather feather-menu cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar