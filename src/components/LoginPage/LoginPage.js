import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { adminCredentials } from '../../data';
import { LoginContext } from '../../App';

const LoginPage = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const {setIsLoggedIn, isLoggedIn} = useContext(LoginContext);
  const history = useHistory();
  const login = () => {
    if (userName === adminCredentials.userName && password === adminCredentials.password) {
      setIsLoggedIn(true);
      history.push("/homepage")
    }
    else {
      setIsError(true);
    }
    setUserName("");
    setPassword("");
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      {isError && <span style={{color:"red", visibility: true}}>Invalid username / password</span>}
      <div>
        <input placeholder='Username' type="text" autoFocus value={userName} onChange={e => setUserName(e.target.value)} />
      </div>
      <div>
        <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <button disabled={!userName || !password} type="submit" onClick={login}>Login</button>
      </div>
    </div>
  );
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
