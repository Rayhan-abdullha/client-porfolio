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
                                <li key={item.id}>
                                    <Link className="text-[#acacac] text-[16px]" to={item.url}>Icon</Link>
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