import { recentWork } from '../db/workExprience.json'
const MyWorks = () => {
    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className="text-3xl font-medium border-b border-gray-20 pb-5 mb-8">{recentWork.label}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    recentWork.list.map(item => (
                        <div className='bg-[#F5F8FA] rounded-lg p-7 flex flex-col'>
                            <h3 className='text-2xl font-medium mb-2'>{item.title}</h3>
                            <p className='my-5 text-[#616161]'>{item.subtitle}</p>
                            <div className='w-full'>
                                <img className="w-full" src={item.url} alt="notfound" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyWorks