import patner from '../db/ourPatner.json'
const Patner = () => {
    return (
        <div className="container mx-auto px-5 sm:px-12 py-12 md:py-[120px] grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                patner.map(item => (
                    <div className="w-full flex justify-center items-center" key={item.id}>
                        <img className='w-[170px] md:w-[200px]' src={item.url} alt="notfound" />
                    </div>
                ))
            }
        </div>
    )
}

export default Patner