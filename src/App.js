import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import ColorChange from './Components/ColorChange';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Login />
      <ColorChange/>
    </div>
  );
}

export default App;
