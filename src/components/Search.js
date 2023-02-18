import { BsSearch } from 'react-icons/bs'

const Search = ({getWeather}) => {
    return (
        <div className='flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 bg-red z-50'>
            <form >
                <div>
                    <input type="text" placeholder="Search city" />
                </div>
                <button onClick={getWeather}><BsSearch /></button>
            </form>
        </div>
    )
}

export default Search