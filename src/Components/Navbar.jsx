import React, { useState } from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import { MdOutlineFolderCopy } from 'react-icons/md'

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    let time = new Date()
    localStorage.setItem('city', searchValue);

    const options = {
        weekday: 'long',
        hour: 'numeric',
        minute: '2-digit',
    };

    const formattedTime = time.toLocaleString(undefined, options);


    return (
        <div className='pt-5 px-5'>
            <div className='flex lg:flex-row flex-col justify-between items-center '>
                <div className='flex xl:pl-16 lg:10 items-center  xl:space-x-36 lg:space-x-20 md:space-x-12 space-x-5'>
                    <div >
                        <h1 className='font-semibold text-3xl'>ClearSky</h1>
                    </div>
                    <div className='md:w-96 w-40'>

                        <form >
                            <div className="relative">
                                <div  className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg  className="w-4 h-4 cursor-pointer text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" value={searchValue} onChange={handleSearchChange} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-white rounded-lg bg-white focus:ring-0 focus:outline-none" placeholder="Search Location" />
                            </div>
                        </form>
                    </div >
                </div>

                <div className='flex items-center space-x-9 md:pr-7 pr-0 xl:mt-0 mt-5 '>
                    <div className='  flex space-x-1 font-semibold text-sm md:text-[1.1rem]'>
                        <p>{formattedTime}</p>
                    </div>
                    <div className=' flex space-x-6 text-[#3c3e3f] bg-white p-1 rounded-md text-2xl'>
                        <p>{<RiGlobalLine />}</p>
                        <p>{<MdOutlineFolderCopy />}</p>
                        <p>{<VscAccount />}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
