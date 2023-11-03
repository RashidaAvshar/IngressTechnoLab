import React from 'react'

const Login = () => {
    return <div>


        <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-4xl text-center font-bold mb-20 leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                 Alfresco
              </h1>
              <form className="space-y-4 md:space-y-6 p-10" action="#">
                  <div>
                      
                      <input type="email" name="email" id="email" className="w-full p-2.5 border-b-2 border-b-red-400 focus:border-red-600 focus:outline-none focus:border-b-4 mb-6" placeholder="UserName" required/>
                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" placeholder="Password" className="w-full p-2.5 border-b-2 border-b-red-400 focus:border-red-600 focus:outline-none focus:border-b-4 mb-12" required/>
                  </div>
              
                  <button type="submit" className="w-full  text-white bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">Sign in</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    </div>
}

export default Login;