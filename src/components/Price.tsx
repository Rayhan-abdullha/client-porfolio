import priceData from '../db/pricing.json'
const Price = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-medium border-b border-gray-20 pb-5 mb-8">My Pricing Plan.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-center">
                {
                    priceData.map((item, index: number) => (
                        <div className='border border-gray-200 px-5 py-10' key={item.id}>
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <div className='my-4'>
                                <sup className="text-2xl inline-block">$</sup>
                                <span className="text-5xl font-bold">{
                                    item.price
                                }</span>
                            </div>
                            <p>{item.currency}</p>
                            <hr className='my-4' />
                            <ul className='flex flex-col gap-5'>
                                {
                                    item.description.map((desc: string, index: number) => <li className='text-xl' key={index}>{desc}</li>)
                                }
                            </ul>
                            <button className={`mt-7 w-[180px] py-3 rounded-md ${index === 1 ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 duration-300' : 'border border-[#00000024] text-black hover:bg-[#FF6854] hover:text-white'} font-semibold text-white duration-500`}>Purchase Now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Price