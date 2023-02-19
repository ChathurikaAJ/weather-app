import { BsSearch } from 'react-icons/bs'

const Search = ({getWeather, setCity}) => {

    return (
        <div className=' relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white'>
            <form 
                onSubmit={getWeather}
                className='flex justify-between items-center w-full m-auto p-3 bg-white  text-white rounded-2xl'>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search city" 
                        className='bg-transparent border-none text-black focus:outline-none text-2xl'
                        name="cityName"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <button type='submit'><BsSearch color='gray' /></button>
            </form>
        </div>
    )
}

export default Search