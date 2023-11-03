import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {
        true?
        <Dashboard  />
        
        :
        <Login/>
        
      }
   
    </div>
  );
}

export default App;
