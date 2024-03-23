import { contactForm } from '../db/contactMe.json'
const ContactMe = () => {
    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className="text-3xl font-medium border-b border-gray-20 pb-5 mb-8">Contact With Me.</h2>
            <div className="my-16 flex flex-col md:flex-row gap-5">
                <div className='md:w-1/2'>
                    <img className='rounded-md' src="https://rainbowit.net/html/doob/assets/images/about/contact-image.jpg" alt="notfound" />
                </div>
                <form className='md:w-1/2 flex flex-col gap-5 mt-10'>
                    {
                        contactForm.map(item => (
                            <input className='rounded-xl border border-gray-400 p-5 outline-none' type={item.type} placeholder={item.label} />
                        ))
                    }
                    <button className='rounded-md py-3 px-5 font-medium text-white text-lg bg-[#D55145] w-[200px]' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe