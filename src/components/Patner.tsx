import patner from '../db/ourPatner.json'
const Patner = () => {
    return (
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                patner.map(item => (
                    <div className="w-full flex justify-center items-center" key={item.id}>
                        <img className='w-[160px]' src={item.url} alt="notfound" />
                    </div>
                ))
            }
        </div>
    )
}

export default Patner