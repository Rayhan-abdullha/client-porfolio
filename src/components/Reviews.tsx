import reviews from '../db/reviews.json'
const Reviews = () => {
    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className="text-3xl font-medium border-b border-gray-20 pb-5 mb-8">My Clients Reviews.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    reviews.map(item => (
                        <div className='bg-[#F5F8FA] rounded-lg p-5 flex justify-center items-center flex-col' key={item.id}>
                            <div className='w-[200px]'>
                                <img className='w-full rounded-full border-[5px] border-[#FF6172]' src={item.url} alt="notfound" />
                            </div>
                            <p className='my-5 text-[#616161]'>{item.text}</p>
                            <h3 className='text-2xl font-medium mb-2'>{item.name}</h3>
                            <h4 className='text-[#FF6172]'>{item.title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews