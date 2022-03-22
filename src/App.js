import './App.css';
import Movies from './components/Movies';
import Themes from './components/Themes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MyTestApp</h1>
      </header>
      <Themes />
      <Movies />
    </div>
  );
}

export default App;
