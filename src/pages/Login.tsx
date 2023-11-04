import axios from 'axios';
import { error } from 'console';
import React from 'react'
import { useState,useEffect } from 'react';
import {useCookies } from 'react-cookie';
import logo from '../image/alfresco-logo.png'

const Login = ({...props}) => {
    const {onLogin} = props

    const [correctUser, setCorrectUser] = useState(true)
    const [showPassword,setShowPassword] = useState(false)
    const [loginInfo,setLoginInfo] = useState({
        name:'',
        password: ''
    })

    const setloginInfoF =(e:any)=>{
        setLoginInfo(prev=>({...prev,[e.target.name]:e.target.value}))
        console.log(loginInfo)
    }

    function showPasswordF(e:any){
        setShowPassword(!showPassword)
    }

    const [loginDataReady,setLoginDataReady] = useState(false)
    

    const loginF =(e:any)=>{
        e.preventDefault()

        axios.post('https://1curd3ms.trials.alfresco.com/alfresco/api/-default-/public/authentication/versions/1/tickets',{userId:loginInfo.name, password:loginInfo.password})
        .then(res=>{
            if(res.status ==201){
onLogin(loginInfo.name)
setCorrectUser(true)
            }
           
        })
        .catch(error=>{
            setCorrectUser(false)
            console.log(error)
        })
    }

    return <div>


        <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <img src={logo} alt="" className='ml-24 mb-20' />
              
            {
                !correctUser?
                <div className='flex items-center justify-center'>
                    <i className="fa-solid fa-triangle-exclamation  text-center text-red-600"></i>
                <p className='text-xs text-center text-red-600'>You've entered an unknown username or password</p>
                </div>
                :
                null
            }
              <form onSubmit={loginF} className="space-y-4 md:space-y-6 p-10" action="#">
                  <div>
                      
                      <input onChange={setloginInfoF} type="text" name="name" id="name" className={loginInfo.name.length>1? "w-full p-2.5 border-b-2 border-b-gray-400 focus:border-green-600 focus:outline-none focus:border-b-4 mb-6": "w-full p-2.5 border-b-2 border-b-red-400 focus:border-red-600 focus:outline-none focus:border-b-4 mb-6"} placeholder="UserName" required/>
                  </div>
                  <div className='flex items-center relative pb-8'>
                      
                      <input onChange={setloginInfoF} type={showPassword?"text":"password"} name="password" id="password" placeholder="Password" className={loginInfo.password.length>1? "w-full p-2.5 border-b-2 border-b-gray-400 focus:border-green-600 focus:outline-none focus:border-b-4": "w-full p-2.5 border-b-2 border-b-red-400 focus:border-red-600 focus:outline-none focus:border-b-4 "} required/>
                      {
                        !showPassword?
                        <i onClick={showPasswordF} className="fa-regular fa-eye absolute right-1" ></i>
                        :
                        <i onClick={showPasswordF} className="fa-regular fa-eye-slash absolute right-1"></i>
                      }
                  </div>
              
                  <button type="submit" className="w-full  text-white disabled:bg-gray-200 bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2  text-center  " disabled = {loginInfo.name.length<1 || loginInfo.password.length<1 ? true:false}>Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    </div>
}

export default Login;