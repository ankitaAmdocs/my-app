import './App.css';
import ApplicationRoutes from './App.routes';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
export const LoginContext = React.createContext();

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  return (
    <div className="App">
       <header className="App-header">
         { (window.location.pathname === '/homepage' || window.location.pathname === '/') && !isLoggedIn && <button className="login-button" onClick={() => { history.push("/loginpage") }}>Admin login</button>}
      </header>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
          <ApplicationRoutes />
      </LoginContext.Provider>
     
      
      <footer>

      </footer>
    </div>)
}

export default App;
