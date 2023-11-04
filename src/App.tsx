import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { CookiesProvider,useCookies } from 'react-cookie';
import path from 'path';

function App() {

  const handleLogin=(user:string)=>{
    setCookie("ingressUser", user, {path: "/"} )
  }

  const [cookie,setCookie] = useCookies(['ingressUser'])
  return (
  <CookiesProvider>
      <div className="App">
      {
        cookie.ingressUser?
        <Dashboard  />
        
        :
        <Login onLogin = {handleLogin}/>
        
      }
   
    </div>
  </CookiesProvider>
  );
}

export default App;
