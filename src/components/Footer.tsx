import { Link } from "react-router-dom"
import footerInfo from '../db/footer.json'
import contactMe from '../db/contactMe.json'
const Footer = () => {
    return (
        <div className="bg-[#0F0F11] flex py-10 border-t border-gray-500">
            <div className="container mx-auto px-4  flex flex-col gap-5 md:gap-2 md:flex-row items-center md:justify-between">
                <ul className="flex gap-5">
                    {
                        footerInfo.menu.map((item: { id: number, item: string }) => (
                            <li key={item.id}><Link className="text-[#acacac] text-[16px] font-semibold" to="/">{item.item}</Link></li>
                        ))
                    }
                </ul>
                <div className="socialLink">
                    <ul className="flex gap-5">
                        {
                            contactMe.socialLinks.map((item: { id: number, url: string }) => (
                                <li key={item.id} className="bg-[#2e2e2e] rounded-full p-3 cursor-pointer hover:bg-[#1BA1F2] transition duration-300 ease-in-out">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#acacac] rounded-full] feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p className="text-[#acacac] text-[16px]">{footerInfo.copyright}</p></div>
        </div>
    )
}

export default Footer