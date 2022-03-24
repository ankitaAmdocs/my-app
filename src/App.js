import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './App.routes';
import { useState } from 'react';
import React  from 'react';

export const LoginContext = React.createContext();


function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}} >
        <BrowserRouter>
          <ApplicationRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
