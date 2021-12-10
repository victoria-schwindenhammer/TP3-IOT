import logo from './logoheart.svg';
import './App.css';
import RC from './RC.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	  <p> <RC /> </p>
      </header>
    </div>
  );
}





export default App;
