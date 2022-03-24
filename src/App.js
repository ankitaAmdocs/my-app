import './App.css';
import ApplicationRoutes from './App.routes';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <button className="login-button" onClick={() => { history.push("/loginpage") }}>Admin login</button>
      </header>
      <body>
        <ApplicationRoutes />
      </body>

      <footer>

      </footer>
    </div>
  );
}

export default App;
