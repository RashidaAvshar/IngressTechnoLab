import React from 'react'
import logo from '../image/alfresco-logo-flower.png'
import Content from '../components/Content'






const Dashboard = () => {
  return (
    <div className='px-6'>
      <div className='header flex justify-between items-center p-2 h-20'>
        <div className='left-header flex items-center w-1/2'>
        <i className="fa-solid fa-bars"></i>
        <img src={logo} alt="" width={35}/>
        <p>Alfresco Digital Workspace</p>
        </div>
        <div className='right-header flex items-center justify-around w-1/2'>
        <form>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <i className="fa-solid fa-sort-down text-black absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></i>
    </div>
</form>
<i className="fa-solid fa-bell "></i>
<div className='flex'>
  <p>React Developer</p>
  <p className='bg-blue-900 text-white rounded-full'>RD</p>
</div>

<i className="fa-solid fa-ellipsis-vertical"></i>

        </div>
      </div>

  
<Content/>

    </div>
  )
}

export default Dashboard