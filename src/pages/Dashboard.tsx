import React,{useEffect,useRef} from 'react'
import logo from '../image/alfresco-logo-flower.png'
import Content from '../components/Content'
import {useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie';


const Dashboard = () => {

  const dropdownRef = useRef(null)

  const [dropdown, setDropdown] = useState(false)
  const [dropdownNotification, setDropdownNotification] = useState(false)
  const [dropdownLanguage, setDropdownLanguage]= useState(false)
  const dropDownF = () => {
    setDropdown(!dropdown)
  }
  const dropDownLanguagesF = () => {
    setDropdownLanguage(!dropdownLanguage)
  }
  const dropDownNotificationF = () => {
    setDropdownNotification(!dropdownNotification)
  }
  const [cookie,setCookie, removeCookie] = useCookies(['ingressUser'])

  const signOutF =(e:any)=>{
    e.preventDefault()

    axios.delete('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets/-me-')
    
    .catch(error=>{
      removeCookie('ingressUser')
    })
}

document.addEventListener('click',(e:any)=>{
    if( dropdown){
      if(!e.target.classList.contains('dropdownSignup')){

        setDropdown(false) 
      }
    }
    if(dropdownNotification){
      if(!e.target.classList.contains('dropdownNotification')){
        setDropdownNotification(false)
      }
    }

})


  return (
    <div className='px-6'>
      <div className='header flex justify-between items-center p-2 h-20'>
        <div className='left-header flex items-center w-1/2'>
        <i className="fa-solid fa-bars mr-4 text-2xl "></i>
        <img src={logo} alt="" width={35}/>
        <p className='ml-2'>Alfresco Digital Workspace</p>
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
       
       
        <i  className="fa-solid fa-sort-down text-black absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></i>
    </div>
</form>
<div className='relative z-50'>
<i onClick={dropDownNotificationF} className="dropdownNotification fa-solid fa-bell text-xl  hover:border-2 hover:border-blue-700 p-2 rounded-full "></i>
<div id="dropdownNotification" className={!dropdownNotification? " hidden" : "z-50  absolute  bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"}>
   <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
  
     <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
       <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Notifications</a>
     </li>
     <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
       <a href="#"  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">You have no notifications at this time.</a>
     </li>

   </ul>
</div>
</div>

<div className='flex items-center'>
  <p className='p-2'>React Developer</p>
  <p className='bg-blue-900 text-white rounded-full p-2'>RD</p>
</div>

<div className='sign-out relative'>
 <i  onClick={dropDownF} className="dropdownSignup fa-solid fa-ellipsis-vertical cursor-pointer p-3"></i>

<div className={!dropdown? "z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10  absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    <li className='flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
    <i className="fa-solid fa-globe py-3 ml-6"></i>
        <button onClick={dropDownLanguagesF} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Language<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
  </svg></button>
          <div id="doubleDropdown" className={!dropdownLanguage? "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" : "z-10 absolute right-44  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
              </li>
            </ul>
        </div>
      </li>

      <li className='flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
      <i className="fa-solid fa-arrow-right-from-bracket py-3 ml-6"></i>
        <a href="#" onClick={signOutF} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>

    </ul>
</div>

</div>

        </div>
      </div>

  
<Content/>

    </div>
  )
}

export default Dashboard