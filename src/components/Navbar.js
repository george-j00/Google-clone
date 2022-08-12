import Search from "./Search";
import { Link } from 'react-router-dom'



export default function Navbar({ darkTheme, setDarkTheme }) {

    return (
        <>
            <div className="text-black bg-gray-300 dark:bg-gray-900 dark:text-white px-7 py-10">
                <div className='flex justify-between align-center space-between'>
                    <Link to="/search">
                    <p className="text-3xl ">GooG</p>
                    </Link>
                    <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="w-px h-px px-10 ">
                        {darkTheme ? ' 🔆 ' : ' 🌙'}
                    </button>
                </div>
                <Search />
            </div>
        </>

     )
}
